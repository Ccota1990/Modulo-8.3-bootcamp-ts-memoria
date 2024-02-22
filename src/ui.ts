import "/src/style.css";
import { cartas } from "./modelo"
import { iniciarPartida } from "./motor";


const mapearDivCartas = (indiceCarta: number) : void => {
    const dataIndiceId = `div[data-indice-id= "${indiceCarta}"]`;
    const elemento = document.querySelector(dataIndiceId);

    if (elemento) {
        elemento.addEventListener("click", () =>{
            const srcImg = cartas[indiceCarta].imagen;
            elemento.getElementsByTagName("img")[0].src = srcImg;
            elemento.getElementsByTagName("img")[0].style.backgroundColor = "#bb9bff" ;
    });
    }
};

export const generarTablero = (): void => {
    for (let indice = 0; indice < cartas.length; indice++){
        mapearDivCartas(indice);
    }
};

const boton = document.getElementById('empezar')
if(boton){
    boton.addEventListener("click", iniciarPartida);
}
document.addEventListener("DOMContentLoaded", generarTablero);

