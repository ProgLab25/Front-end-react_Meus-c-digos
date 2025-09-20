let numero = 8;
for(let i=1;i<=10;i++){
let resultado = numero*i;     
console.log(numero+ " x "+i+"="+resultado);        
}            

let botao = document.getElementById("bth-calcular");
botao.addEventListener("click", calcularTabuada);
function calcularTabuada(){
    let input = document.getElementById("numero").value;
    let divResultado = document.getElementById("resultado");
    let numero = parseInt(input);
    //calculo da Tabuada
    let resultado = "";
    for (let i=1;i<=10;i++){
        resultado = numero+" x "+i+"="+(numero*i)+"\n \n";
        console.log(resultado)
        divResultado.innerText += resultado;
    }
}
