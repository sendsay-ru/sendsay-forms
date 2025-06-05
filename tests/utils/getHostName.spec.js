import { getEffectiveDomain } from '../../src/utils/getHostName';

describe('getEffectiveDomain', () => {
  it('returns the root domain', () => {
    expect(getEffectiveDomain('sendsay.ru')).toBe('sendsay.ru');
  });

  it('returns the root domain for a subdomain', () => {
    expect(getEffectiveDomain('sub.example.com')).toBe('example.com');
    expect(getEffectiveDomain('gerryweber.com.ru')).toBe('gerryweber.com.ru');
    expect(getEffectiveDomain('app.sendsay.ru')).toBe('sendsay.ru');
  });

  it('returns the domain for a multi-level public suffix', () => {
    expect(getEffectiveDomain('www.example.co.uk')).toBe('example.co.uk');
  });

  it('returns the hostname for localhost', () => {
    expect(getEffectiveDomain('localhost')).toBe('localhost');
  });

  it('returns the hostname for an IP address', () => {
    expect(getEffectiveDomain('127.0.0.1')).toBe('127.0.0.1');
  });
});
