import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { ua } from './locales/ua'
import { en } from './locales/en'

export const languages = [
  { code: 'ua', label: 'UA' },
  { code: 'en', label: 'EN' },
] as const

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ua: { translation: ua },
      en: { translation: en },
    },
    fallbackLng: 'ua',
    supportedLngs: ['ua', 'en'],
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  })

export default i18n
