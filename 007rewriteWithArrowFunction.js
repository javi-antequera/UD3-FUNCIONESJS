let ask =(question,yes,no)=>{if(confirm(question)){
    yes();
}else{
    no();
}}

ask("Do you agree?",aceptar=()=>alert("You agreed."),cancelar=()=>alert("You canceled the execution."));
