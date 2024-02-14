import "/src/style.css";

const crearDivImagen = (rutaImagen : string, elementId: string): void => {
    const divImagen = document.getElementById(elementId);
    if(divImagen !== null && divImagen !== undefined && divImagen instanceof HTMLImageElement){
        divImagen.src = rutaImagen
    }
}

const cambiarCarta = (color :string, idcarta :string): void =>{
    const carta = document.getElementById(idcarta);
    if (carta) {
        carta.style.backgroundColor = color
    }
}

const divElemento1 = document.getElementById("carta1");

divElemento1?.addEventListener("click", function () {
    crearDivImagen("https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png", "imagenCarta1"),
    cambiarCarta ("#bb9bff", "carta1")
});

const divElemento2 = document.getElementById("carta2");

divElemento2?.addEventListener("click", function () {
    crearDivImagen("https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png", "imagenCarta2"),
    cambiarCarta ("#bb9bff", "carta2")
})