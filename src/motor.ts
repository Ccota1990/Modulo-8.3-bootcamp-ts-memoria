import { Carta, cartas, tablero, Tablero } from "./modelo";
import { generarTablero} from "./ui"

export const barajarCartas = (cartas: Carta []): Carta[] =>{
    for (let i = cartas.length-1; i > 0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [cartas[i],cartas[j]] = [cartas[j], cartas[i]]
    }
    return cartas; 
}


//Una carta se puede voltear si no está encontrada y no está ya volteada, o no hay dos cartas ya volteadas
const sePuedeVoltearLaCarta = (tablero: Tablero, indice: number ): boolean => {
     if (tablero.cartas[indice].estaVuelta === true || tablero.cartas[indice].encontrada === true || tablero.indiceCartaVolteadaB !== undefined){
        return false
     } 
    return true
};

const voltearLaCarta = (tablero: Tablero, indice: number) : void => {
   if (sePuedeVoltearLaCarta(tablero, indice) === true ) {
        tablero.cartas[indice].estaVuelta = true
   }
};

//Dos cartas son pareja si en el array de tablero de cada una tienen el mismo id
export const sonPareja = (indiceA: number, indiceB: number, tablero: Tablero): boolean => {
    if (tablero.cartas[indiceA].idFoto === tablero.cartas[indiceB].idFoto ){
        voltearLaCarta(tablero, indiceA)
        voltearLaCarta(tablero, indiceB)
        return true
    }
    return false
}

/*
//Aquí asumimos ya que son pareja, lo que hacemos es marcarlas como encontradas y comprobar si la partida esta completa.
const parejaNoEncontrada = (tablero: Tablero, indiceA :number, indiceB : number) : void => {
    if (tablero.cartas[indiceA].idFoto !== tablero.cartas[indiceB].idFoto ){
        voltearLaCarta(tablero, indiceA)
        voltearLaCarta(tablero, indiceB)
    }
    
}

//Esto lo podemos comprobar o bien utilizando every, o bien utilizando un contador (cartasEncontradas)
export const esPartidaCompleta = (tablero: Tablero) : boolean => {
    return true
  }
*/
export const iniciarPartida = (): void => {
    barajarCartas(cartas);
    generarTablero();
    sonPareja(1, 1, tablero)
};

