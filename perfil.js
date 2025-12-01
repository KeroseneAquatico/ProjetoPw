const perfilDiv = document.querySelector("#perfilDiv");
const logout = document.querySelector("#logout");

let perfis = await fetch('api/cineon/listarPerfil.php',{
    method:'GET'
}).then(res => res.json());// pega os perfis do user logado
const user = await fetch('api/auth/usuarioLogado.php',{
    method:'GET'
}).then(res => res.json());// pega os dados do user logado 


logout.addEventListener("click", ()=>{
    fetch('api/cineon/logout.php',{
        method:'GET'})
    window.location.href='login.html'
}) //ele tira quem logou do local storage e volta pra pagina de login


function MostrarPerfis() {
  perfilDiv.innerHTML = "";
    perfis.perfis.forEach(perfil => {
    const div = document.createElement("div");
    div.classList.add("perfil-card");
    div.innerHTML = `
      <img src='${perfil.imagem}' id='Redirect'><br>
      <h1>${perfil.nome}</h1>
      <button class='btn-deletar'>Deletar Perfil</button>
    `;

    perfilDiv.append(div);
    const Redirect = div.querySelector("#Redirect");
    Redirect.addEventListener("click", () => {
      fetch('api/cineon/selecionarPerfil.php', {
        method: 'GET'})
      window.location.href = "paginicial.html";
    });// manda qual dos perfil logou e manda pra pagina inicial



  })

  };
  if(userLogado.planoUser == "basico" && userLogado.perfil.length<3 ||userLogado.planoUser == "padrao" && userLogado.perfil.length<4 ||userLogado.planoUser == "premium" && userLogado.perfil.length<5){ //Aq tem a logica para criar o botão de adicionar usuarios dependendo de quantos ele pode por plano
    const botaoCriar= document.createElement("button")
    perfilDiv.append(botaoCriar)
    botaoCriar.innerHTML=`Criar Perfil`
    botaoCriar.addEventListener("click",() =>{CriarPerfil()})
  }

MostrarPerfil();// chama pra aparecer tudo na tela de inicio

async function CriarPerfil() {
  //limpa pra fazer o ngc de criar perfil
  perfilDiv.innerHTML = "";
  
  const divCriaPerfil = document.createElement("div");
  divCriaPerfil.classList.add("criar-perfil");
  
  divCriaPerfil.innerHTML = `
  <form id="formCriarPerfil">
  <h2>Criar Novo Perfil</h2>
  <label for="nomePerfil">Nome do Perfil:</label>
  <input type="text" id="nomePerfil" name="nomePerfil" placeholder="Digite um nome">
  <div id="fotosPerfil" class="galeria-fotos"></div>
  <p id="mensagemPerfil"></p>
  <button id="btnCriar">Criar Perfil</button>
  <button id="btnCancelar">Cancelar</button>
  </form>`;
  
  perfilDiv.append(divCriaPerfil);
  
  
  
  const Galeria = document.querySelector("#fotosPerfil");
  const NomePerfil = divCriaPerfil.querySelector("#nomePerfil");
  const MensagemPerfil = divCriaPerfil.querySelector("#mensagemPerfil");
  const PerfilCriar_btn = divCriaPerfil.querySelector("#btnCriar");
  const btnCancelar = divCriaPerfil.querySelector("#btnCancelar");
  
  function ListaFotos() {
    FotosPerfil.forEach((foto, i) => {
      const divFoto = document.createElement("div");
      divFoto.innerHTML = `<img src='${foto}' id='${i}' class='foto'>`;
      Galeria.append(divFoto);
      
      const img = divFoto.querySelector("img");
      img.addEventListener("click", () => {
        Galeria.querySelectorAll('.foto').forEach(f => f.classList.remove('selecionado'));// pra limpar a seleção das fotos
        img.classList.add('selecionado');// coloca qual ele realmente selecionou
      });
    });
  }
  
  ListaFotos();// aq nós chamamos a lista
  
  //Consigo chamar na hora de editar pefil!
  PerfilCriar_btn.addEventListener("click", gozeil);// isso cria o perfil mesmo
  btnCancelar.addEventListener("click", () => {
    MostrarPerfil();// se ela cancelar volta pra lista normal
    return;
  })
 async function gozeil (){
    
    
    const selecionada = Galeria.querySelector(".foto.selecionado");// achamos qual foto a pessoa escolheu
    
    
    if(nomePerfilJaExistente(userLogado,NomePerfil.value)){// já tem um perfil com esse nome
      MensagemPerfil.innerHTML = `Já existe um perfil com o nome ${NomePerfil.value}! Por favor escolha outro`
      NomePerfil.value=''
      return;
    }else{

      const formCriarPerfil = document.querySelector("#formCriarPerfil");
      const formDataCriar = new FormData(formCriarPerfil);
      const data = await fetch('api/cineon/criarPerfil.php', {
        method: 'POST',
        body: formDataCriar
      }).then(res => res.json()); 
      MensagemPerfil.innerHTML = data.message;
    }

      MostrarPerfil();//mostra a lista de todos os perfils dnv
    }
 }

function nomePerfilJaExistente(userLogado, nome) {// passa o user logado e o nome do perfil como parametro
    return userLogado.perfil.some(p => p.nomePerfil === nome);// SE TEM ALGUM PERFIL Q TEM O MSM NOME Q TAO QUERENDO COLOCAR ELE NAO VAI DEIXAR LÁ NO IF
}
