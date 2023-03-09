CREATE DATABASE fichario;

CREATE TABLE usuarios(
id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  email VARCHAR(50) NOT NULL,
  senha VARCHAR(120) NOT NULL
);

CREATE TABLE professores(
  id SERIAL PRIMARY KEY,
	nome TEXT NOT NULL
);

CREATE TABLE disciplinas(
id SERIAL PRIMARY KEY,
nome TEXT NOT NULL,
  professor_id INTEGER REFERENCES professores(id),
  data date,
  usuario_id INTEGER REFERENCES usuarios(id)
);

CREATE TABLE eventos(
id SERIAL PRIMARY KEY,
  usuario_id INTEGER REFERENCES usuarios(id),
  data DATE,
  disciplina_id INTEGER REFERENCES disciplinas(id),
  tipo VARCHAR(50) NOT NULL 
);

CREATE TABLE anotacoes(
id SERIAL PRIMARY KEY,
  usuario_id INTEGER REFERENCES usuarios(id),
  descricao TEXT NOT NULL
);

CREATE TABLE links(
id SERIAL PRIMARY KEY,
  usuario_id INTEGER REFERENCES usuarios(id),
  descricao TEXT NOT NULL
);