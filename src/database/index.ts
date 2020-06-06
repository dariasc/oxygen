import Enmap from 'enmap';

class Settings extends Enmap<string, Config> {

  defaults: Config = {
    prefix: ';',
    authToken: '',
    playerToken: '',
    ip: '',
    port: 0,
  };

  init() {
    this.defer.then(() => {
      console.log(`[settings] enmap loaded: ${settings.count} keys`);
    });
  }

  ensure(key: string) {
    return super.ensure(key, this.defaults);
  }

}

interface Config {
  prefix: string,
  authToken: string,
  playerToken: string,
  ip: string,
  port: number,
}

const settings = new Settings({
  name: 'settings',
  fetchAll: false,
  autoFetch: true,
  cloneLevel: 'deep',
});

export default settings;
