// const response  = fetch('./pessoas.json')
//   .then(res => res.json())
//   .then(json => loadHtml(json))
//   .catch(e => console.error(e));

axios('./pessoas.json').then(res => loadHtml(res.data))

function loadHtml(json){
  const result = document.querySelector('.resultado');
  let i = 1;
  for(pessoa of json){
    result.innerHTML +=`<ul>
                          <li>${i} - ${pessoa.nome}</li>
                          <ul>
                            <li>Idade: ${pessoa.idade}</li>
                            <li>Sexo: ${pessoa.sexo}</li>
                            <li>Email: ${pessoa.email}</li>
                            <li>Salário: R$ ${pessoa.salario.toLocaleString()}</li>
                          </ul>
                        </ul>`;
    i++;
  }
}
