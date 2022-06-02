import { ru } from './locales/ru';
import { en } from './locales/en';

const getSystemLang = () =>
  navigator.language || navigator.systemLanguage || navigator.userLanguage;

const getLanguage = () => document.documentElement.lang || getSystemLang();
const formatLanguage = (lang) => lang.substr(0, 2).toLowerCase();

const getLang = () => {
  if (!navigator) {
    return 'ru';
  }

  const language = getLanguage();
  const formattedLang = formatLanguage(language);

  if (formattedLang === 'ru') {
    return 'ru';
  }

  return 'en';
};

export function l8n(key) {
  return (getLang() === 'en' ? en[key] : ru[key]) || key;
}
