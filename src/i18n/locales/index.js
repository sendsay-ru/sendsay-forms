import ru, { LOCALE_RU } from './ru';
import en, { LOCALE_EN } from './en';

export const MESSAGES = {
  [LOCALE_RU]: ru,
  [LOCALE_EN]: en,
};

// should be 'en'
// it's more reasonable for Frenchman to read English instead of Russian
export const DEFAULT_LOCALE = LOCALE_EN;
