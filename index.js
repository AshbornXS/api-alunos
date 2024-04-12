const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// Inicialize o Express
const app = express();
app.use(express.json());

// Conecte-se ao MongoDB
mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Conectado ao MongoDB!");
});

// Defina um modelo para a coleção alunos
const Aluno = mongoose.model('Aluno', new mongoose.Schema({
  nome: String,
  RA: String,
  data_de_nascimento: Date
}));

// Rota para criar um novo aluno
app.post('/alunos', async (req, res) => {
  const aluno = await Aluno.create(req.body);
  res.json(aluno);
});

// Rota para obter todos os alunos
app.get('/alunos', async (req, res) => {
  let alunos = await Aluno.find().select('-_id -__v');
  alunos = alunos.map(aluno => {
    aluno = aluno.toObject();
    aluno.data_de_nascimento = aluno.data_de_nascimento.toISOString().split('T')[0];
    return aluno;
  });
  res.json(alunos);
});

// Rota para atualizar um aluno
app.put('/alunos/:RA', async (req, res) => {
  const aluno = await Aluno.findOneAndUpdate({ RA: req.params.RA }, req.body, { new: true });
  res.json(aluno);
});

// Rota para remover um aluno
app.delete('/alunos/:RA', async (req, res) => {
  const aluno = await Aluno.findOneAndDelete({ RA: req.params.RA });
  res.json(aluno);
});

// Inicie o servidor
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});