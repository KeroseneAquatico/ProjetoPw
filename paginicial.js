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

const Surpresa = document.querySelector("#Surpresa");
const PesquisaFilme = document.querySelector("#PesquisaFilme");
const logout = document.querySelector("#logout");
const perfilVoltar = document.querySelector("#perfilVoltar");
const imgPerfil = document.querySelector("#imgPerfil");

const perfilUsuario = localStorage.getItem('perfilLogado');
const perfilLogado = JSON.parse(perfilUsuario);

imgPerfil.src=`${perfilLogado.imagemPerfil}`;

const Filmes = [
    {
        foto: "https://m.media-amazon.com/images/I/71pS7uZq0eL._AC_SY679_.jpg",
        titulo: "O Rei Leão",
        genero: " Aventura",
        ano: 1994,
        sinopse: "O Rei Leão é a história de Simba, um jovem leão que busca seguir os passos de seu pai, Mufasa, e assumir seu lugar como o novo rei da savana, enquanto enfrenta o tio malvado Scar.",
        video: "https://www.youtube.com/watch?v=4sj1pP1W2hI",
        indicacao: "Livre",
    },
    {
        foto: "https://m.media-amazon.com/images/I/91KkNq2U61L._AC_SY679_.jpg",
        titulo: "Vingadores: Ultimato",
        genero: "Ação",
        ano: 2019,
        sinopse: "Os Vingadores se reúnem para enfrentar Thanos em uma batalha épica para salvar o universo. Após os eventos de 'Vingadores: Guerra Infinita', eles tentam reverter os danos causados pelo vilão.",
        video: "https://www.youtube.com/watch?v=6ZfuNTqbHE8",
        indicacao: "12 anos",
    },
    {
        foto: "https://m.media-amazon.com/images/I/61DLF2yDZ5L._AC_SY679_.jpg",
        titulo: "A Origem",
        genero: "Ficção Científica",
        ano: 2010,
        sinopse: "Dom Cobb, um ladrão especializado em roubar segredos durante o sonho das pessoas, é contratado para implantar uma ideia na mente de uma vítima. Mas essa missão complexa leva a um jogo mental sem limites.",
        video: "https://www.youtube.com/watch?v=8hP9D6kZseM",
        indicacao: "14 anos",
    },
    {
        foto: "https://m.media-amazon.com/images/I/91noYdtPAXL._AC_SY679_.jpg",
        titulo: "Jurassic Park",
        genero: "Aventura",
        ano: 1993,
        sinopse: "Quando um bilionário cria um parque temático com dinossauros geneticamente modificados, as coisas saem de controle e os cientistas devem lutar pela sobrevivência contra as criaturas selvagens.",
        video: "https://www.youtube.com/watch?v=Cr8cNObG4Vo",
        indicacao: "10 anos",
    },
    {
        foto: "https://m.media-amazon.com/images/I/81X9D3zZtYL._AC_SY679_.jpg",
        titulo: "O Poderoso Chefão",
        genero: "Crime",
        ano: 1972,
        sinopse: "O chefe da máfia Don Vito Corleone lida com questões familiares e de poder dentro do mundo do crime organizado, enquanto tenta proteger seu império contra ameaças externas.",
        video: "https://www.youtube.com/watch?v=sY1S34973zA",
        indicacao: "16 anos",
    },
    {
        foto: "https://m.media-amazon.com/images/I/91wyb7i4ZsL._AC_SY679_.jpg",
        titulo: "Forrest Gump",
        genero: "Drama",
        ano: 1994,
        sinopse: "Forrest Gump, um homem com um QI abaixo da média, narra sua vida extraordinária, que inclui momentos de sucesso no esporte, no exército e até mesmo no mundo dos negócios, sempre com o amor e a perseverança guiando seu caminho.",
        video: "https://www.youtube.com/watch?v=bLvqoHBptjg",
        indicacao: "10 anos",
    },
    {
        foto: "https://m.media-amazon.com/images/I/91hJdgdTVML._AC_SY679_.jpg",
        titulo: "O Senhor dos Anéis: A Sociedade do Anel",
        genero: "Aventura",
        ano: 2001,
        sinopse: "Frodo Bolseiro, um hobbit simples, recebe a missão de destruir um anel poderoso que pode colocar em risco a existência do mundo, enquanto enfrenta perigos e seres malignos na jornada para o Monte da Perdição.",
        video: "https://www.youtube.com/watch?v=V75dMMIW2B4",
        indicacao: "12 anos",
    }
];

function FiltrarFilmes () {
    const ExibirFilme = PesquisaFilme.value =='' || Filmes.titulo.toLowerCase().includes(PesquisaFilme.value.toLowerCase())
    if(ExibirFilme){
        Filmes.forEach((filme) => {
            const genero = filme.genero.toLowerCase()
            const card = document.createElement("div");
            card.innerHTML=`<img src='${filme.foto}'>`
            
            
            
            
        })
    }
}

perfilVoltar.addEventListener("click", () => {
    localStorage.removeItem('perfilLogado');
    window.location.href="perfil.html";
})
logout.addEventListener("click" , () => {
    localStorage.removeItem('userLogado');
    localStorage.removeItem('perfilLogado');
    window.location.href="login.html"
});

PesquisaFilme.addEventListener("input", () => {FiltrarFilmes()})