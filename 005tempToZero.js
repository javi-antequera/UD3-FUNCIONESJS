let min=prompt("Escribe los minutos");
let seg=prompt("Escribe los segundos");
temporizador(seg,min);
function temporizador(seg,min=0){   
    if(min==0||null){
        let paraseg=setInterval(function() {
                if(seg==0){
                    console.log("SE ACABÓ EL TIEMPO");
                    clearInterval(paraseg);
                }else if(seg==1){
                    console.log("Queda: "+seg+" segundo \n");
                    seg--;
                }else{
                    console.log("Quedan: "+seg+" segundos \n");
                    seg--;
                }

            }, 1000,seg);    
    }else{
        let conminutos=setInterval(function() {
            if(min==0&&seg==0){
                clearInterval(conminutos);
                console.log("SE ACABÓ EL TIEMPO");
            }
            if(seg<0){
                seg=59;
                min--;
            }
            if (seg==0&&min!=0){
                if(min==1){
                    console.log("Queda: "+min+" minuto \n");
                    seg--;
                }else{
                    console.log("Quedan: "+min+" minutos \n");
                    seg--;
                }
            }
            else if(min>0){
                console.log("Quedan: "+min+" minutos y "+seg+" segundos \n");
                seg--;
            }else if(seg!=0){
                if(seg==1){
                    console.log("Queda: "+seg+" segundo \n");
                    seg--;
                }else{
                    console.log("Quedan: "+seg+" segundos \n");
                    seg--;
                }
            }
        }, 1000,min,seg);   
    }
    
}