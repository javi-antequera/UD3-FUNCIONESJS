document.write(checkAge(3));
function checkAge(age){
    if(age>18){
        return true;
    }else{
        return confirm("¿Tus padres te permitieron?");
    }
}
//El Else no es requerido
//En este caso funciona de la misma manera con o sin else. No hay diferencia