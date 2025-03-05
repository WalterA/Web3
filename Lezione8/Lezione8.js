let a =() => {
    console.log("a");
}
let b =() => {
    let q=new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve("b");console.log("b");
        },3000);});
        return q;
}

let calcola = () => {
    b().then((risultato)=>{
        console.log(risultato);
        a();
        
    }).catch((errore)=>{
        console.log(errore);
    });
}
calcola();

setTimeout() //funzione del browser, serve per eseguire una funzione dopo un certo tempo
setTimeout(funzione(),3000);

let x = new Promise((resolve,reject) =>{} , );
//resolve funzione con esito positivo
// reject funzione di errore

let y= new Promise((resolve,reject) =>{
    let d=10;
    if(d==10){
        setTimeout(()=>{resolve(d);},3000);
       
    }else{
        reject("errore");
    }});
y.then((z)=>{
    console.log(z);
}).catch((s)=>{
    console.log(s);
});
//then() se è andato a buon fine
//catch() se c'è stato un errore