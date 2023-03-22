import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

function getLanguage() {
  var lng = navigator.language || navigator.userLanguage
  if (window.localStorage.language) {
    lng = window.localStorage.language
  } else if (lng.includes('pt')) {
    lng = 'pt'
  } else if (lng.includes('en')) {
    lng = 'en'
  } else {
    lng = 'en'
  }
  return lng
}

const language = getLanguage()

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: language,
  resources: {
    en: {
      translations: require('./locales/en/translations.json'),
    },
    pt: {
      translations: require('./locales/pt/translations.json'),
    },
  },
  ns: ['translations'],
  defaultNS: 'translations',
})

i18n.languages = ['en', 'pt']

export default i18n
