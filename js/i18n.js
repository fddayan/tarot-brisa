// Interface text and spread positions in English and Spanish.

const UI = {
  en: {
    languageLabel: "Language",
    heroTitle: "Welcome to your reading",
    heroLead: "How many cards would you like to draw?",
    card: "card",
    cards: "cards",
    readingHint: "Tap a card to turn it over.",
    interpretation: "Interpretation",
    interpretationEmpty: "Turn your cards over to read what they mean.",
    revealAll: "Reveal all",
    drawAgain: "Draw again",
    chooseAnother: "Choose another spread",
    revealCard: "Reveal card",
  },
  es: {
    languageLabel: "Idioma",
    heroTitle: "Te damos la bienvenida a tu lectura",
    heroLead: "¿Cuántas cartas quieres sacar?",
    card: "carta",
    cards: "cartas",
    readingHint: "Toca una carta para revelarla.",
    interpretation: "Interpretación",
    interpretationEmpty: "Revela tus cartas para leer lo que significan.",
    revealAll: "Revelar todas",
    drawAgain: "Volver a tirar",
    chooseAnother: "Elegir otra tirada",
    revealCard: "Revelar carta",
  },
};

// Each position: [name, short guide to what that card speaks to].
const SPREADS = {
  1: {
    title: { en: "One Card", es: "Una carta" },
    positions: {
      en: [["Your card", "The energy or message most present for you right now."]],
      es: [["Tu carta", "La energía o el mensaje más presente para ti en este momento."]],
    },
  },
  3: {
    title: { en: "Past, Present, Future", es: "Pasado, presente, futuro" },
    positions: {
      en: [
        ["Past", "What has shaped the situation."],
        ["Present", "Where you stand right now."],
        ["Future", "Where things are heading if nothing changes."],
      ],
      es: [
        ["Pasado", "Lo que ha dado forma a la situación."],
        ["Presente", "Dónde estás ahora mismo."],
        ["Futuro", "Hacia dónde van las cosas si nada cambia."],
      ],
    },
  },
  10: {
    title: { en: "Celtic Cross", es: "Cruz Celta" },
    positions: {
      en: [
        ["Present", "The heart of the matter."],
        ["Challenge", "What crosses you — the obstacle to work with."],
        ["Foundation", "The deeper root beneath the situation."],
        ["Recent past", "What is just passing away."],
        ["Goal", "What you are aiming for, or could achieve."],
        ["Near future", "What is coming next."],
        ["Yourself", "Your attitude and how you approach this."],
        ["Environment", "The people and influences around you."],
        ["Hopes and fears", "What you hope for — or quietly fear."],
        ["Outcome", "Where all of this is likely to lead."],
      ],
      es: [
        ["Presente", "El corazón del asunto."],
        ["Desafío", "Lo que se cruza en tu camino: el obstáculo con el que trabajar."],
        ["Base", "La raíz profunda de la situación."],
        ["Pasado reciente", "Lo que está quedando atrás."],
        ["Meta", "Lo que buscas o podrías lograr."],
        ["Futuro cercano", "Lo que viene a continuación."],
        ["Tú", "Tu actitud y cómo encaras esto."],
        ["Entorno", "Las personas e influencias a tu alrededor."],
        ["Esperanzas y temores", "Lo que esperas, o lo que en silencio temes."],
        ["Resultado", "Hacia dónde es probable que lleve todo esto."],
      ],
    },
  },
};
