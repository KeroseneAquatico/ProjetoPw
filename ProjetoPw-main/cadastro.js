

const formID= document.querySelector("#formID");
const CadastroErro_msg = document.querySelector("#CadastroErro_msg");
const btn = document.querySelector("#CadastrarBtn");

btn.addEventListener("click", async (e) => {
    e.preventDefault();
const formData = new FormData(formID);
const data = await fetch('API/auth/cadastro.php', {
    method: 'POST',
    body: formData
}).then(res => res.json());

    if(data.error === false){
    CadastroErro_msg.style.color = 'green';
    CadastroErro_msg.innerHTML = data.message;
    setTimeout(() =>{
      window.location.href = 'login.html';
    }, 1000);

    return;
}else{
    CadastroErro_msg.style.color = 'red';
    CadastroErro_msg.innerHTML = data.message;
}
    console.log(data);
});