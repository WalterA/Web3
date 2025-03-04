const lampadina = new Lampadina(); 

let Stato = () => {
    let risultato;
    if (lampadina.clickCount >= 10) {
        const testo = document.getElementById("testo");
        risultato = "È rotta";
        document.getElementById("sfondo").style.backgroundColor = "black";
        testo.style.color= "red";
    } else {
        risultato = lampadina.acceso ? "È accesa" : "È spenta";
        testo.style.color = lampadina.acceso ? "black" : "white";
        document.getElementById("sfondo").style.backgroundColor = lampadina.acceso ? "yellow" : "black";
    }
    document.getElementById("testo").innerHTML = risultato;
}


let click=() => {  
    lampadina.cambiaStato();
    Stato();}

document.getElementById("stato").addEventListener("click",Stato);
document.getElementById("cambia").addEventListener("click",click)