const LoginEmail = document.querySelector("#LoginEmail");
const LoginSenha = document.querySelector("#LoginSenha");
//Para entrar


const EsqueciSenha = document.querySelector("#EsqueciSenha");
//No esqueceu a senha tu vai colocar Email, mais alguma coisa.
const Entrar = document.querySelector("#Entrar");
const ErroLogin_msg= document.querySelector("#ErroLogin_msg");

const usuariosRegistro = localStorage.getItem('usuarios');
const usuarios = JSON.parse(usuariosRegistro);



Entrar.addEventListener("click", () => {
if(LoginEmail.value=="" || LoginSenha.value==""){
ErroLogin_msg.innerHTML="!Preencha TODOS os campos, por favor!";

}else if(LoginSenha.value.length<8){
  ErroLogin_msg.innerHTML="A senha tem que conter no mínimo 8 dígitos";
}else{

ErroLogin_msg.innerHTML="Entrando... ✅"
}

})