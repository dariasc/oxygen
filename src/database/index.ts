import Enmap from 'enmap';

class Settings extends Enmap<string, Config> {
  defaults: Config = {
    prefix: ';',
    auth: {
      token: '',
      steamid: '',
    },
    server: {
      token: 0,
      ip: '',
      port: 0,
    },
  };

  ensure(key: string) {
    return super.ensure(key, this.defaults);
  }
}

export interface Config {
  prefix: string;
  auth: {
    token: string;
    steamid: string;
  };
  server: {
    token: number;
    ip: string;
    port: number;
  };
}

const settings = new Settings({
  name: 'settings',
  fetchAll: true,
  autoFetch: true,
  cloneLevel: 'deep',
});

export default settings;
