const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

// Inicialize o Express
const app = express();
app.use(express.json());

// Inicialize Sequelize
const sequelize = new Sequelize('siga', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

// Defina um modelo para a tabela alunos
const Aluno = sequelize.define('Aluno', {
  nome: DataTypes.STRING,
  RA: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  data_de_nascimento: DataTypes.DATE
}, {
  tableName: 'alunos',
  timestamps: false
});

// Rota para criar um novo aluno
app.post('/alunos', async (req, res) => {
  const aluno = await Aluno.create(req.body);
  res.json(aluno);
});

// Rota para obter todos os alunos
app.get('/alunos', async (req, res) => {
  const alunos = await Aluno.findAll();
  res.json(alunos);
});

// Rota para atualizar um aluno
app.put('/alunos/:RA', async (req, res) => {
  const aluno = await Aluno.update(req.body, {
    where: {
      RA: req.params.RA
    }
  });
  res.json(aluno);
});

// Inicie o servidor
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});