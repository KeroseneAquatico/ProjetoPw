const nomeCadastro=document.querySelector("#nomeCadastro");
const EmailCadastro=document.querySelector("#emailCadastro");
const senhaCadastro=document.querySelector("#senhaCadastro");
const senhaCadastro2=document.querySelector("#senhaCadastro2");

//Inputs de option
const PlanoBasico=document.querySelector("#planoBasico");
const PlanoPadrao=document.querySelector("#planoPadrao");
const PlanoPremium=document.querySelector("#planoPremium");

const CadastrarBtn=document.querySelector("#CadastrarBtn");
const CadastroErro_msg=document.querySelector("#CadastroErro_msg");

const armazenamentoLocal = localStorage.getItem('Users');

let users=[];
if(armazenamentoLocal){
    users = JSON.parse(armazenamentoLocal);
}

CadastrarBtn.addEventListener("click", () => {
  if( EmailCadastro.value=="" || senhaCadastro.value=="" || senhaCadastro2.value=="" || nomeCadastro.value=="" ){
 CadastroErro_msg.innerHTML="Preencha TODOS os campos!";   
    
}else if(senhaCadastro2.value!=senhaCadastro.value){

    CadastroErro_msg.innerHTML="As senhas não conferem, por favor as insira novamente a senha";
    senhaCadastro2.value="";
    senhaCadastro.value ="";
 }else{
   let PlanoSelecionado;
if (PlanoBasico.checked) {
    //checked puxa se é true ou false do PlanoBasico.
    PlanoSelecionado = PlanoBasico.value;
} else if (PlanoPadrao.checked) {
    PlanoSelecionado = PlanoPadrao.value;
} else if (PlanoPremium.checked) {
    PlanoSelecionado = PlanoPremium.value;
}

        //Planobasico.value==True.
        let user={
            perfil:[{
                nomePerfil: nomeCadastro.value,
                imagemPerfil: "https://i.pinimg.com/736x/a8/da/22/a8da222be70a71e7858bf752065d5cc3.jpg",
                assistidoRecente:[],
                assistirMaisTarde:[],
            }],
            email: EmailCadastro.value,
            senha: senhaCadastro.value,
            planoUser:PlanoSelecionado,
            nome: nomeCadastro.value,
    }

     nomeCadastro.value="";
     EmailCadastro.value="";
     senhaCadastro.value="";
     senhaCadastro2.value="";

    users.push(user);
    localStorage.setItem('Users', JSON.stringify(users));
    window.location.href="login.html";
    }    
})