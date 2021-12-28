const REG_EXP_DOMAIN = /(^|\.)[a-zA-Z0-9\-]+\.{0,1}[a-zA-Z0-9\-]*$/;

// eslint-disable-next-line compat/compat
export function getHostName(hostname = window.location.hostname) {
  try {
    const match = hostname.match(REG_EXP_DOMAIN);

    if (match) {
      let domain = match[0];

      if (domain.charAt(0) === '.') {
        domain = domain.substring(1);
      }

      return domain;
    }
  } catch (e) {
    return hostname;
  }

  return hostname;
}
