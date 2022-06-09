import { promises as fs } from 'fs';

var estados, cidades;

async function rFile() {
  estados = await fs.readFile('./json-all/Estados.json');
  estados = JSON.parse(estados);
  // console.log(estados);

  cidades = await fs.readFile('./json-all/Cidades.json');
  cidades = JSON.parse(cidades);
  // console.log(cidades);

  await fs.mkdir('./json-uf', { recursive: true });

  for (var i of estados) {
    const UF = cidades.filter(cidade => cidade.Estado == i.ID);
    await fs.writeFile(`./json-uf/${i.Sigla}.json`, JSON.stringify(UF))
  }

}

rFile();

export { rFile, estados }
