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
if(LoginEmail.value=="" || LoginSenha.value==""){
ErroLogin_msg.innerHTML="Preencha TODOS os campos, por favor!";

}else if(LoginSenha.value.length<8){
  ErroLogin_msg.innerHTML="A senha tem que conter no mínimo 8 dígitos";
}else if(LoginEmail.value=="" !== LoginSenha.value==""){

ErroLogin_msg.innerHTML="❌Email ou senha incorretos, por favor confira os dados informados!";
let Esqueceu_senha_btn= document.createElement("button");
Esqueceu_senha_btn.innerHTML="Recuperar conta";
LoginSenha.value="";
 LoginEmail.value=""; 

Esqueceu_senha_btn.addEventListener("click", RecuperandoSenha);
}
function RecuperandoSenha(){
let Div_EsqueciSenha= document.createElement("div");
Div_EsqueciSenha.innerHTML=`
<span>Email:</span>
 <input id="EmailRecupera" type="email" placeholder=" Insira seu Email para recuperação">
  <span>Cor de recuperação:</span>
  <input id="NomeRecupera" type="text"  placeholder="Insira o seu nome neste campo">
   <button id="ProcurandoSenha">Recuperar</button>
`;
LoginDiv.append(Div_EsqueciSenha);

 ProcurandoSenha.addEventListener("click", () => {

let EmailRecupera = document.querySelector("#EmailRecupera");
let NomeRecupera = document.querySelector("#NomeRecupera");


let encontrado = false;
  for (let i in usuarios) {//Ele vê se as informaÇões de recuperação batem
    if (
      usuarios[i].nomePerfil === EmailRecupera.value &&
      usuarios[i]. email === NomeRecupera.value
    ) {
      encontrado = true;
      // Mostra campo para inserir nova senha
       Div_EsqueciSenha.innerHTML=`<span>Insira sua nova senha por favor!</span>
        <input id="senhaRecuperada" type="text" placeholder="Nova senha aqui:">
        <button id="confirmarNovaSenha">Confirmar</button>`;   
        
}else{
  ErroLogin_msg.innerHTML="Os dados não conferem com nenhum usuário cadastrado!";  
}
const Confirmar_Senha_btn = document.querySelector("#confirmarNovaSenha");

 Confirmar_Senha_btn.addEventListener("click", ()=> {
const Confirmar_Senha_btn = document.querySelector("#confirmarNovaSenha");
let SenhaRecuperada= document.querySelector("#senhaRecuperada"); 
   if(SenhaRecuperada.value.length >= 8) {
    usuarios[i].senha= SenhaRecuperada.value;
    ErroLogin_msg.innerHTML="Senha atualizada com sucesso!";  
    Div_EsqueciSenha.remove();
   }else{
     ErroLogin_msg.innerHTML="A senha tem que ter 8 caracteres!";  
     
   }
 });

 
 }

 });
    usuarios.forEach(usuario => {
        if(usuario.email == LoginEmail.value && usuario.senha == LoginSenha.value){
            const userLogado= JSON.stringify(usuario);
            localStorage.setItem('userLogado',userLogado);
            window.location.href="perfil.html";
        }
    });
    ErroLogin_msg.innerHTML="Entrando... ✅";
    LoginSenha.value="";
    LoginEmail.value="";
}
});
IrCadastro.addEventListener("click", () => {
window.location.href="cadastro.html" 
})