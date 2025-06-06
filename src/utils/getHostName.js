/* eslint-disable compat/compat */
import { parse } from 'tldts';

const knownBadDomains = new Set([
  'com.ru',
  'net.ru',
  'org.ru',
  'pp.ru',
  'com.ua',
  'co.com',
  'co.nl',
  'co.pl',
  'co.hu',
  'netlify.app',
  'github.io',
  'vercel.app',
]);

export function getHostName(hostname = window.location.hostname) {
  const parsed = parse(hostname);

  if (
    !parsed.domain ||
    parsed.domain === parsed.publicSuffix ||
    parsed.isPrivate ||
    knownBadDomains.has(parsed.domain)
  ) {
    return hostname;
  }

  return parsed.domain;
}
