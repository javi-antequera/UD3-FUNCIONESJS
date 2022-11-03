document.write(checkAge(28));
function checkAge(age){
    return age>18?true:confirm("¿Tienes el permiso de tus padres?");
}
function checkAge(age){
    return age>18||confirm("¿Tienes el permiso de tus padres?");
}