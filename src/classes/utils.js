export function getHostName() {
  try {
    const match = location.hostname.match(/(^|\.)[a-zA-Z0-9\-]+\.{0,1}[a-zA-Z0-9\-]*$/);

    if (match) {
      let domain = match[0];

      if (domain[0] !== '.') {
        domain = '.' + domain;
      }

      return domain;
    }
  } catch(e) {
    return location.hostname;
  }

  return location.hostname;
}