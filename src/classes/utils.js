export function getHostName() {
  const match = location.hostname.match(/(^|\.)[a-zA-Z0-9\-]+\.{0,1}[a-zA-Z0-9\-]*$/);

  if (match) {
    return match[0];
  }

  return location.hostname;
}