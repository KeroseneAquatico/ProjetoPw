// const perfilDiv = document.querySelector("#perfilDiv");
// const logout = document.querySelector("#logout");
// const user = await fetch('api/auth/usuarioLogado.php',{
//   method:'GET'
// }).then(res => res.json());// pega os dados do user logado 
// let array = await fetch('api/cineon/listarPerfil.php',{
//   method:'GET'
// }).then(res => res.json());// pega os perfis do user logado

// logout.addEventListener("click", ()=>{
//     fetch('api/cineon/logout.php',{
//       method:'GET'})
//       window.location.href='login.html'
//     }) //ele tira quem logou do local storage e volta pra pagina de login
    
    
//     await function MostrarPerfis() {
//    array = await fetch('api/cineon/listarPerfil.php',{
//       method:'GET'
//   }).then(res => res.json());// pega os perfis do user logado
//   perfilDiv.innerHTML = "";
//     array.perfis.forEach(perfil => {
//     const div = document.createElement("div");
//     div.classList.add("perfil-card");
//     div.innerHTML = `
//       <img src='${perfil.imagem}' id='Redirect'><br>
//       <h1>${perfil.nome}</h1>
//       <button class='btn-deletar'>Deletar Perfil</button>
//     `;

//     perfilDiv.append(div);
//     const btnDeletar = div.querySelector(".btn-deletar");
//     btnDeletar.addEventListener("click", async () => {
//       const confirma = confirm(`Tem certeza que deseja deletar o perfil ${perfil.nome}?`);
//       if (confirma) {
//         const res = await fetch('api/cineon/perfilExcluir.php', {
//           method: 'GET'});
//         MostrarPerfis(); // Atualiza a lista de perfis após a deleção
//     const Redirect = div.querySelector("#Redirect");
//     Redirect.addEventListener("click", () => {
//       fetch('api/cineon/perfil.php', {
//         method: 'GET'})
//       window.location.href = "paginicial.html";
//     });// manda qual dos perfil logou e manda pra pagina inicial



//   }});
//     })
//   };
//   if(userLogado.planoUser == "basico" && userLogado.perfil.length<3 ||userLogado.planoUser == "padrao" && userLogado.perfil.length<4 ||userLogado.planoUser == "premium" && userLogado.perfil.length<5){ //Aq tem a logica para criar o botão de adicionar usuarios dependendo de quantos ele pode por plano
//     const botaoCriar= document.createElement("button")
//     perfilDiv.append(botaoCriar)
//     botaoCriar.innerHTML=`Criar Perfil`
//     botaoCriar.addEventListener("click",() =>{CriarPerfil()})
//   }

// MostrarPerfil();// chama pra aparecer tudo na tela de inicio

// async function CriarPerfil() {
  
//   //limpa pra fazer o ngc de criar perfil
//   perfilDiv.innerHTML = "";
  
//   const divCriaPerfil = document.createElement("div");
//   divCriaPerfil.classList.add("criar-perfil");
  
//   divCriaPerfil.innerHTML = `
//   <form id="formCriarPerfil">
//   <h2>Criar Novo Perfil</h2>
//   <label for="nomePerfil">Nome do Perfil:</label>
//   <input type="text" id="nomePerfil" name="nomePerfil" placeholder="Digite um nome">
//   <div id="fotosPerfil" class="galeria-fotos"></div>
//   <p id="mensagemPerfil"></p>
//   <button id="btnCriar">Criar Perfil</button>
//   <button id="btnCancelar">Cancelar</button>
//   </form>`;
  
//   perfilDiv.append(divCriaPerfil);
  
  
  
//   const Galeria = document.querySelector("#fotosPerfil");
//   const NomePerfil = divCriaPerfil.querySelector("#nomePerfil");
//   const MensagemPerfil = divCriaPerfil.querySelector("#mensagemPerfil");
//   const PerfilCriar_btn = divCriaPerfil.querySelector("#btnCriar");
//   const btnCancelar = divCriaPerfil.querySelector("#btnCancelar");
  
//   function ListaFotos() {
//     FotosPerfil.forEach((foto, i) => {
//       const divFoto = document.createElement("div");
//       divFoto.innerHTML = `<img src='${foto}' id='${i}' class='foto'>`;
//       Galeria.append(divFoto);
      
//       const img = divFoto.querySelector("img");
//       img.addEventListener("click", () => {
//         Galeria.querySelectorAll('.foto').forEach(f => f.classList.remove('selecionado'));// pra limpar a seleção das fotos
//         img.classList.add('selecionado');// coloca qual ele realmente selecionou
//       });
//     });
//   }
  
//   ListaFotos();// aq nós chamamos a lista
  
//   //Consigo chamar na hora de editar pefil!
//   PerfilCriar_btn.addEventListener("click", gozeil);// isso cria o perfil mesmo
//   btnCancelar.addEventListener("click", () => {
//     MostrarPerfil();// se ela cancelar volta pra lista normal
//     return;
//   })
//  async function gozeil (){
    
//     const selecionada = Galeria.querySelector(".foto.selecionado");// achamos qual foto a pessoa escolheu
    
//       const formCriarPerfil = document.querySelector("#formCriarPerfil");
//       const formDataCriar = new FormData(formCriarPerfil);
//       const data = await fetch('api/cineon/criarPerfil.php', {
//         method: 'POST',
//         body: formDataCriar
//       }).then(res => res.json());
//       setTimeout(() => { 
//       MensagemPerfil.innerHTML = data.message;
//       }, 1000);
//       MostrarPerfil();//mostra a lista de todos os perfils dnv
//     }
//  }


const perfilDiv = document.querySelector("#perfilDiv");
const logout = document.querySelector("#logout");

// pega o user logado
const userLogado = await fetch('api/auth/usuarioLogado.php')
  .then(res => res.json());

// -------------------------------------
// LOGOUT
// -------------------------------------
logout.addEventListener("click", () => {
  fetch('api/cineon/logout.php');
  window.location.href = 'login.html';
});

// -------------------------------------
// MOSTRAR PERFIS
// -------------------------------------
async function MostrarPerfis() {
  const array = await fetch('api/cineon/listarPerfis.php')
    .then(res => res.json());

  perfilDiv.innerHTML = "";

  array.perfis.forEach(perfil => {
    const div = document.createElement("div");
    div.classList.add("perfil-card");

    div.innerHTML = `
      <img src="${perfil.imagem}" class="imgRedirect"><br>
      <h1>${perfil.nome}</h1>
      <button class="btn-deletar">Deletar Perfil</button>
    `;

    perfilDiv.append(div);

    // -------------------------
    // BOTÃO DELETAR
    // -------------------------
    const btnDeletar = div.querySelector(".btn-deletar");
    btnDeletar.addEventListener("click", async () => {
      const confirma = confirm(`Tem certeza que deseja deletar o perfil ${perfil.nome}?`);

      if (confirma) {
        await fetch('api/cineon/perfilExcluir.php?id=' + perfil.id);
        MostrarPerfis();
      }
    });

    // -------------------------
    // REDIRECIONAR PARA O PERFIL
    // -------------------------
    const img = div.querySelector(".imgRedirect");
    img.addEventListener("click", async () => {

      // Envia ID do perfil para o backend setar sessão
      await fetch('api/cineon/perfil.php?id=' + perfil.id);

      window.location.href = "paginicial.html";
    });
  });

  // -------------------------------------
  // BOTÃO CRIAR PERFIL (dependendo do plano)
  // -------------------------------------
  if (
    (userLogado.planoUser === "basico" && array.perfis.length < 3) ||
    (userLogado.planoUser === "padrao" && array.perfis.length < 4) ||
    (userLogado.planoUser === "premium" && array.perfis.length < 5)
  ) {
    const botaoCriar = document.createElement("button");
    botaoCriar.innerHTML = "Criar Perfil";
    botaoCriar.classList.add("btn-criar-perfil");

    botaoCriar.addEventListener("click", () => {
      CriarPerfil();
    });

    perfilDiv.append(botaoCriar);
  }
}

// Carrega os perfis ao entrar na página
MostrarPerfis();

// -------------------------------------
// CRIAR PERFIL
// -------------------------------------
async function CriarPerfil() {
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
      <button id="btnCancelar" type="button">Cancelar</button>
    </form>
  `;

  perfilDiv.append(divCriaPerfil);

  const Galeria = divCriaPerfil.querySelector("#fotosPerfil");
  const MensagemPerfil = divCriaPerfil.querySelector("#mensagemPerfil");
  const PerfilCriar_btn = divCriaPerfil.querySelector("#btnCriar");
  const btnCancelar = divCriaPerfil.querySelector("#btnCancelar");

  // -------------------------
  // LISTA DAS FOTOS
  // -------------------------
  FotosPerfil.forEach((foto, i) => {
    const divFoto = document.createElement("div");
    divFoto.innerHTML = `<img src='${foto}' id='foto${i}' class='foto'>`;
    Galeria.append(divFoto);

    const img = divFoto.querySelector("img");
    img.addEventListener("click", () => {
      Galeria.querySelectorAll('.foto').forEach(f => f.classList.remove('selecionado'));
      img.classList.add('selecionado');
    });
  });

  // -------------------------
  // CANCELAR
  // -------------------------
  btnCancelar.addEventListener("click", () => {
    MostrarPerfis();
  });

  // -------------------------
  // CRIAR PERFIL
  // -------------------------
  PerfilCriar_btn.addEventListener("click", async (e) => {
    e.preventDefault();

    const selecionada = Galeria.querySelector(".foto.selecionado");
    if (!selecionada) {
      MensagemPerfil.innerHTML = "Selecione uma foto!";
      return;
    }

    const formCriarPerfil = document.querySelector("#formCriarPerfil");
    const formDataCriar = new FormData(formCriarPerfil);

    // adiciona qual foto foi escolhida
    formDataCriar.append("foto", selecionada.src);

    const data = await fetch('api/cineon/criarPerfil.php', {
      method: 'POST',
      body: formDataCriar
    }).then(res => res.json());

    MensagemPerfil.innerHTML = data.message;

    setTimeout(() => {
      MostrarPerfis();
    }, 1000);
  });
}