
let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numero = Number(prompt("Inserisci un numero:"));


function tabellinafor(numero) {
    let lista2 = [];
    for (let numeri of lista) {
        lista2.push(numeri * numero);
    }
    return lista2;
}

document.getElementById("1").innerHTML=tabellinafor(numero);

let tabellinaWhile = (numero) => {
    let lista2 = [];
    let contattote = 0;
    while(contattote <= (lista.length-1)) {
        lista2.push(lista[contattote]*numero);
        contattote++;
}
return lista2;
}
document.getElementById("2").innerHTML=tabellinaWhile(numero);


let lista1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


let stampafor = (lista) => {
    let container = document.getElementById("3"); 
    container.innerHTML = ""; 

    
    for (let numero of lista) {
        let elemento = document.createElement("h6"); 
        elemento.textContent = numero; 
        container.appendChild(elemento); 
    }
}

stampafor(lista1);

let stampawhile = (lista) => {
    let lista1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let container = document.getElementById("4"); 
    container.innerHTML = ""; // Svuota il contenuto precedente

    let contattore = 0;

    while (contattore <= lista.length - 1) { 
        let elemento = document.createElement("h6");
        elemento.textContent = lista[contattore]; 
        container.appendChild(elemento);

        contattore++; 
    }
}

stampawhile(lista1);

let da5for =()=> {
    for (let i = 5; i < 16; i++) {
        let elemento = document.createElement("h6");
        elemento.textContent = i;
        document.getElementById("5").appendChild(elemento);
    }
}
da5for();
let da5while = () => {
    let contatore = 5; 
    let container = document.getElementById("6"); 
    container.innerHTML = ""; 

    while (contatore <= 15) { 
        let elemento = document.createElement("h6"); 
        elemento.textContent = contatore; 
        container.appendChild(elemento);
        contatore ++; 
    }
};

da5while();

let da2for = () => {
    for (let i=0; i<21; i+=2){
        let elemento = document.createElement("h6");
        elemento.textContent = i;
        document.getElementById("7").appendChild(elemento);
    }

}
da2for();

let do2while = () => {
    let contatore = 2; 
    let container = document.getElementById("8"); 
    container.innerHTML = ""; 
    while (contatore <= 20) { 
        let elemento = document.createElement("h6"); 
        elemento.textContent = contatore; 
        container.appendChild(elemento);
        contatore +=2; 
    }
};
do2while();


let da4for = () => {
    for (let i=0; i<41; i+=4){
        let elemento = document.createElement("h6");
        elemento.textContent = i;
        document.getElementById("9").appendChild(elemento);
    }

}
da4for();

let do4while = () => {
    let contatore = 4; 
    let container = document.getElementById("10"); 
    container.innerHTML = ""; 
    while (contatore <= 40) { 
        let elemento = document.createElement("h6"); 
        elemento.textContent = contatore; 
        container.appendChild(elemento);
        contatore +=4; 
    }   
};
do4while();

let sommaMediafor=() => {
    let somma = 0;
    let media = 0;
    let lista =[1,2,3,4,5];
    for (numeri of lista) {
        somma += numeri;
    }
    media = somma / lista.length;
    return `"La somma è: ${somma} e la media è: ${media}`;
}

document.getElementById("11").innerHTML = sommaMediafor();

let sommaMediawhile = () => {
    let somma = 0;
    let media = 0;
    let lista =[1,2,3,4,5];
    let contatore=0;
    while(contatore < lista.length) {
        somma+=lista[contatore];
        contatore++;
    }
    media = somma / lista.length;
    return `"La somma è: ${somma} e la media è: ${media}`;
}
document.getElementById("12").innerHTML = sommaMediawhile();


let trovaMax = () => {
    let numeri = [12, 45, 7, 89, 23, 56, 91];
    let max = numeri[0]; // Inizializza con il primo elemento

    numeri.forEach(num => {
        if (num > max) {
            max = num; // Aggiorna il massimo se trova un numero più grande
        }
    });

    return `Il numero più grande è: ${max}`;
}

document.getElementById("13").innerHTML = trovaMax();

let contaPariDispari = () => {
    // Array di 10 numeri a piacimento
    let numeri = [12, 45, 7, 89, 24, 56, 91, 32, 18, 77];

    // Inizializzazione dei contatori
    let pari = 0;
    let dispari = 0;

    // Ciclo for per controllare ciascun numero
    for (let i = 0; i < numeri.length; i++) {
        if (numeri[i] % 2 === 0) { // Se il numero è divisibile per 2 è pari
            pari++;
        } else { // Altrimenti è dispari
            dispari++;
        }
    }

    // Risultato formattato
    return `Nell’array ci sono ${pari} numeri pari e ${dispari} numeri dispari.`;
}

// Inserimento del risultato nel DOM
document.getElementById("14").innerHTML = contaPariDispari();







