import express from 'express';
const app = express()
const port = process.env.PORT || 3000;

// Serve my-web-site na raiz
app.use(express.static('public/my-web-site'));

// Serve jogodavelha na rota /jogodavelha
app.use('/jogodavelha', express.static('public/jogoDaVelha/jogodavelha'));

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});