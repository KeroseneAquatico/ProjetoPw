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

const armazenamentoLocal = localStorage.getItem('usuarios');// puxa local storage na chave usuarios

let users=[];
if(armazenamentoLocal){// se tem coisa no local storage o array de users vira oq tinha lá dentro
    users = JSON.parse(armazenamentoLocal);
}

CadastrarBtn.addEventListener("click", () => {
  if( EmailCadastro.value=="" || senhaCadastro.value=="" || senhaCadastro2.value=="" || nomeCadastro.value=="" ){// se a pessoa não preencheu todos os campos é pra preencher
 CadastroErro_msg.innerHTML="Preencha TODOS os campos!";   
    
}else if(senhaCadastro2.value!=senhaCadastro.value || senhaCadastro.value.length<8){// confere se as senhas batem ou tem menos de 8 carácteres

    CadastroErro_msg.innerHTML="As senhas não conferem ou não tem 8 caractéres, por favor as insira novamente a senha";
    senhaCadastro2.value="";
    senhaCadastro.value ="";
 }else{
const emailExistente = users.some(user => user.email === EmailCadastro.value) // se já tem o email cadastrado
if(emailExistente){
    CadastroErro_msg.innerHTML = "Este e-mail já está cadastrado. Use outro e-mail ou faça login.";
    return;
}

   let PlanoSelecionado;
if (PlanoBasico.checked) {
    //checked puxa se é true ou false do PlanoBasico.
    PlanoSelecionado = PlanoBasico.value;
} else if (PlanoPadrao.checked) {
    PlanoSelecionado = PlanoPadrao.value;
} else if (PlanoPremium.checked) {
    PlanoSelecionado = PlanoPremium.value;
}




// cria o objeto do usuario
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
// limpa os inputs
     nomeCadastro.value="";
     EmailCadastro.value="";
     senhaCadastro.value="";
     senhaCadastro2.value="";

    users.push(user);//bota no array
    localStorage.setItem('usuarios', JSON.stringify(users));//bota no local storage
    window.location.href="login.html";// manda pra pagina de login
    }    
})