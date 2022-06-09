import { get } from './atv02.js';
import { rFile, estados } from './atv01.js';

var BD = []

async function getArr() {
  for (var i = 0; i < estados.length; i++) {
    var qnt = await get(`${estados[i].Sigla}`)
    var obj = new Object();
    obj.estado = estados[i].Sigla;
    obj.cidades = qnt;
    BD.push(obj);
  }
}

async function exe() {
  await rFile();
  await getArr();
  const five = returnFive();
  console.log(five);
}

function returnFive() {
  var uf = BD.sort(objSort("cidades"));
  uf.reverse();
  uf.splice(-(uf.length - 5));
  return uf;
}

exe();

function objSort(uf) {
  var sortOrder = 1;
  if (uf[0] === "-") {
    sortOrder = -1;
    uf = uf.substr(1);
  }
  return function (a, b) {
    var result = (a[uf] < b[uf]) ? -1 : (a[uf] > b[uf]) ? 1 : 0;
    return result * sortOrder;
  }
}
