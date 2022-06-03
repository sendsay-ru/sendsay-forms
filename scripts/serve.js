const superstatic = require('superstatic').server;
const path = require('path');

console.log('Use a static server in production instead...\n');

const DEFAULT_PORT = process.env.PORT || 8082;

const app = superstatic({
  port: DEFAULT_PORT,
  cwd: path.resolve(__dirname, '../dist')
});

app.listen(() => {
  console.log(`Listening on http://localhost:${DEFAULT_PORT}`);
});
