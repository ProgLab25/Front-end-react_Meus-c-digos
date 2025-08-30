
let form = document.getElementById("contact-form");
console.log(form);
form.addEventListener("submit", enviarFormulario);
function enviarFormulario(event){

    event.preventDefault();
    let nome = document.getElementById("input-nome").value;
    
    
    alert(nome+ " Seu contato foi enviado com sucesso!");
}