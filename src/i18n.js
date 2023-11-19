import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import es from './locales/es.json'
import pt from './locales/pt.json'
const lang = localStorage.getItem("language") || "en";
export default createI18n({
  locale: lang || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: {en, es, pt}
})