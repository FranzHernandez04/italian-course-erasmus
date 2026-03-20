# Italiano per Erasmus

Dispensa interattiva per il corso di italiano avanzato (B2/C1) rivolto a studenti Erasmus.

## Contenuto

- Lezioni strutturate con spiegazioni, tabelle e esercizi
- Tabelle dei verbi irregolari con tutti i tempi verbali
- Risorse esterne (dizionari, video, esercizi online)
- Materiali PDF scaricabili

## Tech stack

- [VitePress](https://vitepress.dev/) — generatore di siti statici basato su Vue
- Contenuti in Markdown
- Deploy statico (GitHub Pages / Vercel)

## Sviluppo

```bash
nvm use 20
npm install
npm run dev       # dev server
npm run build     # build statico (output: docs/.vitepress/dist)
npm run preview   # preview del build
```

## Deploy

Output directory: `docs/.vitepress/dist`

---

Made with ❤️ by [Franz Hernandez](https://franzhernandez.it/)
