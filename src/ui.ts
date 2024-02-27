import "/src/style.css";
import { cartas, tablero } from "./modelo";
import { iniciarPartida, sePuedeVoltearLaCarta, voltearLaCarta, sonPareja, parejaNoEncontrada, parejaEncontrada } from "./motor";

const mapearDivCartas = (indiceCarta: number): void => {
  const dataIndiceId = `div[data-indice-id= "${indiceCarta}"]`;
  const elemento = document.querySelector(dataIndiceId);

  if (elemento) {
    elemento.addEventListener("click", () => {
      if (tablero.estadoPartida !== "PartidaNoIniciada") {
        handleDivCarta(indiceCarta, elemento as HTMLDivElement);
      }
    });
  }
};

const handleDivCarta = (indiceCarta: number, elemento: HTMLDivElement) => {
  //const mensajeError = document.getElementsByClassName('carta');
    if (sePuedeVoltearLaCarta(tablero, indiceCarta)) {
      const srcImg = cartas[indiceCarta].imagen;
      elemento.getElementsByTagName("img")[0].src = srcImg;
      elemento.getElementsByTagName("img")[0].style.backgroundColor = "#bb9bff";
      darleLaVueltaALaCarta(indiceCarta, elemento);
  } else {
    // mensaje de que la carta no se puede voltear;
    alert('La carta no se puede voltear');
    //mensajeError.textContent = 'La carta no se puede voltear'
  }
};

const darleLaVueltaALaCarta = (indiceCarta: number, elemento: HTMLDivElement) => {
  voltearLaCarta(tablero, indiceCarta);
  mostrarImagenAnimal(indiceCarta, elemento);
  mirarSiEsLaSegundaCarta();
};

const mirarSiEsLaSegundaCarta = () => {
  const indiceCartaA = tablero.indiceCartaVolteadaA;
  const indiceCartaB = tablero.indiceCartaVolteadaB;

  const dataIndiceIdA = `div[data-indice-id= "${indiceCartaA}"]`;
  const elementoA: HTMLDivElement | null = document.querySelector(dataIndiceIdA);

  const dataIndiceIdB = `div[data-indice-id= "${indiceCartaB}"]`;
  const elementoB: HTMLDivElement | null = document.querySelector(dataIndiceIdB);


  if (indiceCartaA !== undefined && indiceCartaB !== undefined) {
    if (sonPareja(indiceCartaA, indiceCartaB, tablero)) {
      // si las cartas seleccionadas son pareja. Llamar aquí a sonPareja
      // si son pareja, tendré que hacer una función que será parejaEncontrada
      parejaEncontrada(tablero, indiceCartaA, indiceCartaB);
    } else {
      // y si no son pareja tendré que hacer una funcion, que será parejaNoEncontrada y darle la vuelta a los divs que no son pareja.
      setTimeout(function() {
        parejaNoEncontrada(tablero, indiceCartaA, indiceCartaB);
        if(elementoA && elementoB){
          ponerCartaBocaAbajo(elementoA);
          ponerCartaBocaAbajo(elementoB);
        }  
      }, 1000);
    
    }
  }
};

const mostrarImagenAnimal = (indiceCarta: number, elemento: HTMLDivElement) => {
  const srcImg = cartas[indiceCarta].imagen;
  elemento.getElementsByTagName("img")[0].src = srcImg;
  elemento.getElementsByTagName("img")[0].style.backgroundColor = "#bb9bff";
};

const ponerCartaBocaAbajo = (elemento: HTMLDivElement ) => {
    const srcVacio = elemento.getElementsByTagName("img")[0];
    srcVacio.src = ''
    srcVacio.style.backgroundColor = "#afe2ff";

};

export const generarTablero = (): void => {
  for (let indice = 0; indice < cartas.length; indice++) {
    mapearDivCartas(indice);
  }
};


export const voltearTodo = (): void => {
  for (let indice =0; indice < cartas.length; indice++ ){
    const dataIndiceId = `div[data-indice-id= "${indice}"]`;
    const elemento: HTMLDivElement | null = document.querySelector(dataIndiceId);
    if (elemento){
      ponerCartaBocaAbajo(elemento)
    }
  }
};



const boton = document.getElementById("empezar");
if (boton) {
  boton.addEventListener("click", iniciarPartida);
}
document.addEventListener("DOMContentLoaded", generarTablero);
