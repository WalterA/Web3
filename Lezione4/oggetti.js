let numeri1 =[1,2,3];

let numeri2 = new Array();
numeri2.push(3);
numeri2.push(4);
numeri2.push(5);

//js ... arrey in hash dinamici
console.log(numeri2[2]);

numeri2[10]=33; //mette vuoti da da 3 a 10 il dieci mette 33
console.log(numeri2.length);
let x =10;
x=x+2;
x+=2;

++x;
console.log(x) //15
x++;
console.log(x); //16

let y=20; //21
let z= ++y; //21

let y1=20; //21
let z1= y++; //20
//== confronta il valolre
// === confronta il valore e il tipo
if (y==z){
    console.log("sono uguali");
}else{
    console.log("sono diversi")
}


