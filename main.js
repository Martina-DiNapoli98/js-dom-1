 
        const buttonEl = document.querySelector(".btn")
        buttonEl.addEventListener("click", function (){

           const elemento = document.querySelector(".lampOff")
           
            if (elemento.src.includes("./img/white_lamp.png") > -1 ){
                elemento.src = "./img/yellow_lamp.png";
                buttonEl.innerText = "Spegni"
            } else if (elemento.src.includes("./img/yellow_lamp.png") > -1){
                elemento.src = "./img/white_lamp.png";
                buttonEl.innerText = "Accendi"
            }
            
        })

          

    
       