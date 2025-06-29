const listaDiv = document.querySelector("#perfilDiv");

const acharUserLogado = localStorage.getItem('userLogado');
const userLogado = JSON.parse(acharUserLogado);

const FotosPerfil=["","","","","","","","","",""]

function MostrarPerfil (){
    userLogado.perfil.forEach(profile => {
        const perfilDiv = document.createElement("div");
        perfilDiv.innerHTML=
        `<img src='${profile.imagemPerfil}'><br>
        <h1>${profile.nomePerfil}</h1>
        <button id='editPerfil'>Editar Perfil</button>
        `

        listaDiv.append(perfilDiv);

        perfilDiv.addEventListener("click", () => {
            const perfilLogado= JSON.stringify(profile);
            localStorage.setItem('perfilLogado', perfilLogado );
            window.location.href="paginicial.html";
        })

        const editPerfil = perfilDiv.querySelector("#editPerfil");

        editPerfil.addEventListener("click" , () => {
            const divEdit = document.createElement("div");
            divEdit.classList.add("fog")
            
        })

    });
}

function ListaFotos () { 
     FotosPerfil.forEach((foto,i) =>{
        const divFoto = document.createElement("div");
        divFoto.innerHTML=`<img src='${foto}' id='${i} class='foto'>`;  

         const divs = document.querySelectorAll('.foto');

      divs.forEach(div => {
      div.addEventListener('click', () => {
      // Remover a seleção de todas as outras
      divs.forEach(d => d.classList.remove('selecionado'));
       
      // Alternar (toggle) a seleção da clicada
      div.classList.toggle('selecionado');
     // Altere a classe dessa div que foi clicada.

     listaDiv.append(divFoto)

      })
    });


const selecionada = document.querySelector('.selecionado');
//A div estava só com a classe foto mas agora ele recebeu o selecionado e por isso conseguimos identificar

if (!selecionada) {
  console.log("Nenhuma div foi selecionada ainda.");
} else {
  console.log("Div selecionada:", selecionada);
  if(!NomePerfil.value==""){
  MensagemPerfil.innerHTML="Perfil criado com SUCESSO"
  CriarPerfil ();
  }else{
   MensagemPerfil.innerHTML="Insira o seu nome, por favor!"
   NomePerfil.value="";
  }

}

    });
 
}
//quando ela va criar outro perfil, ela vai ter que clicar em um btn, que já está na mostar pefil
//varias divs com as fotos 

//quando clicar, paracça ua div que vai inserir o nome, array de fotos, salve usuário logado e no aarray usuários.

   

function CriarPerfil (){
const divCriaPerfil= document.createElement("div");
divCriaPerfil.classList.add("criar-perfil");

  divCriaPerfil.innerHTML = `
    <h2>Criar Novo Perfil</h2>
    <label for="nomePerfil">Nome do Perfil:</label>
    <input type="text" id="nomePerfil" placeholder="Digite um nome">

    <div id="fotosPerfil" class="galeria-fotos"></div>

    <p id="mensagemPerfil"></p>

    <button id="btnCriar">Criar Perfil</button>
  `;

  document.body.appendChild(divCriaPerfil);

  const NomePerfil = divCriaPerfil.querySelector("#nomePerfil");
  const MensagemPerfil = divCriaPerfil.querySelector("#mensagemPerfil");
  const PerfilCriar_btn = divCriaPerfil.querySelector("#btnCriar");


    PerfilCriar_btn.addEventListener("click", () => {
    const nome = NomePerfil.value;
    const selecionada = galeria.querySelector(".selecionado img");

    if (!nome) {
      MensagemPerfil.textContent = "Insira o seu nome, por favor!";
      return;
    }

    if (!selecionada) {
      MensagemPerfil.textContent = "Escolha uma foto!";
      return;
    }

    // Atualizar o perfil no usuário logado
    const novoPerfil = {
      nomePerfil: nome,
      imagemPerfil: selecionada.src
    };

    userLogado.perfil.push(novoPerfil);

    // Salvar no localStorage
    const todosUsuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const index = todosUsuarios.findIndex(u => u.email === userLogado.email);

    if (index !== -1) {
      todosUsuarios[index] = userLogado;
      localStorage.setItem('usuarios', JSON.stringify(todosUsuarios));
    }

    localStorage.setItem('userLogado', JSON.stringify(userLogado));

    MensagemPerfil.textContent = "Perfil criado com sucesso!";

    ListaFotos ()
}
