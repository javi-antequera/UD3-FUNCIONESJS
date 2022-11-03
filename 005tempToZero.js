let min=prompt("Escribe los minutos");
let seg=prompt("Escribe los segundos");
temporizador(seg,min);
//const timer = ms => new Promise(res => setTimeout(res, ms));
function temporizador(seg,min=0){   
    // min = (typeof min !== 'undefined') ?  min : 0;
    if(min==0){
        //document.write(seg+" segundos");
        consegundos(seg);
    }else{
        document.write(min+" minutos y "+seg+" segundos");
    }
    
}


function consegundos(seg){
    for(let i=seg;i>=0;i--){
        setTimeout(function() {
            console.log(i+"\n");
        }, 1000 * i);
        //task(i);
    }

    }
    function task(i) {
        setTimeout(function() {
            console.log(i+"\n");
        }, 1000 * i);
      }