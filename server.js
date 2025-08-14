import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express()

// Ajustes para __dirname no ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// porta do render ou local
const port = process.env.PORT || 3000;

// Serve my-web-site na raiz
app.use('/', express.static(path.join(__dirname,'public/my-web-site')));

// Serve jogodavelha na rota /jogodavelha
app.use('/jogodavelha', express.static(path.join(__dirname,'public/jogoDaVelha/jogodavelha')));

// para qualquer rota não encontrada
app.use((req, res) => {
  res.status(404).send('Página não encontrada')
})

// start do servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});