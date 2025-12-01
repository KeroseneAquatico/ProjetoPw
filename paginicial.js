//querrySelector selecionando os elementos do html
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
const Surpresa = document.querySelector("#Surpresa");
const logout = document.querySelector("#logout");
const perfilVoltar = document.querySelector("#perfilVoltar");
const imgPerfil = document.querySelector("#imgPerfil");
const divFilmes= document.querySelector("#FilmesDiv")




async function exibirFilmes(){
    const genreMap = {
        'Aventura': aventura,
        'Ação': acao,
        'Crime': crime,
        'Ficção Científica': ficcaoCientifica,
        'Drama': drama,
        'Comédia': comedia,
        'Comédia Romântica': comediaRomantica,
        'Dança': danca,
        'Faroeste': faroeste,
        'Fantasia': fantasia,
        'Filme de Guerra': Guerra,
        'Filme Policial': policial,
        'Mistério': misterio,
        'Musical': musical,
        'Romance': romance,
        'Terror': terror,
        'Thriller': thriller
    };

    Filmes.forEach(filme => {
        const container = genreMap[filme.genero];
        if (!container) return;

        const card = document.createElement('div');
        card.classList.add('movie-card');
        card.innerHTML = `<img src="${filme.foto}" />`;
        card.addEventListener('click', () => janelaFilme(filme));

        container.appendChild(card);
    });
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

    window.location.href='perfil.html'// volta pra seleção de perfil
})
logout.addEventListener("click", () => {
    fetch('api/auth/logout.php')// chama o logout na api
    window.location.href="login.html";// sair do código e voltar diretamente pro login
})

//atualiza tudo no inicio do código
exibirFilmes();
exibirAssistidosRecentemente();
atualizarMaisTarde();