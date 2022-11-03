"use strict";
let cadena="una cadena cani es como esta";
document.write(transformToCani(cadena));

function transformToCani(cadena){
    let array = cadena.split("");
    let controlador=true;
    for(let i=0;i<array.length;i++){
        if(array[i]=="c"){
            array[i]="k";   
        }
        if(controlador==true){
                array[i]= array[i].toUpperCase();
                controlador=false;
            }else {
                array[i]= array[i].toLowerCase();
                controlador=true;
        }
    }
    //Como no se especifica el tema de las H, si la frase acaba en minúscula pondrá las H en mayúscula y viceversa
    if(controlador==true){
        array.push("HHH");
    }else{
        array.push("hhh");
    }

    return array.join("");
 }