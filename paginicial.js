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
const crime = document.querySelector('#crime');
const misterio= document.querySelector("#misterio");
const musical= document.querySelector("#musical");
const romance= document.querySelector("#romance");
const terror= document.querySelector("#terror");
const thriller= document.querySelector("#thriller");

const Surpresa = document.querySelector("#Surpresa");
const PesquisaFilme = document.querySelector("#PesquisaFilme");
const logout = document.querySelector("#logout");
const perfilVoltar = document.querySelector("#perfilVoltar");
const imgPerfil = document.querySelector("#imgPerfil");

const usuariosRegistro = localStorage.getItem('Users');
const usuarios = JSON.parse(usuariosRegistro);

const perfilUsuario = localStorage.getItem('perfilLogado');
const perfilLogado = JSON.parse(perfilUsuario);

const acharUserLogado = localStorage.getItem('userLogado');
const userLogado = JSON.parse(acharUserLogado);

const divFilmes= document.querySelector("#FilmesDiv")

const armazenamentoArrayTarde = perfilLogado.AssistirMaisTarde
let arrayTarde = [];

if(armazenamentoArrayTarde){
    arrayTarde=armazenamentoArrayTarde
}

//imgPerfil.src=`${perfilLogado.imagemPerfil}`;

const Filmes = [
    {
        foto: "https://img.elo7.com.br/product/zoom/26925F8/big-poster-filme-rei-leao-1994-lo04-tamanho-90x60-cm-rei-leao-disney.jpg",
        titulo: "O Rei Leão",
        genero: "Aventura",
        ano: 1994,
        sinopse: "O Rei Leão é a história de Simba, um jovem leão que busca seguir os passos de seu pai, Mufasa, e assumir seu lugar como o novo rei da savana, enquanto enfrenta o tio malvado Scar.",
        video: "https://www.youtube.com/watch?v=4sj1pP1W2hI",
        indicacao: "Livre",
    },
    {
        foto: "https://br.web.img3.acsta.net/pictures/19/04/26/17/30/2428965.jpg",
        titulo: "Vingadores: Ultimato",
        genero: "Ação",
        ano: 2019,
        sinopse: "Os Vingadores se reúnem para enfrentar Thanos em uma batalha épica para salvar o universo. Após os eventos de 'Vingadores: Guerra Infinita', eles tentam reverter os danos causados pelo vilão.",
        video: "https://www.youtube.com/watch?v=6ZfuNTqbHE8",
        indicacao: "12 anos",
    },
    {
        foto: "https://upload.wikimedia.org/wikipedia/pt/8/84/AOrigemPoster.jpg",
        titulo: "A Origem",
        genero: "Ficção Científica",
        ano: 2010,
        sinopse: "Dom Cobb, um ladrão especializado em roubar segredos durante o sonho das pessoas, é contratado para implantar uma ideia na mente de uma vítima. Mas essa missão complexa leva a um jogo mental sem limites.",
        video: "https://www.youtube.com/watch?v=8hP9D6kZseM",
        indicacao: "14 anos",
    },
    {
        foto: "https://upload.wikimedia.org/wikipedia/pt/e/e7/Jurassic_Park_poster.jpg",
        titulo: "Jurassic Park",
        genero: "Aventura",
        ano: 1993,
        sinopse: "Quando um bilionário cria um parque temático com dinossauros geneticamente modificados, as coisas saem de controle e os cientistas devem lutar pela sobrevivência contra as criaturas selvagens.",
        video: "https://www.youtube.com/watch?v=Cr8cNObG4Vo",
        indicacao: "10 anos",
    },
    {
        foto: "https://m.media-amazon.com/images/I/71nJYTNc-sL._UF1000,1000_QL80_.jpg",
        titulo: "O Poderoso Chefão",
        genero: "Crime",
        ano: 1972,
        sinopse: "O chefe da máfia Don Vito Corleone lida com questões familiares e de poder dentro do mundo do crime organizado, enquanto tenta proteger seu império contra ameaças externas.",
        video: "https://www.youtube.com/watch?v=sY1S34973zA",
        indicacao: "16 anos",
    },
    {
        foto: "https://upload.wikimedia.org/wikipedia/pt/c/c0/ForrestGumpPoster.jpg",
        titulo: "Forrest Gump",
        genero: "Drama",
        ano: 1994,
        sinopse: "Forrest Gump, um homem com um QI abaixo da média, narra sua vida extraordinária, que inclui momentos de sucesso no esporte, no exército e até mesmo no mundo dos negócios, sempre com o amor e a perseverança guiando seu caminho.",
        video: "https://www.youtube.com/watch?v=bLvqoHBptjg",
        indicacao: "10 anos",
    },
    {
        foto: "https://br.web.img3.acsta.net/medias/nmedia/18/92/91/32/20224832.jpg",
        titulo: "O Senhor dos Anéis: A Sociedade do Anel",
        genero: "Aventura",
        ano: 2001,
        sinopse: "Frodo Bolseiro, um hobbit simples, recebe a missão de destruir um anel poderoso que pode colocar em risco a existência do mundo, enquanto enfrenta perigos e seres malignos na jornada para o Monte da Perdição.",
        video: "https://www.youtube.com/watch?v=V75dMMIW2B4",
        indicacao: "12 anos",
    }
];
const FilmesArray = JSON.stringify(Filmes);
localStorage.setItem( 'FilmesArray' , FilmesArray );

function exibirFilmes(){
    Filmes.forEach((filme =>{
        if(filme.genero=='Aventura'){
            const card = document.createElement('div')
            card.classList.add('movie-card');
            card.innerHTML=`<img src='${filme.foto}'</img>`
            card.addEventListener('click', () => janelaFilme(filme) )
            //tá, essa linha 111 é uma putaria
            //resumidamente, eu descobri q só funcionaria se eu fizesse uma arrow function que chama a função janelaFilme
            //pq por sem a arrow o código já roda o eventlistener imediatamente, e n espera eu clicar nela
            //é bizarro, n entendi direito mas é isso aí
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
        }
    
}))

function janelaFilme(filme){
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
    botaoAssistir.addEventListener('click', () =>{
        window.location.href="filme.html";
    })
    const botaoFechar = document.querySelector('#fecharJanela');
    botaoFechar.addEventListener('click', () =>{
        infoWindow.remove();
    })                 
    const botaoMaisTarde = document.querySelector('#assistirMaisTarde')
    botaoMaisTarde.addEventListener('click', () =>{
        botaoMaisTarde.addEventListener('click', () =>{
        const index = arrayTarde.findIndex(e => e.titulo === filme.titulo);        
        const card = document.createElement('div')            
        card.classList.add('movie-card')
        card.innerHTML=`<img src='${filme.foto}'</img>`  
        card.addEventListener('click', () => janelaFilme(filme) )
        AssistirMaisTarde.appendChild(card)

        if(index === -1){


        arrayTarde.push(filme)
        }else{
        const card = document.createElement('div')        
        arrayTarde.splice(index, 1);
        AssistirMaisTarde.appendChild(card)
        atualizarMaisTarde();
        }
    })
    function atualizarMaisTarde(){        
       
        AssistirMaisTarde.innerHTML = ""; 
        arrayTarde.forEach((filme => {
            const card = document.createElement('div')
            card.classList.add('movie-card')
            card.innerHTML = `<img src="${filme.foto}" />`
            card.addEventListener('click', () => janelaFilme(filme));
            AssistirMaisTarde.appendChild(card)
        }))
    }       
}   
    )
}
}

Surpresa.addEventListener("click", () => {
    const filmeAleatorio = Math.round(Math.random()*Filmes.length)

    const FilmeAssistir=Filmes[filmeAleatorio]
    localStorage.setItem('FilmeAssistir', FilmeAssistir)

})

//n consegui impedir esta porra de criar varios modais, acho q da pra fazer isso com css.
exibirFilmes();