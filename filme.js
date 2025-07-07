const Voltar = document.querySelector("#Voltar");
const filmeAssistindo = document.querySelector("#filmeAssistindo");

const FilmeAssistir = localStorage.getItem('FilmeAssistir')
const Assistindo = JSON.parse(FilmeAssistir);

console.log(filmeAssistindo)
filmeAssistindo.setAttribute("src", Assistindo.video)

Voltar.addEventListener("click", () => {
    localStorage.removeItem('FilmeAssistir')
    window.location.href="paginicial.html"
});
