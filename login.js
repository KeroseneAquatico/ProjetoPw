
const formLogin = document.querySelector('#formLogin');


const LoginDiv = document.querySelector("#LoginDiv");

const IrCadastro = document.querySelector("#IrCadastro");

const Entrar = document.querySelector("#Entrar");
const ErroLogin_msg = document.querySelector("#ErroLogin_msg");

const email = document.querySelector("#LoginEmail");
const password = document.querySelector("#LoginSenha");

Entrar.addEventListener("click", async (e) => {
  
  e.preventDefault();
  const formData = new FormData(formLogin);

  const data = await fetch('API/auth/login.php', {
    method: 'POST',
    body: formData
  }).then(res => res.json());

  if(!data.error){
    const msgSuccess = document.createElement('span');
    msgSuccess.innerHTML = `${data.message}`;
    msgSuccess.style.color = 'green';
    LoginDiv.appendChild(msgSuccess);
    setTimeout(() =>{
      window.location.href = 'perfil.html';
    }, 1000);
    return;
  }else{
    ErroLogin_msg.innerHTML = `${data.message}`;
    ErroLogin_msg.style.color = 'red';
    LoginDiv.appendChild(ErroLogin_msg)
    email.value = '';
    password.value = '';
    const Esqueceu_senha_btn = document.createElement("button");
    Esqueceu_senha_btn.textContent = "Recuperar conta";
    LoginDiv.appendChild(Esqueceu_senha_btn);
    Esqueceu_senha_btn.addEventListener("click", RecuperandoSenha);
  }

  
  
});

function RecuperandoSenha() {
  const Div_EsqueciSenha = document.createElement("div");
  Div_EsqueciSenha.innerHTML = `
    <form id="formRecuperar">
    <br><span>Email cadastrado:</span>
    <input id="EmailRecupera" type="email" name="emailRecupera" placeholder="Digite seu e-mail">
    <br><span>Nome cadastrado:</span>
    <input id="NomeRecupera" type="text" name="nomeRecupera" placeholder="Digite o nome usado no cadastro">
    <br><button id="ProcurandoSenha">Recuperar</button>
   </form>
    `;
  LoginDiv.appendChild(Div_EsqueciSenha);

  document.querySelector("#ProcurandoSenha").addEventListener("click", async (e) => {
  
    
    const form = document.querySelector("#formRecuperar");
    const formDataRecuperacao = new FormData(form);

  const dataEsqueceu = await fetch('API/auth/recuperar.php', {
    method: 'POST',
    body: formDataRecuperacao
  }).then(res => res.json());
  

  if(dataEsqueceu.error === false){
    Div_EsqueciSenha.innerHTML = `
      <form id="formNovaSenha"
      <br><span>Insira sua nova senha:</span>
      <input id="senhaRecuperada" type="password" name="newPassword" placeholder="Nova senha">
      <br><button id="confirmarNovaSenha">Confirmar nova senha</button>
      </form>    
      `;

    document.querySelector("#confirmarNovaSenha").addEventListener("click", async (e) => {
      e.preventDefault();

      const formDataNew = new FormData(document.querySelector("#formNovaSenha"));
      const dataNovaSenha = await fetch('API/auth/redefinirSenha.php', {
        method: 'POST',
        body: formDataNew
      }).then(res => res.json());
      
      if(dataNovaSenha.error === false){
      const msgSuccess2 = document.createElement('span');
      msgSuccess2.innerHTML = dataNovaSenha.message;
      msgSuccess2.style.color = 'green';
      LoginDiv.appendChild(msgSuccess2);  
      if(ErroLogin_msg.innerHTML !== ''){
        ErroLogin_msg.innerHTML = '';
      }
    }else{
      ErroLogin_msg.innerHTML = dataNovaSenha.message;
      ErroLogin_msg.style.color = 'red';
      return;
    }
      Div_EsqueciSenha.remove();     
    });
  }
  else{
    ErroLogin_msg.innerHTML = `${dataEsqueceu.message}`;
    ErroLogin_msg.style.color = 'red';
  }
});
}
IrCadastro.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "cadastro.html"
})