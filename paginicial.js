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

//Botoes e imputs e etc do html
const Surpresa = document.querySelector("#Surpresa");
const PesquisaFilme = document.querySelector("#PesquisaFilme");
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

    const FilmeAssistir=Filmes[filmeAleatorio]
    localStorage.setItem('FilmeAssistir',JSON.stringify (FilmeAssistir))// coloca no local storage
    window.location.href='filme.html'// manda pra pagina de filme
})
perfilVoltar.addEventListener("click", () =>{
    localStorage.removeItem('perfilLogado');
    window.location.href='perfil.html'// volta pra seleção de perfil
})
PesquisaFilme.addEventListener("input", () => {
    

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