import Cookies from 'js-cookie';
import { COOKIE_EXPIRES_DATE } from './constants';

export const getCookies = () => ({
  ...Cookies.get(),
  isProduction: Cookies.get('isProduction') === 'true',
});

export const setCookie = (name, value) => Cookies.set(name, value, { expires: COOKIE_EXPIRES_DATE });

export const clearAllCookie = () => {
  document.cookie = '';
};
