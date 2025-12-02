const perfilDiv = document.querySelector("#perfilDiv");
const logout = document.querySelector("#logout");
const user = await fetch('api/auth/usuarioLogado.php',{
  method:'GET'
}).then(res => res.json());
let array = await fetch('api/cineon/listarPerfis.php',{
  method:'GET'
}).then(res => res.json());

 logout.addEventListener("click", ()=>{
     fetch('api/cineon/logout.php',{
       method:'GET'})
       window.location.href='login.html'
     }) 
    
    
   async function MostrarPerfis() {
    perfilDiv.innerHTML = "";
    array = await fetch('api/cineon/listarPerfis.php', {
       method:'GET'
    }).then(res => res.json());// pega os perfis do user logado

    // --- Renderiza os perfis ---
    array.perfis.forEach(perfil => {
        const div = document.createElement("div");
        div.classList.add("perfil-card");
        div.innerHTML = `
           <img src='assets/img1.jpg' id='Redirect'><br>
           <h1>${perfil.nome}</h1>
           <button class='btn-deletar'>Deletar Perfil</button>
        `;
        
        const Redirect = div.querySelector("#Redirect");
        Redirect.addEventListener("click", (e) => {
            e.preventDefault();
            fetch('api/cineon/perfil.php', { method: 'GET' });
            window.location.href = "paginicial.html";
        });

        const btnDeletar = div.querySelector(".btn-deletar");
        btnDeletar.addEventListener("click", async () => {
            const confirma = confirm(`Tem certeza que deseja deletar o perfil ${perfil.nome}?`);
            
            if(array.perfis.length <= 1){
                alert("É necessário ter ao menos um perfil.");
                return;
            }
            if (confirma) {
                await fetch(`api/cineon/perfilExcluir.php?Perfilid=${perfil.id}`, { method: 'DELETE' });
                MostrarPerfis(); // Atualiza a lista de perfis após a deleção
            }
        });

        perfilDiv.append(div);
    });

    // --- Botão de criar perfil fora do loop ---
    if(user.planos_max > array.perfis.length){
        const botaoCriar = document.createElement("button");
        botaoCriar.innerHTML = `Criar Perfil`;
        botaoCriar.addEventListener("click", () => { CriarPerfil(); });
        perfilDiv.append(botaoCriar);
    }
}

   

   MostrarPerfis();// chama pra aparecer tudo na tela de inicio
   
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
  

   
   const MensagemPerfil = divCriaPerfil.querySelector("#mensagemPerfil");
   const PerfilCriar_btn = divCriaPerfil.querySelector("#btnCriar");
   const btnCancelar = divCriaPerfil.querySelector("#btnCancelar");
  
   //Consigo chamar na hora de editar pefil!
   PerfilCriar_btn.addEventListener("click", ApiCall);// isso cria o perfil mesmo
   btnCancelar.addEventListener("click", () => {
     MostrarPerfil();// se ela cancelar volta pra lista normal
     return;
   })
  async function ApiCall (e){
    e.preventDefault();// achamos qual foto a pessoa escolheu
    
       const formCriarPerfil = document.querySelector("#formCriarPerfil");
       const formDataCriar = new FormData(formCriarPerfil);
       const data = await fetch('API/cineon/criarPerfil.php', {
         method: 'POST',
         body: formDataCriar
       }).then(res => res.json());
       setTimeout(() => { 
       MensagemPerfil.innerHTML = data.message;
       }, 1000);
       MostrarPerfis();//mostra a lista de todos os perfils dnv
     }
  }