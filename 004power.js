let x=prompt("Escribe el número");
let n=prompt("Numero de veces a elevar");
document.write(pow(x,n));
function pow(x,n){
     if(typeof x,n=="number"&&x,n>0){
        let potencia;
        potencia=Math.pow(x,n);
        return potencia;
     }else{
         return("Debes escribir un número positivo");
     }

}