import express from 'express';
const app = express();

app.use(express.urlencoded({ extended: true }));

app.listen(3300, () => {
  console.log('Acessar https://localhost:3300');
  console.log('Servidor executando na porta 3300')
});
