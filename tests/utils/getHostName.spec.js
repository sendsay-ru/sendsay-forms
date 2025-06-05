import { getHostName } from '../../src/utils/getHostName';

describe('getHostName', () => {
  it('returns the root domain', () => {
    expect(getHostName('sendsay.ru')).toBe('sendsay.ru');
  });

  it('returns the root domain for a subdomain', () => {
    expect(getHostName('sub.example.com')).toBe('example.com');
    expect(getHostName('gerryweber.com.ru')).toBe('gerryweber.com.ru');
    expect(getHostName('app.sendsay.ru')).toBe('sendsay.ru');
  });

  it('returns the domain for a multi-level public suffix', () => {
    expect(getHostName('www.example.co.uk')).toBe('example.co.uk');
  });

  it('returns the hostname for localhost', () => {
    expect(getHostName('localhost')).toBe('localhost');
  });

  it('returns the hostname for an IP address', () => {
    expect(getHostName('127.0.0.1')).toBe('127.0.0.1');
  });
});
