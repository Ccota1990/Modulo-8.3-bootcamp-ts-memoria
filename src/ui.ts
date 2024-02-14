import "/src/style.css";
import { cartas } from "./datos"
import { InfoCarta } from "./modelo";

//funcion para recuperar src
const cambiarSrc = (rutaImagen : string, elementId: string): void => {
    const divImagen = document.getElementById(elementId);
    if(divImagen !== null && divImagen !== undefined && divImagen instanceof HTMLImageElement){
        divImagen.src = rutaImagen
    }
}

//funcion para cambiar el color de fondo al voltear
const cambiarCarta = (color :string, idcarta :string): void =>{
    const carta = document.getElementById(idcarta);
    if (carta) {
        carta.style.backgroundColor = color   
    }
}

const crearContenedor = (nombreClase :string, contenedor: HTMLDivElement): HTMLDivElement =>{
    const div = document.createElement ("div");
    div.classList.add (nombreClase);
    div.id = nombreClase;
    contenedor.appendChild(div);
    return div; 
};

//funcion asignar eventlistener
const crearDiv = (carta: InfoCarta ,indice: number) :void =>{
    const divElemento = document.getElementById("container-cartas");
    if (divElemento && divElemento instanceof HTMLDivElement) {

    const divCarta = crearContenedor ("carta", divElemento);
    divCarta.innerHTML = `<img src="" alt="" />`;
}
} 

//crear funcion foreach para hacerlo con cada carta 
const pintarCarta = (cartas: InfoCarta[]): void =>{
    cartas.forEach((carta, i) =>{
        crearDiv(carta, i)
        // cambiarSrc(carta ,indiceId )
    })
}


const divElemento1 = document.getElementById("carta1");

divElemento1?.addEventListener("click", function () {
    cambiarSrc("https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png", "imagenCarta1"),
    cambiarCarta ("#bb9bff", "carta1")
});

const divElemento2 = document.getElementById("carta2");

divElemento2?.addEventListener("click", function () {
    cambiarSrc("https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png", "imagenCarta2"),
    cambiarCarta ("#bb9bff", "carta2")
});
