import i18next from 'i18next'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import App from './App.tsx'
import { EN } from './constants/index.ts'
import global_en from './translations/en/global.json'
import global_es from './translations/es/global.json'

const language = localStorage.getItem('lang')

i18next.init({
  interpolation: { escapeValue: false},
  lng:!language ? EN : language,
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
    <App/>
    </I18nextProvider>
  </StrictMode>,
)
