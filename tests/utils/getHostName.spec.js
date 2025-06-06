/* eslint-disable compat/compat */
import { getHostName } from '../../src/utils/getHostName';

describe('getHostName', () => {
  it('returns the root domain', () => {
    expect(getHostName('sendsay.ru')).toBe('sendsay.ru');
  });

  it('returns the root domain for a subdomain', () => {
    expect(getHostName('sub.example.com')).toBe('example.com');
    expect(getHostName('app.sendsay.ru')).toBe('sendsay.ru');
  });

  it('returns the full hostname for domain in knownBadDomains', () => {
    expect(getHostName('gerryweber.com.ru')).toBe('gerryweber.com.ru');
    expect(getHostName('foo.net.ru')).toBe('foo.net.ru');
    expect(getHostName('test.co.pl')).toBe('test.co.pl');
  });

  it('returns the full hostname for private/public suffixes', () => {
    expect(getHostName('v4-0-0--sendsay-forms.netlify.app')).toBe(
      'v4-0-0--sendsay-forms.netlify.app'
    );
    expect(getHostName('someuser.github.io')).toBe('someuser.github.io');
    expect(getHostName('myapp.vercel.app')).toBe('myapp.vercel.app');
  });

  it('returns the domain for a multi-level public suffix', () => {
    expect(getHostName('www.example.co.uk')).toBe('example.co.uk');
  });

  it('returns the hostname for localhost', () => {
    expect(getHostName('localhost')).toBe('localhost');
  });

  it('returns the hostname for an IP address', () => {
    expect(getHostName('127.0.0.1')).toBe('127.0.0.1');
    expect(getHostName('192.168.0.1')).toBe('192.168.0.1');
  });

  it('returns the hostname unchanged if domain is null', () => {
    // For undefined or invalid input
    expect(getHostName('')).toBe('');
    expect(getHostName(undefined)).toBe(window.location.hostname);
  });
});
