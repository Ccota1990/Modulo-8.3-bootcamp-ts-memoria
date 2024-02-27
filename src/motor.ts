import { Carta, cartas, tablero, Tablero } from "./modelo";
import { voltearTodo } from "./ui";

export const barajarCartas = (cartas: Carta []): Carta[] =>{
    for (let i = cartas.length-1; i > 0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [cartas[i],cartas[j]] = [cartas[j], cartas[i]]
    }
    return cartas; 
}


//Una carta se puede voltear si no está encontrada y no está ya volteada, o no hay dos cartas ya volteadas
export const sePuedeVoltearLaCarta = (tablero: Tablero, indice: number ): boolean => {
     if (tablero.cartas[indice].estaVuelta === true || tablero.cartas[indice].encontrada === true || tablero.estadoPartida === "DosCartasLevantadas" ){
        return false
     } 
    return true
};


export const voltearLaCarta = (tablero: Tablero, indice: number) : void => {
   if (sePuedeVoltearLaCarta(tablero, indice) === true ) {
        let carta = tablero.cartas[indice]
        carta.estaVuelta = true
        if(tablero.indiceCartaVolteadaA === undefined){
            tablero.indiceCartaVolteadaA = indice
            tablero.estadoPartida = "UnaCartaLevantada"
        }
        else{
            tablero.indiceCartaVolteadaB = indice
            tablero.estadoPartida = "DosCartasLevantadas"
        }
   }
};

//Dos cartas son pareja si en el array de tablero de cada una tienen el mismo id
export const sonPareja = (indiceA: number, indiceB: number, tablero: Tablero): boolean => {
    return tablero.cartas[indiceA].idFoto === tablero.cartas[indiceB].idFoto     
}


//Aquí asumimos ya que son pareja, lo que hacemos es marcarlas como encontradas y comprobar si la partida esta completa.
export const parejaEncontrada = (tablero: Tablero, indiceA: number, indiceB: number) : void => {
    tablero.cartas[indiceA].encontrada = true;
    tablero.cartas[indiceA].estaVuelta = true;
    tablero.cartas[indiceB].encontrada = true;
    tablero.cartas[indiceB].estaVuelta = true;
    tablero.indiceCartaVolteadaA = undefined;
    tablero.indiceCartaVolteadaB = undefined;
    if (esPartidaCompleta(tablero)){
        tablero.estadoPartida = "PartidaCompleta"
   }else {
        tablero.estadoPartida = "CeroCartasLevantadas"
   }
};

//Aquí asumimos ya que son pareja, lo que hacemos es marcarlas como encontradas y comprobar si la partida esta completa.
export const parejaNoEncontrada = (tablero: Tablero, indiceA :number, indiceB : number) : void => {
    tablero.cartas[indiceA].encontrada = false;
    tablero.cartas[indiceA].estaVuelta = false;
    tablero.cartas[indiceB].encontrada = false;
    tablero.cartas[indiceB].estaVuelta = false;
    tablero.indiceCartaVolteadaA = undefined;
    tablero.indiceCartaVolteadaB = undefined;
    tablero.estadoPartida = "CeroCartasLevantadas"
}

const resetarCartas = (tablero: Tablero): void =>{
    tablero.cartas.forEach((carta) => {
        carta.encontrada = false;
        carta.estaVuelta = false;
    })
    tablero.indiceCartaVolteadaA = undefined;
    tablero.indiceCartaVolteadaB = undefined;
    tablero.estadoPartida = "CeroCartasLevantadas";
}

//Esto lo podemos comprobar o bien utilizando every, si todas las cartas estan encontradas
export const esPartidaCompleta = (tablero: Tablero) : boolean => {
   return tablero.cartas.every(carta => carta.encontrada === true)
}

export const iniciarPartida = (): void => {
    barajarCartas(cartas);
    voltearTodo();
    resetarCartas(tablero);    
}
