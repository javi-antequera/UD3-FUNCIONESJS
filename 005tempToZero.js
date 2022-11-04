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
        setInterval(function() {
            if(seg==0){
                clearInterval();
            }
            console.log("Quedan: "+seg+" segundos \n");
            seg--;
        }, 1000,seg);   
    }