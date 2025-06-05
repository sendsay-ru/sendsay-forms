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
]);

export function getEffectiveDomain(hostname = window.location.hostname) {
  const parsed = parse(hostname);

  if (
    !parsed.domain ||
    parsed.domain === parsed.publicSuffix ||
    knownBadDomains.has(parsed.domain)
  ) {
    return hostname;
  }

  return parsed.domain;
}
