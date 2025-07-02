const Voltar = document.querySelector("#Voltar");
const filmeAssistido = document.querySelector("#filmeAssistido");

const FilmeAssistir = localStorage.getItem('FilmeAssistir')
const Assistindo = JSON.parse(FilmeAssistir);


filmeAssistido.src=`${Assistindo.video}`


Voltar.addEventListener("click", () => {
    localStorage.removeItem('FilmeAssistir')
    window.location.href="paginicial.html"
})
