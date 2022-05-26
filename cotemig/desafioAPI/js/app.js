const http = 'https://restcountries.com/v2/all';
var data; // contains all json data, reason for this is to make all the data """global"""
var dataFav = [];
const totalPop = document.querySelector('#totalPopulationList'); // main Table
const totalTable = document.querySelector('#tabCountries');
const totalCountries = document.querySelector('#countCountries');
const favPop = document.querySelector('#totalPopulationFavorites'); // fav Table
const favCountries = document.querySelector('#countFavourites');
const favTable = document.querySelector('#tabFavourites');


async function resources() {
  try {
    const res = await fetch(http);
    const dados = await res.json();
    data = dados;
    render(data, dataFav);
  } catch (erro) {
    console.log('Erro: ' + erro);
  }
}
resources();


document.addEventListener('click', event => {
  const el = event.target;
  if (el.classList.contains('add')) {
    addFav(el.parentNode.parentNode); //parentNode(2x) returns <tr> element of button pressed
  } else if (el.classList.contains('remove')) {
    removeFav(el.parentNode.parentNode);
  }
});


function printHTML(dados, dadosFav) {
  const divCountry = document.querySelector('#tabCountries tbody');
  const divFavCountry = document.querySelector('#tabFavourites tbody');
  divCountry.innerHTML = '';
  divFavCountry.innerHTML = '';
  for (i in dados) {
    divCountry.innerHTML += `<tr id='${i}'>
                              <td><input type='button' class='add' value='+'></td>
                              <td>${dados[i].numericCode}</td>
                              <td><img src='${dados[i].flag}' title='${dados[i].name}'/></td>
                              <td>${dados[i].name}</td><td>${dados[i].population.toLocaleString()}</td>
                             </tr>`;
  }
  for (e in dadosFav) {
    divFavCountry.innerHTML += `<tr id='${e}'>
                                <td><input type='button' class='remove' value='-'></td>
                                <td>${dadosFav[e].numericCode}</td>
                                <td><img src='${dadosFav[e].flag}' title='${dadosFav[e].name}' /></td>
                                <td>${dadosFav[e].name}</td><td>${dadosFav[e].population.toLocaleString()}</td>
                              </tr>`;
  }
}

function printData(dados, dadosFav) {
  let sumPop = 0, sumFavPop = 0;
  for (i in dados) {
    sumPop += dados[i].population;
  }
  totalCountries.innerHTML = dados.length;
  totalPop.innerHTML = sumPop.toLocaleString();
  for (i in dadosFav) {
    sumFavPop += dadosFav[i].population;
  }
  favCountries.innerHTML = dadosFav.length;
  favPop.innerHTML = sumFavPop.toLocaleString();
}

function addFav(el) {
  dataFav.push(data[el.id]);
  data.splice(el.id, 1);
  organize();
  render(data, dataFav);
}

function removeFav(el) {
  data.push(dataFav[el.id]);
  dataFav.splice(el.id, 1);
  organize();
  render(data, dataFav);
}

function render(d, f) {
  printHTML(d, f);
  printData(d, f);
  /*  d stands for normal data
      f stands for favourite data */
}

function organize() {
  data.sort(dynamicSort('name'));
  dataFav.sort(dynamicSort('name'));
}

function dynamicSort(property) { // função para organizar o array indicado por uma das propriedades dele, no meu caso, ele vai organizar o array pelo nome
  var sortOrder = 1;
  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function (a, b) {
    var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    return result * sortOrder;
  }
}