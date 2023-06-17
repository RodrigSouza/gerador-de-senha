let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefhijklmnopqrstuvwxyz!@#&123456789";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

//função para movimentar os dados do slider
slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
   let pass = "";

    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n ));
    }

        containerPassword.classList.remove("hide");
        password.innerHTML = pass;
        novaSenha = pass;
}

function copyPassword(){
    alert("Senha copiada com sucess")
    navigator.clipboard.writeText(novaSenha);
}