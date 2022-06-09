import { promises as fs } from 'fs';

var data

async function statesQnt(est) {
  var uf = est.toUpperCase();
  data = await fs.readFile(`./json-uf/${uf}.json`);
  data = JSON.parse(data);
  return data.length;
}

export async function get(uf) {
  var total = await statesQnt(uf);
  return total;
}

async function getInternal(uf){
  var total = await statesQnt(uf);
  console.log(total)
}

getInternal('MG')
