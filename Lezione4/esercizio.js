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
let sommaU=()=> {
    var a = Number(prompt("Inserisci il primo numero"));
    var b = Number(prompt("Inserisci il secondo numero")); 
    let x = a+b;
    return  x;
    
}

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