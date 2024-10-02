window.onload = function (){
    let canvas = document.getElementById("theLostCanvas");

    if(canvas && 
        canvas.getContex){
        let ctx = canvas. getContex("2d");
    
    if(ctx){
        let centroX = canvas.width /2;
        let centroY = canvas.heigth /2;

        let radioExterno = 95;
        let radioInterno = 50;
        let radioMedio = radioInterno * 1.6

        let numeroPuntos = 40;

        ctx.beginPath();
        ctx.lineloin = "bevel";

        for (
            let i = 0;
            i < numeroPuntos;
            i ++

        ){
            if(
                i % 2 == 0

            ){
                radio = radioExterno;
                
        }else{
            radio = radioInterno; 
        }
        let angulo = Math.PI * 2 /numeroPuntos * (i+1);

        let x = (radio * Math.sin(angulo)) + centroX;
        let y = (radio * Math.cos(angulo)) + centroY;

        if(i==0) {
            ctx.moveTo(x,y);
        } else {
            ctx.lineTo(x,y);
        }

        }
    
        }

        ctx.closePath();
        ctx.lineWidth = 5 ;
        ctx.trokeStyle = "orange";
        ctx.fillStyle = "red";
        ctx.stroke();


    }

    }


}