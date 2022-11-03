let a=prompt("Introduce el valor de a");
let b=prompt("Introduce el valor de b");
document.write(min(a,b));
function min(a,b){
    if(a>b){
        return b;
    }else{
        return a;
    }
}