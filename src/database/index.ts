import Enmap from 'enmap';

class Settings extends Enmap {

  defaults: Object = {};

  init() {
    this.defer.then(() => {
      console.log(`[settings] enmap loaded: ${settings.count} keys`);
    });
  }

  ensure(key: string) {
    return super.ensure(key, this.defaults);
  }

}

const settings = new Settings({
  name: 'settings',
  fetchAll: false,
  autoFetch: true,
  cloneLevel: 'deep',
});

settings.defaults = {
  prefix: ';',
  authToken: '',
  playerToken: '',
  ip: '',
  port: '',
};

export default settings;
