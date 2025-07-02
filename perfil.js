const listaDiv = document.querySelector("#perfilDiv");
let ClicadoEditar_btn=false;
const acharUserLogado = localStorage.getItem('userLogado');
const userLogado = JSON.parse(acharUserLogado);

const FotosPerfil = [
  "assets/img1.jpg", "assets/img2.jpg", "assets/img3.jpg", "assets/img4.jpg", "assets/img5.jpg",
  "assets/img6.jpg", "assets/img7.jpg", "assets/img8.jpg", "assets/img9.jpg", "assets/img10.jpg"
];

function MostrarPerfil() {
  listaDiv.innerHTML = "";

  userLogado.perfil.forEach(profile => {
    const perfilDiv = document.createElement("div");
    perfilDiv.innerHTML = `
      <img src='${profile.imagemPerfil}' id='Redirect'><br>
      <h1>${profile.nomePerfil}</h1>
      <button class='editPerfil'>Editar Perfil</button>
    `;

    listaDiv.append(perfilDiv);
    const Redirect = perfilDiv.querySelector("#Redirect");
    Redirect.addEventListener("click", () => {
      const perfilLogado = JSON.stringify(profile);
      
      localStorage.setItem('perfilLogado', perfilLogado);
      window.location.href = "paginicial.html";
    });

    const editPerfil = perfilDiv.querySelector(".editPerfil");

  editPerfil.addEventListener("click", EditandoPerfil);
  function EditandoPerfil(){
     ClicadoEditar_btn=true;
     perfilSendoEditado = profile;
     CriarPerfil();
  }

  });
  if(userLogado.planoUser == "basico" && userLogado.perfil.length<3 ||userLogado.planoUser == "padrao" && userLogado.perfil.length<4 ||userLogado.planoUser == "premium" && userLogado.perfil.length<5){
    const botaoCriar= document.createElement("button")
    perfilDiv.append(botaoCriar)
    botaoCriar.addEventListener("click",() =>{CriarPerfil()})
  }
}
MostrarPerfil();

function CriarPerfil() {
  listaDiv.innerHTML = "";

  const divCriaPerfil = document.createElement("div");
  divCriaPerfil.classList.add("criar-perfil");

  divCriaPerfil.innerHTML = `
    <h2>Criar Novo Perfil</h2>
    <label for="nomePerfil">Nome do Perfil:</label>
    <input type="text" id="nomePerfil" placeholder="Digite um nome">
    <div id="fotosPerfil" class="galeria-fotos"></div>
    <p id="mensagemPerfil"></p>
    <button id="btnCriar">Criar Perfil</button>
    <button id="btnCancelar">Cancelar</button>
  `;

  listaDiv.append(divCriaPerfil);

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
        Galeria.querySelectorAll('.foto').forEach(f => f.classList.remove('selecionado'));
        img.classList.add('selecionado');
      });
    });
  }

  ListaFotos();

  //Consigo chamar na hora de editar pefil!
  PerfilCriar_btn.addEventListener("click", CriarPerfil);
  btnCancelar.addEventListener("click", () => {
    MostrarPerfil();
    return;
  })
  function CriarPerfil (){
    
 
    const selecionada = Galeria.querySelector(".foto.selecionado");

    if (NomePerfil.value === "") {
      MensagemPerfil.innerHTML = "Insira o seu nome, por favor!";
    } else if (!selecionada) {
      MensagemPerfil.textContent = "Escolha uma foto para conseguirmos criar seu perfil!";
    } 
    else {// Para ver se é um ediçao de perfil ou a primeira criação
        if( ClicadoEditar_btn==true){
          perfilSendoEditado.nomePerfil = NomePerfil.value;
          perfilSendoEditado.imagemPerfil = selecionada.src;
        }else{
          const perfilCriado = {
            nomePerfil: NomePerfil.value,
            imagemPerfil: selecionada.src
          };
          userLogado.perfil.push(perfilCriado);
        }

      // userLogado.perfil.push(perfilCriado);

      const todosUsuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
      const index = todosUsuarios.findIndex(u => u.email === userLogado.email);

      if (index !== -1) {
        todosUsuarios[index] = userLogado;
        localStorage.setItem('usuarios', JSON.stringify(todosUsuarios));
      }

      localStorage.setItem('userLogado', JSON.stringify(userLogado));

      MensagemPerfil.textContent = "Perfil criado com sucesso!";
      MostrarPerfil();
    }
 }
}
