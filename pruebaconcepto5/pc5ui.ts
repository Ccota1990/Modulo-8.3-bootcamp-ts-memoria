import "./pc5style.css";
import { cartas } from "./pc5datos"


const mapearDivCartas = (indiceCarta: number) : void => {
    const dataIndiceId = `div[data-indice-id= "${indiceCarta}"]`;
    const elemento = document.querySelector(dataIndiceId);

    if (elemento) {
        const srcImg = cartas[indiceCarta].imagen;
        elemento.addEventListener("click", () =>{
            elemento.getElementsByTagName("img")[0].src = srcImg;
            elemento.getElementsByTagName("img")[0].style.backgroundColor = "#bb9bff" ;
    });
    }
};

const generarTablero = (): void => {
    for (let indice = 0; indice < cartas.length; indice++){
        mapearDivCartas(indice);
    }
};

const iniciarPartida = (): void => {
    generarTablero();
};

document.addEventListener("DOMContentLoaded", iniciarPartida);