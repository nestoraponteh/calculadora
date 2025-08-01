const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

function simularClic(boton) {
    boton.click();
    buttons
}


buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        if(btn.id === "Enter"){
            display.value = eval(display.value)
        } else if( btn.id === "Backspace"){
            display.value = "";
        } else if (btn.id === "de"){
            display.value = display.value.slice(0, -1)
        } else {
            display.value += btn.id
        }
    })

});

document.addEventListener("keydown", function(event) {
    const tecla = event.key
    buttons

    for(const ides of buttons){
       if (tecla === ides.id){
            const boton = document.getElementById(ides.id)
            simularClic(boton)
           }
        }

});

  
    




    
   