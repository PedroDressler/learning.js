import { promises as fs } from 'fs';

var estados, cidades;

export async function rFile() {
  estados = await fs.readFile('./json-all/Estados.json');
  estados = await JSON.parse(estados);
  // console.log(estados);
  cidades = await fs.readFile('./json-all/Cidades.json');
  cidades = await JSON.parse(cidades);
  // console.log(cidades);
}

export async function wFile() {
  returnUF();
}

async function returnUF() {
  await fs.mkdir('./json-uf', { recursive: true }); // Fazer a pasta json-uf caso não esteja criada
  for(var i in estados){
    const uf = await cidades.filter(cidade => {cidade.Estado == i.ID})
    await fs.writeFile(`./json-uf/${estados[i].Sigla}`, JSON.stringify(uf));
  }
}