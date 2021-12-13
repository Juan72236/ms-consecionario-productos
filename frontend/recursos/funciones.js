let colores = ["blue", "white", "gray", "red", "purple", "yellow", "black", "orange", "green","#cfcfcf"]

function CambiarFondo(){
    let indice = parseInt(Math.random() * 10) - 1;
    let color = colores[indice];
    document.querySelector("body").style.background = color;
    let mensaje = document.querySelector("#txtMensaje").value;
    document.querySelector("#miDivision").innerHTML = mensaje; 
}