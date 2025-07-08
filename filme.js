const Voltar = document.querySelector("#Voltar");// querry selectors
const filmeAssistindo = document.querySelector("#filmeAssistindo");

const FilmeAssistir = localStorage.getItem('FilmeAssistir')// pegamos o filme q a pessoa quer assistir
const Assistindo = JSON.parse(FilmeAssistir);// voltamos ele pra objeto

filmeAssistindo.setAttribute("src", Assistindo.video)// colocamos a fonte do iframe como o video de exemplo do filme
// coloca o video no iframe pra pessoa assistir
Voltar.addEventListener("click", () => {
    localStorage.removeItem('FilmeAssistir')
    window.location.href="paginicial.html"
});// voltar pro bglh onde tem os filmes