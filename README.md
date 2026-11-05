# Tarot Rojo

A tarot app built with plain HTML, CSS and a little JavaScript — no build step.

## Run it

Open `index.html` in a browser. Or serve the folder locally:

```sh
python3 -m http.server 8000
```

then visit http://localhost:8000.

## Structure

```
index.html        Main page
css/styles.css    All styles (design tokens at the top in :root)
js/i18n.js        Interface text and spreads in English and Spanish
js/deck.js        The 78-card deck (names in English and Spanish)
js/meanings.js    Card meanings (English and Spanish) for the interpretation
js/app.js         Random draw (Math.random) and rendering
assets/cards/     Card artwork
assets/images/    Other images
```

## Credits

Card images: Rider–Waite–Smith tarot (Pamela Colman Smith, 1909), public domain, from Wikimedia Commons.
