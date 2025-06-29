
// Ele tem oq tu pediu para eu fazer!

const listaDiv = document.querySelector("#perfilDiv");

const acharUserLogado = localStorage.getItem('userLogado');
const userLogado = JSON.parse(acharUserLogado);

const FotosPerfil=["/img1.jpg","/img2.jpg","/img3.jpg","/img4.jpg","/img5.jpg","/img6.jpg","/img7.jpg","/img8.jpg","/img9.jpg","/img10.jpg"]

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


//quando ela va criar outro perfil, ela vai ter que clicar em um btn, que já está na mostar pefil
//varias divs com as fotos 

//quando clicar, paracça ua div que vai inserir o nome, array de fotos, salve usuário logado e no aarray usuários.

   

function CriarPerfil (){
 
const divCriaPerfil= document.createElement("div");
//Cria a div perfil
divCriaPerfil.classList.add("criar-perfil");
//Coloca uma classe nela

divCriaPerfil.innerHTML = `
    <h2>Criar Novo Perfil</h2>
    <label for="nomePerfil">Nome do Perfil:</label>
    <input type="text" id="nomePerfil" placeholder="Digite um nome">

    <div id="fotosPerfil" class="galeria-fotos"></div>

    <p id="mensagemPerfil"></p>

    <button id="btnCriar">Criar Perfil</button>
  `;
    listaDiv.append(divCriaPerfil);

    //Estou criando a div para criar perfil
 
  const Galeria = document.querySelector("#fotosPerfil");

  const NomePerfil = divCriaPerfil.querySelector("#nomePerfil");
  const MensagemPerfil = divCriaPerfil.querySelector("#mensagemPerfil");

  const PerfilCriar_btn = divCriaPerfil.querySelector("#btnCriar");
  //Botão para criar o perfil depois de colocar as informações.   
  ListaFotos ()
  
  function ListaFotos () { 
     FotosPerfil.forEach((foto,i) =>{
        const divFoto = document.createElement("div");
         divFoto.innerHTML = `<img src='${foto}' id='${i}' class='foto'>`;
         Galeria.append(divFoto);

         const divs = document.querySelectorAll('.foto');

      divs.forEach(div => {
      div.addEventListener('click', () => {
      // Remover a seleção de todas as outras
      divs.forEach(d => d.classList.remove('selecionado'));
       
      // Alternar (toggle) a seleção da clicada
      div.classList.toggle('selecionado');
     // Altere a classe dessa div que foi clicada.

    
      })
    });

    });
 

    PerfilCriar_btn.addEventListener("click", () => {
   const selecionada = document.querySelector('.selecionado');
   //A div estava só com a classe foto mas agora ele recebeu o selecionado e por isso conseguimos identificar


   if(NomePerfil.value==""){
    MensagemPerfil.innerHTML="Insira o seu nome, por favor!"
    NomePerfil.value="";

  }else if(!selecionada){
   //Caso de erro confere para ver se ele está diferenciando selecionada e selecionada.src.
   MensagemPerfil.textContent = "Escolha uma foto para conseguirmos criar seu perfil!";
  }else{
   
     let perfilCriado={
      NomePerfil : NomePerfil.value,
      selecionadaFoto :  selecionada.src,
     }
      //Estou pegando a imagem selecionada e seu endereço de imagem com o src
      userLogado.perfil.push(perfilCriado);

    // Salvar no localStorage
    const todosUsuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const index = todosUsuarios.findIndex(u => u.email === userLogado.email);

    if (index !== -1) {
      todosUsuarios[index] = userLogado;
      localStorage.setItem('usuarios', JSON.stringify(todosUsuarios));
    }

    localStorage.setItem('userLogado', JSON.stringify(userLogado));

    MensagemPerfil.textContent = "Perfil criado com sucesso!";

   }
})
}


 
}
 
  