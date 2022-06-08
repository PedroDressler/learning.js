import { promises as fs } from 'fs';

async function statesQnt(est) {
  var uf = est.toUpperCase();
  var data = await fs.readFile(`./json-uf/${uf}.json`);
  data = JSON.parse(data);
  // console.log(data);
  return `Estado: ${est}.\nQuatidade: ${data.length} cidades.`
}

async function get() {
  var total = await statesQnt('MG');
  console.log(total)
}

get()