const Voltar = document.querySelector("#Voltar");// querry selectors
const filmeAssistindo = document.querySelector("#filmeAssistindo");
const FilmeNome = document.querySelector("#FilmeNome");


async function getFilmeAssistir(){
    const data = await fetch(API/cineon/filme.php, {
        method: 'GET',
    }).then(res => res.json());
    const FilmeAssistir = data.filme// pegamos o filme q a pessoa quer assistir
    FilmeNome.innerHTML=`${data.titulo}`
    filmeAssistindo.setAttribute("src", FilmeAssistir)
}



// colocamos a fonte do iframe como o video de exemplo do filme
// coloca o video no iframe pra pessoa assistir
Voltar.addEventListener("click", async () => {
    await fetch(API/cineon/removeFilme.php, {
        method: 'GET',
    })
    window.location.href="paginicial.html"
});// voltar pro bglh onde tem os filmes