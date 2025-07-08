//Pegar as divs do html
const AssistidoRecente = document.querySelector("#AssistidoRecente");
const AssistirMaisTarde = document.querySelector("#AssistirMaisTarde");
const acao = document.querySelector("#acao");
const aventura = document.querySelector("#aventura");
const comedia = document.querySelector("#comedia");
const comediaRomantica= document.querySelector("#comedia-romantica");
const danca= document.querySelector("#danca");
const drama= document.querySelector("#drama");
const faroeste= document.querySelector("#faroeste");
const fantasia= document.querySelector("#fantasia");
const ficcaoCientifica= document.querySelector("#ficcao-cientifica");
const Guerra= document.querySelector("#Guerra");
const policial= document.querySelector("#policial");
const misterio= document.querySelector("#misterio");
const musical= document.querySelector("#musical");
const romance= document.querySelector("#romance");
const terror= document.querySelector("#terror");
const thriller= document.querySelector("#thriller");
const crime = document.querySelector("#crime")

//Botoes e imputs e etc do html
const Surpresa = document.querySelector("#Surpresa");
const logout = document.querySelector("#logout");
const perfilVoltar = document.querySelector("#perfilVoltar");
const imgPerfil = document.querySelector("#imgPerfil");


//todos os usuarios do local storage
const usuariosRegistro = localStorage.getItem('usuarios');
const usuarios = JSON.parse(usuariosRegistro);

//qual perfil logou no local storage
const perfilUsuario = localStorage.getItem('perfilLogado');
const perfilLogado = JSON.parse(perfilUsuario);

// quem que fez login lá no inicio da pagina
const acharUserLogado = localStorage.getItem('userLogado');
const userLogado = JSON.parse(acharUserLogado);

//div da lista de filmes
const divFilmes= document.querySelector("#FilmesDiv")

const armazenamentoArrayTarde = perfilLogado.assistirMaisTarde;//Pega os bglh de assistir mais tarde do perfil
let arrayTarde = [];

if(armazenamentoArrayTarde){// mesma lógica do armazenamento de usuários
    arrayTarde=armazenamentoArrayTarde;
}

imgPerfil.src=`${perfilLogado.imagemPerfil}`;// coloca a imagem do perfil

const Filmes = [
    {
        foto: "https://img.elo7.com.br/product/zoom/26925F8/big-poster-filme-rei-leao-1994-lo04-tamanho-90x60-cm-rei-leao-disney.jpg",
        titulo: "O Rei Leão",
        genero: "Aventura",
        ano: 1994,
        sinopse: "O Rei Leão é a história de Simba, um jovem leão que busca seguir os passos de seu pai, Mufasa, e assumir seu lugar como o novo rei da savana, enquanto enfrenta o tio malvado Scar.",
        video: "https://www.youtube.com/embed/rHiHRhbTv-Q?si=N1JjiTGlosnz6r-J",
        indicacao: "Livre",
    },
    {
        foto: "https://br.web.img3.acsta.net/pictures/19/04/26/17/30/2428965.jpg",
        titulo: "Vingadores: Ultimato",
        genero: "Ação",
        ano: 2019,
        sinopse: "Os Vingadores se reúnem para enfrentar Thanos em uma batalha épica para salvar o universo. Após os eventos de 'Vingadores: Guerra Infinita', eles tentam reverter os danos causados pelo vilão.",
        video: "https://www.youtube.com/embed/TcMBFSGVi1c?si=ByzFZzVaKekj5xVo",
        indicacao: "12 anos",
    },
    {
        foto: "https://upload.wikimedia.org/wikipedia/pt/8/84/AOrigemPoster.jpg",
        titulo: "A Origem",
        genero: "Ficção Científica",
        ano: 2010,
        sinopse: "Dom Cobb, um ladrão especializado em roubar segredos durante o sonho das pessoas, é contratado para implantar uma ideia na mente de uma vítima. Mas essa missão complexa leva a um jogo mental sem limites.",
        video: "https://www.youtube.com/embed/R_VX0e0PX90?si=aYWf3oqEsyruVvJo",
        indicacao: "14 anos",
    },
    {
        foto: "https://upload.wikimedia.org/wikipedia/pt/e/e7/Jurassic_Park_poster.jpg",
        titulo: "Jurassic Park",
        genero: "Aventura",
        ano: 1993,
        sinopse: "Quando um bilionário cria um parque temático com dinossauros geneticamente modificados, as coisas saem de controle e os cientistas devem lutar pela sobrevivência contra as criaturas selvagens.",
        video: "https://www.youtube.com/embed/lc0UehYemQA?si=o9ZP_BGn1JtN5K9m",
        indicacao: "10 anos",
    },
    {
        foto: "https://m.media-amazon.com/images/I/71nJYTNc-sL._UF1000,1000_QL80_.jpg",
        titulo: "O Poderoso Chefão",
        genero: "Crime",
        ano: 1972,
        sinopse: "O chefe da máfia Don Vito Corleone lida com questões familiares e de poder dentro do mundo do crime organizado, enquanto tenta proteger seu império contra ameaças externas.",
        video: "https://www.youtube.com/embed/SaHZHU-44XA?si=XfB-xF3eKqEanFiK",
        indicacao: "16 anos",
    },
    {
        foto: "https://upload.wikimedia.org/wikipedia/pt/c/c0/ForrestGumpPoster.jpg",
        titulo: "Forrest Gump",
        genero: "Drama",
        ano: 1994,
        sinopse: "Forrest Gump, um homem com um QI abaixo da média, narra sua vida extraordinária, que inclui momentos de sucesso no esporte, no exército e até mesmo no mundo dos negócios, sempre com o amor e a perseverança guiando seu caminho.",
        video: "https://www.youtube.com/embed/bLvqoHBptjg?si=8CVbOtMeBayllB5V",
        indicacao: "10 anos",
    },
    {
        foto: "https://br.web.img3.acsta.net/medias/nmedia/18/92/91/32/20224832.jpg",
        titulo: "O Senhor dos Anéis: A Sociedade do Anel",
        genero: "Aventura",
        ano: 2001,
        sinopse: "Frodo Bolseiro, um hobbit simples, recebe a missão de destruir um anel poderoso que pode colocar em risco a existência do mundo, enquanto enfrenta perigos e seres malignos na jornada para o Monte da Perdição.",
        video: "https://www.youtube.com/embed/0i86oM1nHjM?si=efdyRFHOZIdNZoIH",
        indicacao: "12 anos",
    },
    {
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1SKCJXHvem32z9Nau6xtAHs9At5LC971QVw&s",
        titulo: "John Wick 4",
        genero: "Ação",
        ano: 2023,
        sinopse: "John Wick enfrenta novos inimigos poderosos em sua busca por liberdade, enfrentando assassinos ao redor do mundo.",
        video: "https://www.youtube.com/embed/gZtmzT9Wgrw?si=cNSIWfVYKS0JYIZ8",
        indicacao: "18 anos",
    },
    {
        foto: "https://m.media-amazon.com/images/S/pv-target-images/52de664161898a47e4768736e6489d44419a213a4b1eeb34759b812921a26a90.jpg",
        titulo: "Indiana Jones e os Caçadores da Arca Perdida",
        genero: "Aventura",
        ano: 1981,
        sinopse: "O arqueólogo Indiana Jones corre contra nazistas para encontrar a Arca da Aliança, um artefato bíblico com poderes sobrenaturais.",
        video: "https://www.youtube.com/embed/G_wcEapEkpM?si=hN2pKXssfIkh5e4l",
        indicacao: "12 anos",
    },
    {
        foto: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/86/15/20116705.jpg",
        titulo: "O Máskara",
        genero: "Comédia",
        ano: 1994,
        sinopse: "Um homem tímido encontra uma máscara mágica que transforma sua personalidade em um ser extravagante e caótico.",
        video: "https://www.youtube.com/embed/E4YA2mQuVZw?si=OjWLRbss6GfsAQAk",
        indicacao: "12 anos",
    },
    {
        foto: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSGwKvL_jztJg_JZZ_xY1gv9CNGJkFEFi9EB_ZyoQCpkjOdC0jf",
        titulo: "10 Coisas que Eu Odeio em Você",
        genero: "Comédia Romântica",
        ano: 1999,
        sinopse: "Um adolescente tenta conquistar a rebelde Kat para que sua irmã possa namorar, mas acaba se apaixonando de verdade.",
        video: "https://www.youtube.com/embed/tD76OqlJRwQ?si=VkvXq5xTJSoYy7k9",
        indicacao: "12 anos",
    },
    {
        foto: "https://br.web.img2.acsta.net/medias/nmedia/18/87/00/41/20028598.jpg",
        titulo: "Ela Dança, Eu Danço",
        genero: "Dança",
        ano: 2006,
        sinopse: "Um jovem problemático descobre seu talento para a dança ao conhecer uma bailarina determinada em uma escola de artes.",
        video: "https://www.youtube.com/embed/Q29tzi5Aagg?si=PzVdoKHxCb2LoSeM",
        indicacao: "12 anos",
    },
    {
        foto: "https://br.web.img2.acsta.net/medias/nmedia/18/89/89/00/20143859.jpg",
        titulo: "Intocáveis",
        genero: "Drama",
        ano: 2011,
        sinopse: "A amizade improvável entre um tetraplégico rico e seu cuidador vindo da periferia muda a vida de ambos para sempre.",
        video: "https://www.youtube.com/embed/-Fb8h4gChlU?si=ZnXLBnt2r_0hCNDa",
        indicacao: "14 anos",
    },
    {
        foto: "https://br.web.img2.acsta.net/medias/nmedia/18/97/53/07/20534288.jpg",
        titulo: "Três Homens em Conflito",
        genero: "Faroeste",
        ano: 1966,
        sinopse: "Três pistoleiros rivais buscam um tesouro escondido durante a Guerra Civil Americana, enfrentando traições e tiroteios.",
        video: "https://www.youtube.com/embed/D_sJCkTzSAY?si=hIz60BAK1za3KYln",
        indicacao: "14 anos",
    },
    {
        foto: "https://a-static.mlcdn.com.br/1500x1500/poster-cartaz-harry-potter-e-a-pedra-filosofal-a-pop-arte-poster/poparteskins2/15938519339/9d36fb667e7df19848b8df63b9bb1026.jpeg",
        titulo: "Harry Potter e a Pedra Filosofal",
        genero: "Fantasia",
        ano: 2001,
        sinopse: "Harry descobre que é um bruxo e parte para a Escola de Magia de Hogwarts, onde vive aventuras mágicas e enfrenta perigos.",
        video: "https://www.youtube.com/embed/SFzft_2dcV0?si=SYRabrSGD_da4UUJ",
        indicacao: "Livre",
    },
    {
        foto: "https://upload.wikimedia.org/wikipedia/pt/b/bb/BladeRunner-P%C3%B4ster.jpg",
        titulo: "Blade Runner",
        genero: "Ficção Científica",
        ano: 1982,
        sinopse: "Em um futuro distópico, um caçador de androides precisa eliminar replicantes que ameaçam a ordem humana.",
        video: "https://www.youtube.com/embed/eogpIG53Cis?si=OlIOSY2UjdgoMyyh",
        indicacao: "14 anos",
    },
    {
        foto: "https://a-static.mlcdn.com.br/1500x1500/poster-cartaz-o-resgate-do-soldado-ryan-c-pop-arte-poster/poparteskins2/15938515318/7af3b53bf9bae6fefe027ed38903cdaa.jpeg",
        titulo: "O Resgate do Soldado Ryan",
        genero: "Filme de Guerra",
        ano: 1998,
        sinopse: "Durante a Segunda Guerra Mundial, um grupo de soldados recebe a missão de resgatar um paraquedista atrás das linhas inimigas.",
        video: "https://www.youtube.com/embed/WdHJ_nLRjIA?si=FAyuLxPJ2emgsupk",
        indicacao: "16 anos",
    },
    {
        foto: "https://m.media-amazon.com/images/M/MV5BYjcyNGRkODktYmJkNy00MDljLTg3YTItZDMzYzA2NTk5MmZiXkEyXkFqcGc@._V1_.jpg",
        titulo: "Os Infiltrados",
        genero: "Filme Policial",
        ano: 2006,
        sinopse: "Um policial disfarçado se infiltra na máfia de Boston, enquanto um criminoso atua como informante dentro da polícia.",
        video: "https://www.youtube.com/embed/PYJQEb8bPew?si=LFY5IKzmfdayBkVs",
        indicacao: "16 anos",
    },
    {
        foto: "https://upload.wikimedia.org/wikipedia/pt/thumb/d/da/The_Irishman_p%C3%B4ster.png/250px-The_Irishman_p%C3%B4ster.png",
        titulo: "O Irlandês",
        genero: "Crime",
        ano: 2019,
        sinopse: "Um assassino de aluguel reflete sobre sua vida de crimes e sua relação com figuras históricas da máfia americana.",
        video: "https://www.youtube.com/embed/ZxuTltUvvkI?si=vdXgfS14gQvAlVq2",
        indicacao: "16 anos",
    },
    {
        foto: "https://br.web.img2.acsta.net/medias/nmedia/18/90/53/94/20101506.jpg",
        titulo: "O Sexto Sentido",
        genero: "Mistério",
        ano: 1999,
        sinopse: "Um psicólogo infantil tenta ajudar um menino que afirma ver pessoas mortas, revelando segredos chocantes.",
        video: "https://www.youtube.com/embed/3-ZP95NF_Wk?si=WrzvR1EH4k8Yx_Ln",
        indicacao: "14 anos",
    },
    {
        foto: "https://upload.wikimedia.org/wikipedia/pt/c/c0/La_La_Land_%28filme%29.png",
        titulo: "La La Land",
        genero: "Musical",
        ano: 2016,
        sinopse: "Um pianista e uma atriz tentam equilibrar seus sonhos artísticos com o romance florescente entre eles.",
        video: "https://www.youtube.com/embed/zXvgkkNMi-4?si=OPxV6J5EGW44Ge_q",
        indicacao: "12 anos",
    },
    {
        foto: "https://br.web.img3.acsta.net/medias/nmedia/18/91/21/92/20135014.jpg",
        titulo: "Diário de uma Paixão",
        genero: "Romance",
        ano: 2004,
        sinopse: "Uma história de amor que ultrapassa décadas, contada por um idoso que lê para uma mulher em um asilo.",
        video: "https://www.youtube.com/embed/DyfWPxB1pZM?si=HsqCteyAGwBESq8Z",
        indicacao: "12 anos",
    },
    {
        foto: "https://br.web.img2.acsta.net/pictures/210/166/21016629_2013062820083878.jpg",
        titulo: "Invocação do Mal",
        genero: "Terror",
        ano: 2013,
        sinopse: "Investigadores paranormais ajudam uma família aterrorizada por uma presença maligna em sua casa rural.",
        video: "https://www.youtube.com/embed/GQrrXceHn2E?si=xHJ_UU4wB_hqQzXF",
        indicacao: "16 anos",
    },
    {
        foto: "https://br.web.img3.acsta.net/pictures/210/124/21012465_2013061319170245.jpg",
        titulo: "Seven: Os Sete Crimes Capitais",
        genero: "Thriller",
        ano: 1995,
        sinopse: "Dois detetives perseguem um assassino em série cujos crimes são inspirados nos sete pecados capitais.",
        video: "https://www.youtube.com/embed/_ZeWFddoohs?si=TGPzxo5Mg9HWC54F",
        indicacao: "18 anos",
    }
];// Array com os filmes 

function exibirFilmes(){
        Filmes.forEach((filme =>{
            if(filme.genero=='Aventura'){//percorre todos os filmes e coloca eles em cada uma de suas divs que estão separadas por genero
                const card = document.createElement('div')
                card.classList.add('movie-card');
                card.innerHTML=`<img src='${filme.foto}'</img>`
                card.addEventListener('click', () => janelaFilme(filme) )
            aventura.appendChild(card);
        }else if(filme.genero=='Ação'){
            const card = document.createElement('div')
            card.classList.add('movie-card');
            card.innerHTML=`<img src='${filme.foto}'</img>`
            card.addEventListener('click', () => janelaFilme(filme) )
            acao.appendChild(card)
        }else if(filme.genero=='Crime'){
            const card = document.createElement('div')
            card.classList.add('movie-card')
            card.innerHTML=`<img src='${filme.foto}'</img>`  
            card.addEventListener('click', () => janelaFilme(filme) )
            crime.appendChild(card)          
        }else if(filme.genero=='Ficção Científica'){
            const card = document.createElement('div')
            card.classList.add('movie-card')
            card.innerHTML=`<img src='${filme.foto}'</img>`
            card.addEventListener('click', () => janelaFilme(filme) )
            ficcaoCientifica.appendChild(card)            
        }else if(filme.genero=='Drama'){
            const card = document.createElement('div')
            card.classList.add('movie-card')
            card.innerHTML=`<img src='${filme.foto}'</img>`
            card.addEventListener('click', () => janelaFilme(filme) )
            drama.appendChild(card)            
        }else if(filme.genero=='Comédia'){
            const card = document.createElement('div')
            card.classList.add('movie-card');
            card.innerHTML=`<img src='${filme.foto}'</img>`
            card.addEventListener('click', () => janelaFilme(filme) )
            comedia.appendChild(card)
        }else if(filme.genero=='Comédia Romântica'){
            const card = document.createElement('div')
            card.classList.add('movie-card');
            card.innerHTML=`<img src='${filme.foto}'</img>`
            card.addEventListener('click', () => janelaFilme(filme) )
            comediaRomantica.appendChild(card)
        }else if(filme.genero=='Dança'){
            const card = document.createElement('div')
            card.classList.add('movie-card');
            card.innerHTML=`<img src='${filme.foto}'</img>`
            card.addEventListener('click', () => janelaFilme(filme) )
            danca.appendChild(card)
        }else if(filme.genero=='Faroeste'){
            const card = document.createElement('div')
            card.classList.add('movie-card');
            card.innerHTML=`<img src='${filme.foto}'</img>`
            card.addEventListener('click', () => janelaFilme(filme) )
            faroeste.appendChild(card)
        }else if(filme.genero=='Fantasia'){
            const card = document.createElement('div')
            card.classList.add('movie-card');
            card.innerHTML=`<img src='${filme.foto}'</img>`
            card.addEventListener('click', () => janelaFilme(filme) )
            fantasia.appendChild(card)
        }else if(filme.genero=='Filme de Guerra'){
            const card = document.createElement('div')
            card.classList.add('movie-card');
            card.innerHTML=`<img src='${filme.foto}'</img>`
            card.addEventListener('click', () => janelaFilme(filme) )
            Guerra.appendChild(card)
        }else if(filme.genero=='Filme Policial'){
            const card = document.createElement('div')
            card.classList.add('movie-card');
            card.innerHTML=`<img src='${filme.foto}'</img>`
            card.addEventListener('click', () => janelaFilme(filme) )
            policial.appendChild(card)
        }else if(filme.genero=='Mistério'){
            const card = document.createElement('div')
            card.classList.add('movie-card');
            card.innerHTML=`<img src='${filme.foto}'</img>`
            card.addEventListener('click', () => janelaFilme(filme) )
            misterio.appendChild(card)
        }else if(filme.genero=='Musical'){
            const card = document.createElement('div')
            card.classList.add('movie-card');
            card.innerHTML=`<img src='${filme.foto}'</img>`
            card.addEventListener('click', () => janelaFilme(filme) )
            musical.appendChild(card)
        }else if(filme.genero=='Romance'){
            const card = document.createElement('div')
            card.classList.add('movie-card');
            card.innerHTML=`<img src='${filme.foto}'</img>`
            card.addEventListener('click', () => janelaFilme(filme) )
            romance.appendChild(card)
        }else if(filme.genero=='Terror'){
            const card = document.createElement('div')
            card.classList.add('movie-card');
            card.innerHTML=`<img src='${filme.foto}'</img>`
            card.addEventListener('click', () => janelaFilme(filme) )
            terror.appendChild(card)
        }else if(filme.genero=='Thriller'){
            const card = document.createElement('div')
            card.classList.add('movie-card');
            card.innerHTML=`<img src='${filme.foto}'</img>`
            card.addEventListener('click', () => janelaFilme(filme) )
            thriller.appendChild(card)
        }
    }))
}

function janelaFilme(filme){// função que cria a div dos detalhes pra assistir, marcar como mais tarde e etc
    const infoWindow = document.createElement('div');
    infoWindow.classList.add('infoWindow');
    infoWindow.innerHTML = `
        <div class="info-modal">
            <h1>${filme.titulo}</h1>
            <p>Gênero: ${filme.genero}</p>
            <p>Ano: ${filme.ano}</p>
            <p>Classificação: ${filme.indicacao}</p>
            <p>${filme.sinopse}</p>
            <button id='assistirFilme'>Assistir</button>
            <button id='fecharJanela'>Fechar</button>
            <button id='assistirMaisTarde'>Assistir Mais Tarde</button>
        </div>
    `;
    document.body.appendChild(infoWindow);
    const botaoAssistir = document.querySelector('#assistirFilme');
   botaoAssistir.addEventListener('click', () => {
    // Verifica se já está na lista recente
    const jaAssistido = perfilLogado.assistidoRecente.find(f => f.titulo === filme.titulo);
    if (!jaAssistido) {
        perfilLogado.assistidoRecente.unshift(filme);
        // Limita a lista para os 10 mais recentes
        if (perfilLogado.assistidoRecente.length > 10) {
            perfilLogado.assistidoRecente.pop();
        }

        const perfilIndex = userLogado.perfil.findIndex(p => p.nomePerfil === perfilLogado.nomePerfil);
        userLogado.perfil[perfilIndex] = perfilLogado;

        const userIndex = usuarios.findIndex(u => u.email === userLogado.email);
        usuarios[userIndex] = userLogado;

        localStorage.setItem('perfilLogado', JSON.stringify(perfilLogado));
        localStorage.setItem('userLogado', JSON.stringify(userLogado));
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        // arrumar em todos os lugares no local storage a alteração
    }
    const FilmeAssistir=filme // acha qual filme ele quer assistir
    localStorage.setItem('FilmeAssistir',JSON.stringify(FilmeAssistir)) // colocar ele no local storage pra passar pro proximo html
    window.location.href = "filme.html";// passa pro html pra mostrar o filme
});
    const botaoFechar = document.querySelector('#fecharJanela');
    botaoFechar.addEventListener('click', () =>{
        infoWindow.remove();// fecha o modal
    })                 
const botaoMaisTarde = document.querySelector('#assistirMaisTarde');
botaoMaisTarde.addEventListener('click', () => {
    const index = arrayTarde.findIndex(e => e.titulo === filme.titulo);// procura pra ver se ele ta marcado como assistir mais tarde

    if (index === -1) {
        // Adiciona filme ao array
        arrayTarde.push(filme);
    } else {
        // Remove filme do array
        arrayTarde.splice(index, 1);
    }

    // Atualiza no objeto perfilLogado
    perfilLogado.assistirMaisTarde = arrayTarde;

    // Atualiza localStorage do perfil
    localStorage.setItem('perfilLogado', JSON.stringify(perfilLogado));

    const indexUsuario = usuarios.findIndex(u => u.email === userLogado.email);
    if (indexUsuario !== -1) {
        usuarios[indexUsuario].perfil.forEach(perfil => {
            if (perfil.nome === perfilLogado.nome) {
                perfil.assistirMaisTarde = arrayTarde;
            }
        });
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }// atualiza no local storage

    atualizarMaisTarde(); // atualiza os cards na tela
});
}
function atualizarMaisTarde() {
    if(perfilLogado.assistirMaisTarde && perfilLogado.assistirMaisTarde.length>0){// confere se tem um filme pra assistir mais tarde
        AssistirMaisTarde.innerHTML = "";
        arrayTarde.forEach(filme => {
            const card = document.createElement('div');
            card.classList.add('movie-card');
            card.innerHTML = `<img src="${filme.foto}" />`;
            card.addEventListener('click', () => janelaFilme(filme));
            AssistirMaisTarde.appendChild(card);
        });
    }//se tiver coloca na lista
  else{
    AssistirMaisTarde.innerHTML="<p>Nenhum filme marcado para assistir mais tarde</p>"
  }//se não passa essa mensagemzinha
}
function exibirAssistidosRecentemente() {// mesma lógica da de cima só q pra o de assitir recentemente
    AssistidoRecente.innerHTML = ""; // limpa para não duplicar

    if (perfilLogado.assistidoRecente && perfilLogado.assistidoRecente.length > 0) {
        perfilLogado.assistidoRecente.forEach(filme => {
            const card = document.createElement('div');
            card.classList.add('movie-card');
            card.innerHTML = `<img src="${filme.foto}" />`;
            card.addEventListener('click', () => janelaFilme(filme));
            AssistidoRecente.appendChild(card);
        });
    } else {
        AssistidoRecente.innerHTML = "<p>Nenhum filme assistido recentemente ainda.</p>";
    }
}

Surpresa.addEventListener("click", () => {
    const filmeAleatorio = Math.round(Math.random()*Filmes.length)// pega um filme aleatório do array

     const jaAssistido = perfilLogado.assistidoRecente.find(f => f.titulo === Filmes[filmeAleatorio].titulo);
    if (!jaAssistido) {
        perfilLogado.assistidoRecente.unshift(Filmes[filmeAleatorio]);
        // Limita a lista para os 10 mais recentes
        if (perfilLogado.assistidoRecente.length > 10) {
            perfilLogado.assistidoRecente.pop();
        }

        const perfilIndex = userLogado.perfil.findIndex(p => p.nomePerfil === perfilLogado.nomePerfil);
        userLogado.perfil[perfilIndex] = perfilLogado;

        const userIndex = usuarios.findIndex(u => u.email === userLogado.email);
        usuarios[userIndex] = userLogado;

        localStorage.setItem('perfilLogado', JSON.stringify(perfilLogado));
        localStorage.setItem('userLogado', JSON.stringify(userLogado));
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        // arrumar em todos os lugares no local storage a alteração
    }

    const FilmeAssistir=Filmes[filmeAleatorio]
    localStorage.setItem('FilmeAssistir',JSON.stringify (FilmeAssistir))// coloca no local storage
    window.location.href='filme.html'// manda pra pagina de filme

    
})
perfilVoltar.addEventListener("click", () =>{
    localStorage.removeItem('perfilLogado');
    window.location.href='perfil.html'// volta pra seleção de perfil
})
logout.addEventListener("click", () => {
    localStorage.removeItem('perfilLogado');// tira o perfil logado do local storage
    localStorage.removeItem('userLogado');// tira quem logou do local storage
    window.location.href="login.html";// sair do código e voltar diretamente pro login
})

//atualiza tudo no inicio do código
exibirFilmes();
exibirAssistidosRecentemente();
atualizarMaisTarde();