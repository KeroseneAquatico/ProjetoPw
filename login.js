const LoginEmail = document.querySelector("#LoginEmail");
const LoginSenha = document.querySelector("#LoginSenha");
//Para entrar

const LoginDiv = document.querySelector("#LoginDiv");

const IrCadastro = document.querySelector("#IrCadastro");

const Entrar = document.querySelector("#Entrar");
const ErroLogin_msg = document.querySelector("#ErroLogin_msg");

const usuariosRegistro = localStorage.getItem('usuarios');// Puxa o array de usuários
const usuarios = JSON.parse(usuariosRegistro); // aq nós transforma esse array de string ( q precisa pra guardar no JSON) pra objeto



Entrar.addEventListener("click", () => {
  if (LoginEmail.value === "" || LoginSenha.value === "") {// confere se a pessoa inseriu algo
    ErroLogin_msg.innerHTML = "Preencha TODOS os campos, por favor!";
    return;
  }

  if (LoginSenha.value.length < 8) {// confere se a senha tem +8 caracteres
    ErroLogin_msg.innerHTML = "A senha tem que conter no mínimo 8 dígitos";
    return;
  }

  const usuarioValido = usuarios.find(
    (usuario) =>
      usuario.email === LoginEmail.value &&
      usuario.senha === LoginSenha.value
  );// Isso tudo serve pra achar as informaçoes e se elas são validas

  if (usuarioValido) {// se achou ent tem q fazer isso
    const userLogado = JSON.stringify(usuarioValido);
    localStorage.setItem("userLogado", userLogado);// criamos a chave do user logado
    window.location.href = "perfil.html";// manda pra pagina de perfil
    return;
  }

  // ❌ Login falhou
  ErroLogin_msg.innerHTML =
    "❌ Email ou senha incorretos, por favor confira os dados informados!";
  LoginSenha.value = "";
  LoginEmail.value = "";

  const Esqueceu_senha_btn = document.createElement("button");
  Esqueceu_senha_btn.textContent = "Recuperar conta";
  ErroLogin_msg.appendChild(Esqueceu_senha_btn);

  Esqueceu_senha_btn.addEventListener("click", RecuperandoSenha);
});

function RecuperandoSenha() {
  const Div_EsqueciSenha = document.createElement("div");
  Div_EsqueciSenha.innerHTML = `
    <br><span>Email cadastrado:</span>
    <input id="EmailRecupera" type="email" placeholder="Digite seu e-mail">
    <br><span>Nome cadastrado:</span>
    <input id="NomeRecupera" type="text" placeholder="Digite o nome usado no cadastro">
    <br><button id="ProcurandoSenha">Recuperar</button>
  `;
  LoginDiv.appendChild(Div_EsqueciSenha);// coloca na div de login

  document.querySelector("#ProcurandoSenha").addEventListener("click", () => {
    const EmailRecupera = document.querySelector("#EmailRecupera").value.trim();// .trim remove os espaços do inicio e fim do texto pra nn dar merda
    const NomeRecupera = document.querySelector("#NomeRecupera").value.trim();

    const usuarioEncontrado = usuarios.find(
      (usuario) =>
        usuario.email === EmailRecupera &&
        usuario.nome.toLowerCase() === NomeRecupera.toLowerCase()
    );// procura o usuario

    if (!usuarioEncontrado) {
      ErroLogin_msg.innerHTML =
        "❌ Os dados não conferem com nenhum usuário cadastrado!";
      return;
    }// Aq se ele nn existe mostra oq tem em cima

    // Mostrar campo para nova senha
    Div_EsqueciSenha.innerHTML = `
      <br><span>Insira sua nova senha:</span>
      <input id="senhaRecuperada" type="password" placeholder="Nova senha">
      <br><button id="confirmarNovaSenha">Confirmar nova senha</button>
    `;

    document.querySelector("#confirmarNovaSenha").addEventListener("click", () => {
      const novaSenha = document.querySelector("#senhaRecuperada").value;

      if (novaSenha.length < 8) {
        ErroLogin_msg.innerHTML =
          "A nova senha precisa ter no mínimo 8 caracteres!";
        return;
      }

      // Atualiza senha e salva no localStorage
      usuarioEncontrado.senha = novaSenha;
      localStorage.setItem("usuarios", JSON.stringify(usuarios));

      ErroLogin_msg.innerHTML = "✅ Senha atualizada com sucesso!";
      Div_EsqueciSenha.remove();// div some dps de todo o processo
    });
  });
}
IrCadastro.addEventListener("click", () => {
  window.location.href = "cadastro.html"
})