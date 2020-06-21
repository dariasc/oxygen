import fs from 'fs';
import fetch from 'node-fetch';
import { green, magenta } from 'kleur';

const cdn = 'https://d1wp6m56sqw74a.cloudfront.net/~assets/';
const assets = [
  {
    name: 'crate',
    hash: 'c450449d6f6867cd85dd2fd92bcf623b',
  },
];

const requests = assets.map((asset) => {
  return fetch(cdn + asset.hash).then(async (res) => {
    const img = await res.arrayBuffer();
    fs.writeFileSync(`${__dirname}/${asset.name}.png`, Buffer.from(img));
    console.log(magenta('ASSET'), `${asset.hash}:${asset.name}`);
  });
});

Promise.all(requests).then(() => {
  console.log(green('DONE'), 'Assets downloaded');
});
