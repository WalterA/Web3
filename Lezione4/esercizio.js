/*Scrivere un programma che dichiara e valorizza
5 numeri a proprio piacimento e restituisca in
output la somma e la media.*/
let num1 = 10;
let num2 = 20;
let num3 = 30;
let num4 = 40;
let num5 = 78;
let lista = [num1, num2, num3, num4, num5];
/*
let somma = () => {
    somma1 = num1 + num2 + num3 + num4 + num5;
    return somma;}
let lista1 = () => {
    let somma = lista.forEach(a => {num1 += num2;});
    
}*/
let lista2 = () => {
let somma = 0;

for (let numero of lista) {
    somma += numero;
}
    media = somma/lista.length
    let x ="La somma è: "+somma+" La media è: "+media;
    return x;
}

let annoCorrente = new Date().getFullYear();
let mioAnno = 1990;

let differenzaAnno = () => {
    let cento = 100;
    let etaAttuale =  annoCorrente - mioAnno;
    let anniNeccessario =  cento - etaAttuale ;
    let x = "La mia eta: "+ etaAttuale + " L'età per arrivare a 100: " + anniNeccessario;
    return x;
}
function convertiSecondi() {
    let secondiTotali =12560;
    // Calcolo delle ore, minuti e secondi
    const ore = Math.floor(secondiTotali / 3600);
    const resto = secondiTotali % 3600;
    const minuti = Math.floor(resto / 60);
    const secondi = resto % 60;

    // Output del risultato
    return (`${ore} ore, ${minuti} minuti e ${secondi} secondi`);
}
document.getElementById("minuti").innerHTML = convertiSecondi();

let sommaU=()=> {
    var a = Number(window.prompt("Inserisci il primo numero"));
    var b = Number(window.prompt("Inserisci il secondo numero")); 
    let x = a+b;
    return  x;
    
}


// Esempio di utilizzo


let finale=()=> {
    let a = 1, b = 1;
    let c = ++a; // ?
    let d = b++; // ?
    let x= a+b+c+d;
    return x;
}
let risultato=()=> {
    let a = 2;
    let x = 1 + (a *= 2);
    let y = "La a : "+ a + " La x: "+x;
    return y;
}
document.getElementById("media").innerHTML=lista2();
console.log(lista2());
console.log(differenzaAnno());
document.getElementById("anno").innerHTML=differenzaAnno();
//console.log(sommaU());
document.getElementById("sommaU").innerHTML=sommaU();
console.log(finale());
document.getElementById("finale").innerHTML=finale();
console.log(risultato());
document.getElementById("risultato").innerHTML=risultato();
let box =document.createElement("h4");
box.setAttribute("id","risultato1");
document.body.appendChild(box);
document.getElementById("risultato1").innerHTML= risultato();