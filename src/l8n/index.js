import ru, { LOCALE_RU } from './locales/ru';
import en, { LOCALE_EN } from './locales/en';

const getBrowserLang = () =>
  navigator.language || navigator.systemLanguage || navigator.userLanguage;

const getUserLang = () => document.documentElement.lang || getBrowserLang();
const formatLang = (lang) => lang.substr(0, 2).toLowerCase();

const getLang = () => {
  if (!navigator) {
    return LOCALE_RU;
  }

  const language = getUserLang();
  const formattedLang = formatLang(language);

  if (formattedLang === LOCALE_RU) {
    return LOCALE_RU;
  }

  return LOCALE_EN;
};

export function l8n(key) {
  return (getLang() === LOCALE_EN ? en[key] : ru[key]) || key;
}
