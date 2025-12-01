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
CREATE TABLE IF NOT EXISTS assistido_recente (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    perfil_id INT NOT NULL,
    filme_id INT NOT NULL,
    FOREIGN KEY (perfil_id) REFERENCES perfis(id),
    FOREIGN KEY (filme_id) REFERENCES filmes(id)
);
CREATE TABLE IF NOT EXISTS assistir_mais_tarde (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    perfil_id INT NOT NULL,
    filme_id INT NOT NULL,
    FOREIGN KEY (perfil_id) REFERENCES perfis(id),
    FOREIGN KEY (filme_id) REFERENCES filmes(id)
);

-- Planos de exemplo
INSERT INTO planos(nome, max_perfis) VALUES ('Básico', 1), ('Padrão', 4), ('Premium', 6);

INSERT INTO generos(nome)
SELECT 'Aventura' WHERE NOT EXISTS (SELECT 1 FROM generos WHERE nome = 'Aventura');
INSERT INTO generos(nome)
SELECT 'Ação' WHERE NOT EXISTS (SELECT 1 FROM generos WHERE nome = 'Ação');
INSERT INTO generos(nome)
SELECT 'Ficção Científica' WHERE NOT EXISTS (SELECT 1 FROM generos WHERE nome = 'Ficção Científica');
INSERT INTO generos(nome)
SELECT 'Crime' WHERE NOT EXISTS (SELECT 1 FROM generos WHERE nome = 'Crime');
INSERT INTO generos(nome)
SELECT 'Drama' WHERE NOT EXISTS (SELECT 1 FROM generos WHERE nome = 'Drama');
INSERT INTO generos(nome)
SELECT 'Comédia' WHERE NOT EXISTS (SELECT 1 FROM generos WHERE nome = 'Comédia');
INSERT INTO generos(nome)
SELECT 'Comédia Romântica' WHERE NOT EXISTS (SELECT 1 FROM generos WHERE nome = 'Comédia Romântica');
INSERT INTO generos(nome)
SELECT 'Dança' WHERE NOT EXISTS (SELECT 1 FROM generos WHERE nome = 'Dança');
INSERT INTO generos(nome)
SELECT 'Faroeste' WHERE NOT EXISTS (SELECT 1 FROM generos WHERE nome = 'Faroeste');
INSERT INTO generos(nome)
SELECT 'Fantasia' WHERE NOT EXISTS (SELECT 1 FROM generos WHERE nome = 'Fantasia');
INSERT INTO generos(nome)
SELECT 'Filme de Guerra' WHERE NOT EXISTS (SELECT 1 FROM generos WHERE nome = 'Filme de Guerra');
INSERT INTO generos(nome)
SELECT 'Filme Policial' WHERE NOT EXISTS (SELECT 1 FROM generos WHERE nome = 'Filme Policial');
INSERT INTO generos(nome)
SELECT 'Mistério' WHERE NOT EXISTS (SELECT 1 FROM generos WHERE nome = 'Mistério');
INSERT INTO generos(nome)
SELECT 'Musical' WHERE NOT EXISTS (SELECT 1 FROM generos WHERE nome = 'Musical');
INSERT INTO generos(nome)
SELECT 'Romance' WHERE NOT EXISTS (SELECT 1 FROM generos WHERE nome = 'Romance');
INSERT INTO generos(nome)
SELECT 'Terror' WHERE NOT EXISTS (SELECT 1 FROM generos WHERE nome = 'Terror');
INSERT INTO generos(nome)
SELECT 'Thriller' WHERE NOT EXISTS (SELECT 1 FROM generos WHERE nome = 'Thriller');


-- Inserir filmes (cada filme referencia o id do gênero pelo nome)
INSERT INTO filmes(capa, titulo, ano, sinopse, video, indicacao, genero_id) VALUES
('https://img.elo7.com.br/product/zoom/26925F8/big-poster-filme-rei-leao-1994-lo04-tamanho-90x60-cm-rei-leao-disney.jpg',
 'O Rei Leão', 1994,
 'O Rei Leão é a história de Simba, um jovem leão que busca seguir os passos de seu pai, Mufasa, e assumir seu lugar como o novo rei da savana, enquanto enfrenta o tio malvado Scar.',
 'https://www.youtube.com/embed/rHiHRhbTv-Q?si=N1JjiTGlosnz6r-J',
 'Livre',
 (SELECT id FROM generos WHERE nome = 'Aventura' LIMIT 1)
);

INSERT INTO filmes(capa, titulo, ano, sinopse, video, indicacao, genero_id) VALUES
('https://br.web.img3.acsta.net/pictures/19/04/26/17/30/2428965.jpg',
 'Vingadores: Ultimato', 2019,
 'Os Vingadores se reúnem para enfrentar Thanos em uma batalha épica para salvar o universo. Após os eventos de ''Vingadores: Guerra Infinita'', eles tentam reverter os danos causados pelo vilão.',
 'https://www.youtube.com/embed/TcMBFSGVi1c?si=ByzFZzVaKekj5xVo',
 '12 anos',
 (SELECT id FROM generos WHERE nome = 'Ação' LIMIT 1)
);

INSERT INTO filmes(capa, titulo, ano, sinopse, video, indicacao, genero_id) VALUES
('https://upload.wikimedia.org/wikipedia/pt/8/84/AOrigemPoster.jpg',
 'A Origem', 2010,
 'Dom Cobb, um ladrão especializado em roubar segredos durante o sonho das pessoas, é contratado para implantar uma ideia na mente de uma vítima. Mas essa missão complexa leva a um jogo mental sem limites.',
 'https://www.youtube.com/embed/R_VX0e0PX90?si=aYWf3oqEsyruVvJo',
 '14 anos',
 (SELECT id FROM generos WHERE nome = 'Ficção Científica' LIMIT 1)
);

INSERT INTO filmes(capa, titulo, ano, sinopse, video, indicacao, genero_id) VALUES
('https://upload.wikimedia.org/wikipedia/pt/e/e7/Jurassic_Park_poster.jpg',
 'Jurassic Park', 1993,
 'Quando um bilionário cria um parque temático com dinossauros geneticamente modificados, as coisas saem de controle e os cientistas devem lutar pela sobrevivência contra as criaturas selvagens.',
 'https://www.youtube.com/embed/lc0UehYemQA?si=o9ZP_BGn1JtN5K9m',
 '10 anos',
 (SELECT id FROM generos WHERE nome = 'Aventura' LIMIT 1)
);

INSERT INTO filmes(capa, titulo, ano, sinopse, video, indicacao, genero_id) VALUES
('https://m.media-amazon.com/images/I/71nJYTNc-sL._UF1000,1000_QL80_.jpg',
 'O Poderoso Chefão', 1972,
 'O chefe da máfia Don Vito Corleone lida com questões familiares e de poder dentro do mundo do crime organizado, enquanto tenta proteger seu império contra ameaças externas.',
 'https://www.youtube.com/embed/SaHZHU-44XA?si=XfB-xF3eKqEanFiK',
 '16 anos',
 (SELECT id FROM generos WHERE nome = 'Crime' LIMIT 1)
);

INSERT INTO filmes(capa, titulo, ano, sinopse, video, indicacao, genero_id) VALUES
('https://upload.wikimedia.org/wikipedia/pt/c/c0/ForrestGumpPoster.jpg',
 'Forrest Gump', 1994,
 'Forrest Gump, um homem com um QI abaixo da média, narra sua vida extraordinária, que inclui momentos de sucesso no esporte, no exército e até mesmo no mundo dos negócios, sempre com o amor e a perseverança guiando seu caminho.',
 'https://www.youtube.com/embed/bLvqoHBptjg?si=8CVbOtMeBayllB5V',
 '10 anos',
 (SELECT id FROM generos WHERE nome = 'Drama' LIMIT 1)
);

INSERT INTO filmes(capa, titulo, ano, sinopse, video, indicacao, genero_id) VALUES
('https://br.web.img3.acsta.net/medias/nmedia/18/92/91/32/20224832.jpg',
 'O Senhor dos Anéis: A Sociedade do Anel', 2001,
 'Frodo Bolseiro, um hobbit simples, recebe a missão de destruir um anel poderoso que pode colocar em risco a existência do mundo, enquanto enfrenta perigos e seres malignos na jornada para o Monte da Perdição.',
 'https://www.youtube.com/embed/0i86oM1nHjM?si=efdyRFHOZIdNZoIH',
 '12 anos',
 (SELECT id FROM generos WHERE nome = 'Aventura' LIMIT 1)
);

INSERT INTO filmes(capa, titulo, ano, sinopse, video, indicacao, genero_id) VALUES
('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1SKCJXHvem32z9Nau6xtAHs9At5LC971QVw&s',
 'John Wick 4', 2023,
 'John Wick enfrenta novos inimigos poderosos em sua busca por liberdade, enfrentando assassinos ao redor do mundo.',
 'https://www.youtube.com/embed/gZtmzT9Wgrw?si=cNSIWfVYKS0JYIZ8',
 '18 anos',
 (SELECT id FROM generos WHERE nome = 'Ação' LIMIT 1)
);

INSERT INTO filmes(capa, titulo, ano, sinopse, video, indicacao, genero_id) VALUES
('https://m.media-amazon.com/images/S/pv-target-images/52de664161898a47e4768736e6489d44419a213a4b1eeb34759b812921a26a90.jpg',
 'Indiana Jones e os Caçadores da Arca Perdida', 1981,
 'O arqueólogo Indiana Jones corre contra nazistas para encontrar a Arca da Aliança, um artefato bíblico com poderes sobrenaturais.',
 'https://www.youtube.com/embed/G_wcEapEkpM?si=hN2pKXssfIkh5e4l',
 '12 anos',
 (SELECT id FROM generos WHERE nome = 'Aventura' LIMIT 1)
);

INSERT INTO filmes(capa, titulo, ano, sinopse, video, indicacao, genero_id) VALUES
('https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/86/15/20116705.jpg',
 'O Máskara', 1994,
 'Um homem tímido encontra uma máscara mágica que transforma sua personalidade em um ser extravagante e caótico.',
 'https://www.youtube.com/embed/E4YA2mQuVZw?si=OjWLRbss6GfsAQAk',
 '12 anos',
 (SELECT id FROM generos WHERE nome = 'Comédia' LIMIT 1)
);

INSERT INTO filmes(capa, titulo, ano, sinopse, video, indicacao, genero_id) VALUES
('https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSGwKvL_jztJg_JZZ_xY1gv9CNGJkFEFi9EB_ZyoQCpkjOdC0jf',
 '10 Coisas que Eu Odeio em Você', 1999,
 'Um adolescente tenta conquistar a rebelde Kat para que sua irmã possa namorar, mas acaba se apaixonando de verdade.',
 'https://www.youtube.com/embed/tD76OqlJRwQ?si=VkvXq5xTJSoYy7k9',
 '12 anos',
 (SELECT id FROM generos WHERE nome = 'Comédia Romântica' LIMIT 1)
);

INSERT INTO filmes(capa, titulo, ano, sinopse, video, indicacao, genero_id) VALUES
('https://br.web.img2.acsta.net/medias/nmedia/18/87/00/41/20028598.jpg',
 'Ela Dança, Eu Danço', 2006,
 'Um jovem problemático descobre seu talento para a dança ao conhecer uma bailarina determinada em uma escola de artes.',
 'https://www.youtube.com/embed/Q29tzi5Aagg?si=PzVdoKHxCb2LoSeM',
 '12 anos',
 (SELECT id FROM generos WHERE nome = 'Dança' LIMIT 1)
);

INSERT INTO filmes(capa, titulo, ano, sinopse, video, indicacao, genero_id) VALUES
('https://br.web.img2.acsta.net/medias/nmedia/18/89/89/00/20143859.jpg',
 'Intocáveis', 2011,
 'A amizade improvável entre um tetraplégico rico e seu cuidador vindo da periferia muda a vida de ambos para sempre.',
 'https://www.youtube.com/embed/-Fb8h4gChlU?si=ZnXLBnt2r_0hCNDa',
 '14 anos',
 (SELECT id FROM generos WHERE nome = 'Drama' LIMIT 1)
);

INSERT INTO filmes(capa, titulo, ano, sinopse, video, indicacao, genero_id) VALUES
('https://br.web.img2.acsta.net/medias/nmedia/18/97/53/07/20534288.jpg',
 'Três Homens em Conflito', 1966,
 'Três pistoleiros rivais buscam um tesouro escondido durante a Guerra Civil Americana, enfrentando traições e tiroteios.',
 'https://www.youtube.com/embed/D_sJCkTzSAY?si=hIz60BAK1za3KYln',
 '14 anos',
 (SELECT id FROM generos WHERE nome = 'Faroeste' LIMIT 1)
);

INSERT INTO filmes(capa, titulo, ano, sinopse, video, indicacao, genero_id) VALUES
('https://a-static.mlcdn.com.br/1500x1500/poster-cartaz-harry-potter-e-a-pedra-filosofal-a-pop-arte-poster/poparteskins2/15938519339/9d36fb667e7df19848b8df63b9bb1026.jpeg',
 'Harry Potter e a Pedra Filosofal', 2001,
 'Harry descobre que é um bruxo e parte para a Escola de Magia de Hogwarts, onde vive aventuras mágicas e enfrenta perigos.',
 'https://www.youtube.com/embed/SFzft_2dcV0?si=SYRabrSGD_da4UUJ',
 'Livre',
 (SELECT id FROM generos WHERE nome = 'Fantasia' LIMIT 1)
);

INSERT INTO filmes(capa, titulo, ano, sinopse, video, indicacao, genero_id) VALUES
('https://upload.wikimedia.org/wikipedia/pt/b/bb/BladeRunner-P%C3%B4ster.jpg',
 'Blade Runner', 1982,
 'Em um futuro distópico, um caçador de androides precisa eliminar replicantes que ameaçam a ordem humana.',
 'https://www.youtube.com/embed/eogpIG53Cis?si=OlIOSY2UjdgoMyyh',
 '14 anos',
 (SELECT id FROM generos WHERE nome = 'Ficção Científica' LIMIT 1)
);

INSERT INTO filmes(capa, titulo, ano, sinopse, video, indicacao, genero_id) VALUES
('https://a-static.mlcdn.com.br/1500x1500/poster-cartaz-o-resgate-do-soldado-ryan-c-pop-arte-poster/poparteskins2/15938515318/7af3b53bf9bae6fefe027ed38903cdaa.jpeg',
 'O Resgate do Soldado Ryan', 1998,
 'Durante a Segunda Guerra Mundial, um grupo de soldados recebe a missão de resgatar um paraquedista atrás das linhas inimigas.',
 'https://www.youtube.com/embed/WdHJ_nLRjIA?si=FAyuLxPJ2emgsupk',
 '16 anos',
 (SELECT id FROM generos WHERE nome = 'Filme de Guerra' LIMIT 1)
);

INSERT INTO filmes(capa, titulo, ano, sinopse, video, indicacao, genero_id) VALUES
('https://m.media-amazon.com/images/M/MV5BYjcyNGRkODktYmJkNy00MDljLTg3YTItZDMzYzA2NTk5MmZiXkEyXkFqcGc@._V1_.jpg',
 'Os Infiltrados', 2006,
 'Um policial disfarçado se infiltra na máfia de Boston, enquanto um criminoso atua como informante dentro da polícia.',
 'https://www.youtube.com/embed/PYJQEb8bPew?si=LFY5IKzmfdayBkVs',
 '16 anos',
 (SELECT id FROM generos WHERE nome = 'Filme Policial' LIMIT 1)
);

INSERT INTO filmes(capa, titulo, ano, sinopse, video, indicacao, genero_id) VALUES
('https://upload.wikimedia.org/wikipedia/pt/thumb/d/da/The_Irishman_p%C3%B4ster.png/250px-The_Irishman_p%C3%B4ster.png',
 'O Irlandês', 2019,
 'Um assassino de aluguel reflete sobre sua vida de crimes e sua relação com figuras históricas da máfia americana.',
 'https://www.youtube.com/embed/ZxuTltUvvkI?si=vdXgfS14gQvAlVq2',
 '16 anos',
 (SELECT id FROM generos WHERE nome = 'Crime' LIMIT 1)
);

INSERT INTO filmes(capa, titulo, ano, sinopse, video, indicacao, genero_id) VALUES
('https://br.web.img2.acsta.net/medias/nmedia/18/90/53/94/20101506.jpg',
 'O Sexto Sentido', 1999,
 'Um psicólogo infantil tenta ajudar um menino que afirma ver pessoas mortas, revelando segredos chocantes.',
 'https://www.youtube.com/embed/3-ZP95NF_Wk?si=WrzvR1EH4k8Yx_Ln',
 '14 anos',
 (SELECT id FROM generos WHERE nome = 'Mistério' LIMIT 1)
);

INSERT INTO filmes(capa, titulo, ano, sinopse, video, indicacao, genero_id) VALUES
('https://upload.wikimedia.org/wikipedia/pt/c/c0/La_La_Land_%28filme%29.png',
 'La La Land', 2016,
 'Um pianista e uma atriz tentam equilibrar seus sonhos artísticos com o romance florescente entre eles.',
 'https://www.youtube.com/embed/zXvgkkNMi-4?si=OPxV6J5EGW44Ge_q',
 '12 anos',
 (SELECT id FROM generos WHERE nome = 'Musical' LIMIT 1)
);

INSERT INTO filmes(capa, titulo, ano, sinopse, video, indicacao, genero_id) VALUES
('https://br.web.img3.acsta.net/medias/nmedia/18/91/21/92/20135014.jpg',
 'Diário de uma Paixão', 2004,
 'Uma história de amor que ultrapassa décadas, contada por um idoso que lê para uma mulher em um asilo.',
 'https://www.youtube.com/embed/DyfWPxB1pZM?si=HsqCteyAGwBESq8Z',
 '12 anos',
 (SELECT id FROM generos WHERE nome = 'Romance' LIMIT 1)
);

INSERT INTO filmes(capa, titulo, ano, sinopse, video, indicacao, genero_id) VALUES
('https://br.web.img2.acsta.net/pictures/210/166/21016629_2013062820083878.jpg',
 'Invocação do Mal', 2013,
 'Investigadores paranormais ajudam uma família aterrorizada por uma presença maligna em sua casa rural.',
 'https://www.youtube.com/embed/GQrrXceHn2E?si=xHJ_UU4wB_hqQzXF',
 '16 anos',
 (SELECT id FROM generos WHERE nome = 'Terror' LIMIT 1)
);

INSERT INTO filmes(capa, titulo, ano, sinopse, video, indicacao, genero_id) VALUES
('https://br.web.img3.acsta.net/pictures/210/124/21012465_2013061319170245.jpg',
 'Seven: Os Sete Crimes Capitais', 1995,
 'Dois detetives perseguem um assassino em série cujos crimes são inspirados nos sete pecados capitais.',
 'https://www.youtube.com/embed/_ZeWFddoohs?si=TGPzxo5Mg9HWC54F',
 '18 anos',
 (SELECT id FROM generos WHERE nome = 'Thriller' LIMIT 1)
);