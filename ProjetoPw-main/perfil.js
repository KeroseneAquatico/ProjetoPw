const listaDiv = document.querySelector("#perfilDiv");
let ClicadoEditar_btn=false;// vai ser usado dps no código para editar qualquer perfil q o usuario tenha
const logout= document.querySelector("#logout");


const FotosPerfil = [
  "assets/img1.jpg", "assets/img2.jpg", "assets/img3.jpg", "assets/img4.jpg", "assets/img5.jpg",
  "assets/img6.jpg", "assets/img7.jpg", "assets/img8.jpg", "assets/img9.jpg", "assets/img10.jpg"
];// fotos para editar ou colocar no perfil

logout.addEventListener("click", ()=>{
    
    window.location.href='login.html'
}) //ele tira quem logou do local storage e volta pra pagina de login


function MostrarPerfil() {
  listaDiv.innerHTML = "";
// pega de dentro do user logado o array de perfil dele 
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
    });// manda qual dos perfil logou e manda pra pagina inicial

    const editPerfil = perfilDiv.querySelector(".editPerfil");

  editPerfil.addEventListener("click", EditandoPerfil);
  function EditandoPerfil(){
     ClicadoEditar_btn=true;// aq o ngc de editar algum perfil vira verdade
     perfilSendoEditado = profile;// qual perfil eu vou editar
     CriarPerfil();// tem aq dentro o ngc pra mudar o perfil
  }

  });
  if(userLogado.planoUser == "basico" && userLogado.perfil.length<3 ||userLogado.planoUser == "padrao" && userLogado.perfil.length<4 ||userLogado.planoUser == "premium" && userLogado.perfil.length<5){ //Aq tem a logica para criar o botão de adicionar usuarios dependendo de quantos ele pode por plano
    const botaoCriar= document.createElement("button")
    perfilDiv.append(botaoCriar)
    botaoCriar.innerHTML=`Criar Perfil`
    botaoCriar.addEventListener("click",() =>{CriarPerfil()})
  }
}
MostrarPerfil();// chama pra aparecer tudo na tela de inicio

function CriarPerfil() {
  //limpa pra fazer o ngc de criar perfil
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
        Galeria.querySelectorAll('.foto').forEach(f => f.classList.remove('selecionado'));// pra limpar a seleção das fotos
        img.classList.add('selecionado');// coloca qual ele realmente selecionou
      });
    });
  }
  
  ListaFotos();// aq nós chamamos a lista
  
  //Consigo chamar na hora de editar pefil!
  PerfilCriar_btn.addEventListener("click", CriarPerfil);// isso cria o perfil mesmo
  btnCancelar.addEventListener("click", () => {
    MostrarPerfil();// se ela cancelar volta pra lista normal
    return;
  })
  function CriarPerfil (){
    
    
    const selecionada = Galeria.querySelector(".foto.selecionado");// achamos qual foto a pessoa escolheu
    
    if (NomePerfil.value === "") {// Se tem nome passa se não para aq
      MensagemPerfil.innerHTML = "Insira o seu nome, por favor!";
    } else if (!selecionada) {// se selecionou uma foto passa se não para aq 
      MensagemPerfil.innerHTML = "Escolha uma foto para conseguirmos criar seu perfil!";
    } 
    else {// Para ver se é um ediçao de perfil ou a primeira criação
      if( ClicadoEditar_btn==true){
        perfilSendoEditado.nomePerfil = NomePerfil.value;
        perfilSendoEditado.imagemPerfil = selecionada.src;
        // aq só muda os valores e etc
      } else if(nomePerfilJaExistente(userLogado,NomePerfil.value)){// já tem um perfil com esse nome
        alert(`Já existe um perfil com o nome ${NomePerfil.value}! Por favor escolha outro`)
        NomePerfil.value=''
          return;
      }else {
          //cria o objeto
          const perfilCriado = {
            nomePerfil: NomePerfil.value,
            imagemPerfil: selecionada.src,
            assistirMaisTarde:[],
            assistidoRecente: [],
          };
          userLogado.perfil.push(perfilCriado);// coloca no usuário
        }

      // userLogado.perfil.push(perfilCriado);

      
      const index = todosUsuarios.findIndex(u => u.email === userLogado.email);// procura quem q fez esse novo perfil no array de usuarios inteiro

      if (index !== -1) {// se achou coloca no que tiver achado o bglh
        todosUsuarios[index].perfil=userLogado.perfil;
        localStorage.setItem('usuarios', JSON.stringify(todosUsuarios));//atualiza o local storage q tem todos os usuarios
      }

      localStorage.setItem('userLogado', JSON.stringify(userLogado));//atualiza o local storage de quem logou

      MensagemPerfil.innerHTML = "Perfil criado com sucesso!";// avisa q criar funcionou
      MostrarPerfil();//mostra a lista de todos os perfils dnv
    }
 }
}
function nomePerfilJaExistente(userLogado, nome) {// passa o user logado e o nome do perfil como parametro
    return userLogado.perfil.some(p => p.nomePerfil === nome);// SE TEM ALGUM PERFIL Q TEM O MSM NOME Q TAO QUERENDO COLOCAR ELE NAO VAI DEIXAR LÁ NO IF
}
