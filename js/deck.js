// The full 78-card tarot deck: 22 Major Arcana + 56 Minor Arcana.
// Images: Rider–Waite–Smith deck (1909, public domain), via Wikimedia Commons.
// `id` is the English name; it is also the key used in MEANINGS.

const MAJOR_ARCANA = [
  ["0", "The Fool", "El Loco"],
  ["I", "The Magician", "El Mago"],
  ["II", "The High Priestess", "La Sacerdotisa"],
  ["III", "The Empress", "La Emperatriz"],
  ["IV", "The Emperor", "El Emperador"],
  ["V", "The Hierophant", "El Hierofante"],
  ["VI", "The Lovers", "Los Enamorados"],
  ["VII", "The Chariot", "El Carro"],
  ["VIII", "Strength", "La Fuerza"],
  ["IX", "The Hermit", "El Ermitaño"],
  ["X", "Wheel of Fortune", "La Rueda de la Fortuna"],
  ["XI", "Justice", "La Justicia"],
  ["XII", "The Hanged Man", "El Colgado"],
  ["XIII", "Death", "La Muerte"],
  ["XIV", "Temperance", "La Templanza"],
  ["XV", "The Devil", "El Diablo"],
  ["XVI", "The Tower", "La Torre"],
  ["XVII", "The Star", "La Estrella"],
  ["XVIII", "The Moon", "La Luna"],
  ["XIX", "The Sun", "El Sol"],
  ["XX", "Judgement", "El Juicio"],
  ["XXI", "The World", "El Mundo"],
].map(([number, en, es], i) => ({
  id: en,
  number,
  name: { en, es },
  arcana: { en: "Major Arcana", es: "Arcanos Mayores" },
  image: `assets/cards/major-${String(i).padStart(2, "0")}.jpg`,
}));

const SUITS = [
  { en: "Wands", es: "Bastos", file: "wands" },
  { en: "Cups", es: "Copas", file: "cups" },
  { en: "Swords", es: "Espadas", file: "swords" },
  { en: "Pentacles", es: "Oros", file: "pents" },
];
const RANKS = [
  ["Ace", "As"], ["Two", "Dos"], ["Three", "Tres"], ["Four", "Cuatro"],
  ["Five", "Cinco"], ["Six", "Seis"], ["Seven", "Siete"], ["Eight", "Ocho"],
  ["Nine", "Nueve"], ["Ten", "Diez"], ["Page", "Sota"], ["Knight", "Caballero"],
  ["Queen", "Reina"], ["King", "Rey"],
];

const MINOR_ARCANA = SUITS.flatMap((suit) =>
  RANKS.map(([rankEn, rankEs], i) => ({
    id: `${rankEn} of ${suit.en}`,
    number: suit.en,
    name: { en: `${rankEn} of ${suit.en}`, es: `${rankEs} de ${suit.es}` },
    arcana: { en: "Minor Arcana", es: "Arcanos Menores" },
    image: `assets/cards/${suit.file}-${String(i + 1).padStart(2, "0")}.jpg`,
  }))
);

const DECK = [...MAJOR_ARCANA, ...MINOR_ARCANA]; // 78 cards
