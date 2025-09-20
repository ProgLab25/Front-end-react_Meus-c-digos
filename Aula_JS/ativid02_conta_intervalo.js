let numero = 7;
let contDivisores = 0;
let divisor = 2 ;
while(numero!=1){
    if(numero%divisor!= 0){
        divisor++;
        console.log("Divisor encontrado:" + divisor);
    }else{
        console.log("Divisor encontrado" + divisor);
        numero=numero/divisor;
        contDivisores++;
    }
}
if(contDivisores<2 ){
    console.log("O número é primo");
}else{
    console.log("O número não é primo");
}


//let min = 1, max = 15;
//let i = min, contMultiplos3 = 0;
//while(i<=max){
//    if(i%3==0){
 //     console.log(i + "é múltiplo de 3");
 //    contMultiplos3++;
   // }
   // i++;
//}
//console.log("Existem" + contMultiplos3 + " números múltiplos de 3 entre " + min + " e " + max);