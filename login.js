const LoginEmail = document.querySelector("#LoginEmail");
const LoginSenha = document.querySelector("#LoginSenha");
//Para entrar

const LoginDiv = document.querySelector("#LoginDiv");

const IrCadastro = document.querySelector("#IrCadastro");

const EsqueciSenha = document.querySelector("#EsqueciSenha");
//No esqueceu a senha tu vai colocar Email, mais alguma coisa.
const Entrar = document.querySelector("#Entrar");
const ErroLogin_msg= document.querySelector("#ErroLogin_msg");

const usuariosRegistro = localStorage.getItem('usuarios');
const usuarios = JSON.parse(usuariosRegistro);





Entrar.addEventListener("click", () => {
  if (LoginEmail.value === "" || LoginSenha.value === "") {
    ErroLogin_msg.innerHTML = "Preencha TODOS os campos, por favor!";
    return;
  }

  if (LoginSenha.value.length < 8) {
    ErroLogin_msg.innerHTML = "A senha tem que conter no mínimo 8 dígitos";
    return;
  }

  const usuarioValido = usuarios.find(
    (usuario) =>
      usuario.email === LoginEmail.value &&
      usuario.senha === LoginSenha.value
  );

  if (usuarioValido) {
    const userLogado = JSON.stringify(usuarioValido);
    localStorage.setItem("userLogado", userLogado);
    window.location.href = "perfil.html";
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
  LoginDiv.appendChild(Div_EsqueciSenha);

  document.querySelector("#ProcurandoSenha").addEventListener("click", () => {
    const EmailRecupera = document.querySelector("#EmailRecupera").value.trim();
    const NomeRecupera = document.querySelector("#NomeRecupera").value.trim();

    const usuarioEncontrado = usuarios.find(
      (usuario) =>
        usuario.email === EmailRecupera &&
        usuario.nome.toLowerCase() === NomeRecupera.toLowerCase()
    );

    if (!usuarioEncontrado) {
      ErroLogin_msg.innerHTML =
        "❌ Os dados não conferem com nenhum usuário cadastrado!";
      return;
    }

    // Mostrar campo para nova senha
    Div_EsqueciSenha.innerHTML = `
      <br><span>Insira sua nova senha:</span>
      <input id="senhaRecuperada" type="password" placeholder="Nova senha">
      <br><button id="confirmarNovaSenha">Confirmar nova senha</button>
    `;

    document
      .querySelector("#confirmarNovaSenha")
      .addEventListener("click", () => {
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
        Div_EsqueciSenha.remove();
      });
  });
}
IrCadastro.addEventListener("click", () => {
window.location.href="cadastro.html" 
})