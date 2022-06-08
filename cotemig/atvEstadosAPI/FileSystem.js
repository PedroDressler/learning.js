import { existsSync, promises as fs } from 'fs';

export async function rFile() {
  var estados = await fs.readFile('./json-all/Estados.json');
  estados = JSON.parse(estados);
  console.log(estados);

  var cidades = await fs.readFile('./json-all/Cidades.json');
  cidades = JSON.parse(cidades);
  // console.log(cidades);
  if (!existsSync('./json-uf')) {
    await fs.mkdir('./json-uf', { recursive: true });
  }
  for (var i of estados) {
    const UF = cidades.filter(cidade => cidade.Estado == i.ID);
    await fs.writeFile(`./json-uf/${i.Sigla}.json`, JSON.stringify(UF))
  }
}