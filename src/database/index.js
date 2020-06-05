const Enmap = require('enmap');

const settings = new Enmap({
  name: 'settings',
  fetchAll: false,
  autoFetch: true,
  cloneLevel: 'deep',
});

const defaultSettings = {
  prefix: ';',
  authToken: '',
  playerToken: '',
  ip: '',
  port: '',
};

settings.defer.then(() => {
  console.log(`Enmap [settings] loaded: ${settings.count} keys`);
});

module.exports = {
  settings,
  defaultSettings,
};
