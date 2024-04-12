# API de Alunos

Esta é uma API para gerenciar informações de alunos.

## URL da API

https://api-alunos-fatec.vercel.app/alunos

## Funcionalidades

- Listar todos os alunos
- Obter informações de um aluno específico
- Adicionar um novo aluno
- Atualizar informações de um aluno existente
- Remover um aluno

## Endpoints

### GET /alunos

Retorna uma lista de todos os alunos cadastrados.

### GET /alunos/{RA}

Retorna as informações de um aluno específico com base no RA fornecido.

### POST /alunos

Adiciona um novo aluno à base de dados. Os dados do aluno devem ser fornecidos no corpo da solicitação em formato json.

### PUT /alunos/{RA}

Atualiza as informações de um aluno existente com base no RA fornecido. Os dados atualizados do aluno devem ser fornecidos no corpo da solicitação em formato json.

### DELETE /alunos/{RA}

Remove um aluno da base de dados com base no RA fornecido.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
