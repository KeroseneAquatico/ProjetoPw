const formID= document.querySelector("#formID");
const CadastroErro_msg = document.querySelector("#CadastroErro_msg");

form.addEventListener("click",async (e) => {
    e.preventDefault();// previne o comportamento padrão do form
const data = new FormData(form);// cria um objeto FormData com os dados do form
fetch('/api/auth/cadastro.php', {
    method: 'POST',
    body: data
})
.then(response => response.json())
.then(data => {
if(data.success){
    CadastroErro_msg.style.color = 'green';// muda a cor da mensagem para verde
    CadastroErro_msg.innerHTML = data.message;// mostra a mensagem de sucesso
    setTimeout(() =>{
      window.location.href = 'login.html';
    }, 1000);
    // manda pra pagina de login
    return;
}else{
    CadastroErro_msg.style.color = 'red';// muda a cor da mensagem para vermelho
    CadastroErro_msg.innerHTML = data.message;// mostra a mensagem de erro
}


})});