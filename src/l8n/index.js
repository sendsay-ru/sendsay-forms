import { ru } from './locales/ru';
import { en } from './locales/en';

function getLang() {
  let lang = 'ru';
  if (navigator) {
    const systemLang = (navigator.language || navigator.systemLanguage || navigator.userLanguage || '').substr(0, 2).toLowerCase();
    if (systemLang && systemLang !== 'ru') {
      lang = 'en';
    }
  }
  return lang;
}

export function l8n(key) {
  return (getLang() === 'en' ? en[key] : ru[key]) || key;
}
