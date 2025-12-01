CREATE DATABASE IF NOT EXISTS cineon_db;

USE cineon_db;

CREATE TABLE IF NOT EXISTS planos (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    max_perfis INT NOT NULL
);


CREATE TABLE IF NOT EXISTS usuarios (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(250) NOT NULL,
    email VARCHAR(250) NOT NULL,
    password VARCHAR(250) NOT NULL,
    plano_id INT NOT NULL,
    FOREIGN KEY (plano_id) REFERENCES planos(id) 
);

CREATE TABLE IF NOT EXISTS perfis (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(250) NOT NULL,
    imagem VARCHAR(250) NOT NULL,
    usuario_id INT NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

CREATE TABLE IF NOT EXISTS generos (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS filmes (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    capa VARCHAR(255) NOT NULL,
    titulo VARCHAR(250) NOT NULL,
    ano INT NOT NULL,
    sinopse VARCHAR(500) NOT NULL,
    video VARCHAR(255) NOT NULL,
    indicacao VARCHAR(10) NOT NULL,
    genero_id INT NOT NULL,
    FOREIGN KEY (genero_id) REFERENCES generos(id) 
); 

INSERT INTO planos(nome, max_perfis)  VALUES ()