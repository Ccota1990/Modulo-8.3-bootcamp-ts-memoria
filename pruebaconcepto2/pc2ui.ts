import "/src/style.css";

const crearDivImagen = (rutaImagen : string, elementId : string): void => {
    const divImagen = document.getElementById(elementId);
    if(divImagen !== null && divImagen !== undefined && divImagen instanceof HTMLImageElement){
        divImagen.src = rutaImagen
    }
}

const cambiarCarta = (color :string): void =>{
    const carta = document.getElementById("carta");
    if (carta) {
        carta.style.backgroundColor = color
    }
}

const divElemento = document.getElementById("carta");

divElemento?.addEventListener("click", function () {
    crearDivImagen("https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png", "imagenCarta"),
    cambiarCarta ("#bb9bff")
})