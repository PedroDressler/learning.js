exports.paginaInicial = () => {
  // res.send('Hello World!');
  res.send(`
  <form action="/" method="POST">
  Nome: <input type="text" name="nome">
  <button type="submit">Enviar Formulário</button>
  </form>
  `)
};