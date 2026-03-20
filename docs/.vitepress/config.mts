import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/italian-course-erasmus/',
  title: 'Italiano per Erasmus',
  description: 'Corso di italiano avanzato per studenti Erasmus',
  lang: 'it-IT',
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
  ],
  themeConfig: {
    logo: '/favicon.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Lezioni', link: '/lezioni/01-verbi-irregolari' },
      { text: 'Risorse', link: '/risorse/link-utili' },
    ],
    sidebar: {
      '/lezioni/': [
        {
          text: 'Lezioni',
          items: [
            { text: '01 - Verbi irregolari', link: '/lezioni/01-verbi-irregolari' },
          ],
        },
      ],
      '/risorse/': [
        {
          text: 'Risorse',
          items: [
            { text: 'Link utili', link: '/risorse/link-utili' },
            { text: 'Download', link: '/risorse/downloads' },
          ],
        },
      ],
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Cerca', buttonAriaLabel: 'Cerca' },
          modal: {
            noResultsText: 'Nessun risultato per',
            resetButtonTitle: 'Cancella ricerca',
            footer: { selectText: 'per selezionare', navigateText: 'per navigare', closeText: 'per chiudere' },
          },
        },
      },
    },
    outline: { label: 'In questa pagina' },
    docFooter: { prev: 'Lezione precedente', next: 'Lezione successiva' },
    returnToTopLabel: 'Torna su',
    socialLinks: [],
    footer: {
      message: `© ${new Date().getFullYear()} — Tutti i diritti riservati`,
      copyright: 'Made with ❤️ by <a href="https://franzhernandez.it/" target="_blank">Franz Hernandez</a>',
    },
  },
})
