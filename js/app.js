// Draws random cards, shows them face down, and reveals them with their
// interpretation. All text follows the chosen language (English / Spanish).

const LANGS = ["en", "es"];

// ---------- Language ----------
function loadLang() {
  try {
    const saved = localStorage.getItem("lang");
    if (LANGS.includes(saved)) return saved;
  } catch {}
  return navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
}

function saveLang(lang) {
  try {
    localStorage.setItem("lang", lang);
  } catch {}
}

let lang = loadLang();
const t = (key) => UI[lang][key];

// ---------- Drawing ----------
// Returns `count` different cards, chosen with Math.random (Fisher–Yates shuffle).
function drawCards(count) {
  const deck = [...DECK];
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck.slice(0, count);
}

// The current reading, kept so it can be redrawn in another language.
const reading = { count: null, cards: [], revealed: new Set() };

// ---------- Elements ----------
const readingSection = document.getElementById("reading");
const readingTitle = document.getElementById("reading-title");
const readingCards = document.getElementById("reading-cards");
const interpretationList = document.getElementById("interpretation-list");
const interpretationEmpty = document.getElementById("interpretation-empty");

function makeText(className, text) {
  const el = document.createElement("p");
  el.className = className;
  el.textContent = text;
  return el;
}

// ---------- Rendering ----------
// Each card starts face down; tapping it flips it to show the picture.
function renderCard(card, position, index) {
  const li = document.createElement("li");
  li.className = "tarot-card";
  li.dataset.index = index;

  const flip = document.createElement("button");
  flip.type = "button";
  flip.className = "card-flip";
  flip.setAttribute("aria-label", `${t("revealCard")}: ${position}`);

  const inner = document.createElement("span");
  inner.className = "card-flip-inner";

  const back = document.createElement("span");
  back.className = "card-face card-back";
  back.textContent = "✦";

  const front = document.createElement("span");
  front.className = "card-face card-front";
  const img = document.createElement("img");
  img.className = "tarot-card-image";
  img.src = card.image;
  img.alt = card.name[lang];
  img.width = 357;
  img.height = 600;
  front.append(img);

  inner.append(back, front);
  flip.append(inner);

  const details = document.createElement("div");
  details.className = "tarot-card-details";
  details.append(
    makeText("tarot-card-name", card.name[lang]),
    makeText("tarot-card-arcana", card.arcana[lang])
  );

  flip.addEventListener("click", () => revealCard(index));

  li.append(makeText("tarot-card-position", position), flip, details);
  return li;
}

// One interpretation entry per card, hidden until that card is turned over.
function renderInterpretation(card, [position, guide], index) {
  const [keywords, meaning] = MEANINGS[lang][card.id];
  const li = document.createElement("li");
  li.className = "interpretation-item";
  li.id = `interpretation-${index}`;
  li.hidden = true;

  const heading = document.createElement("h4");
  const pos = document.createElement("span");
  pos.className = "interpretation-position";
  pos.textContent = position;
  heading.append(pos, ` ${card.name[lang]}`);

  li.append(
    heading,
    makeText("interpretation-guide", guide),
    makeText("interpretation-keywords", keywords),
    makeText("interpretation-meaning", meaning)
  );
  return li;
}

function showRevealed(index) {
  const li = readingCards.querySelector(`[data-index="${index}"]`);
  li.classList.add("is-revealed");
  const flip = li.querySelector(".card-flip");
  flip.disabled = true;
  flip.removeAttribute("aria-label");
  document.getElementById(`interpretation-${index}`).hidden = false;
  interpretationEmpty.hidden = true;
}

function revealCard(index) {
  if (reading.revealed.has(index)) return;
  reading.revealed.add(index);
  showRevealed(index);
}

function renderReading() {
  const spread = SPREADS[reading.count];
  const positions = spread.positions[lang];

  readingTitle.textContent = spread.title[lang];
  readingCards.dataset.count = reading.count;
  readingCards.replaceChildren(
    ...reading.cards.map((card, i) => renderCard(card, positions[i][0], i))
  );
  interpretationList.replaceChildren(
    ...reading.cards.map((card, i) => renderInterpretation(card, positions[i], i))
  );
  interpretationEmpty.hidden = false;
  reading.revealed.forEach(showRevealed);
}

function showReading(count) {
  reading.count = count;
  reading.cards = drawCards(count);
  reading.revealed = new Set();
  renderReading();
  readingSection.hidden = false;
  readingSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ---------- Static text ----------
function applyLanguage() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-spread-title]").forEach((el) => {
    el.textContent = SPREADS[el.dataset.spreadTitle].title[lang];
  });
  document.querySelector(".lang-switch").setAttribute("aria-label", t("languageLabel"));
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
  });
  if (reading.count) renderReading();
}

// ---------- Events ----------
document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    lang = button.dataset.lang;
    saveLang(lang);
    applyLanguage();
  });
});

document.querySelectorAll(".spread-option").forEach((button) => {
  button.addEventListener("click", () => showReading(Number(button.dataset.count)));
});

document.getElementById("draw-again").addEventListener("click", () => {
  if (reading.count) showReading(reading.count);
});

document.getElementById("reveal-all").addEventListener("click", () => {
  reading.cards.forEach((_, i) => revealCard(i));
});

document.getElementById("choose-another").addEventListener("click", () => {
  readingSection.hidden = true;
  document.querySelector(".hero").scrollIntoView({ behavior: "smooth" });
});

applyLanguage();
