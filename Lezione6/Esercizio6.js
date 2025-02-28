let uguaglianza = () => {
    let esito = false;
    let n1=prompt("Inserisci primo")
    let n2=prompt("Inserisci secondo")
    if (n1 === n2) {
        esito= true;
    }
    return esito;
};
document.getElementById("1").innerHTML = uguaglianza();
let n ;

let range = (n) => {
    let esito=false;
    if (n >= 1 && n <= 7) {
        esito=true;
    }
    return esito;
};
let giorno = (n) => {
    let esito= 'Peccato, non posso indovinare il giorno.';
    if (range(n)) {
        switch (n) {
            case 1: esito= "Lunedì";
            case 2: esito= "Martedi";
            case 3: esito= "Mercoledi";
            case 4: esito= "Giovedi";
            case 5: esito= "Venerdi";
            case 6: esito= "Sabato";
            case 7: esito= "Domenica";
        }
    }return esito;
};
document.getElementById("2").innerHTML = giorno(1);


let tentativi = 0;
const random = Math.floor(Math.random() * 101); 

let Controlla = () => {
    let n = Number(document.getElementById("tentativo").value); 
    let esito = "";
    
    tentativi++; 

    if (n === random) {
        esito = "Hai vinto! Tentativi: " + tentativi;
    } else if (n < random) {
        esito = "Il numero è maggiore.";
    } else {
        esito = "Il numero è minore.";
    }

    document.getElementById("conteggio").value = tentativi;
    alert(esito); 
};

let Reset = () => {
    tentativi = 0;
    document.getElementById("tentativo").value = 0;
    document.getElementById("conteggio").value = 0;
    alert("Nuovo gioco iniziato!");
};

let hr =() => {
    for (let i = 0; i <= 100; i+=5) {
    let riga =document.createElement("hr");
    riga.setAttribute("style","width : "+i+"%");
    document.getElementById("hr").appendChild(riga);
    }
}
hr();

let asterisco =() => {
    for (let i = 10; i <= 30; i++) {
    let riga =document.createElement("h1");
    riga.textContent = "*".repeat(i);
    document.getElementById("div").appendChild(riga);
    }
}
asterisco();
const calcolatrice = () => {
    const numero = Number(document.getElementById("n1").value);
    const numero2 = Number(document.getElementById("n2").value);
    const operazione = document.getElementById("operazione").value;
    let risultato = 0;

    switch (operazione) {
        case "1":
            risultato = numero + numero2;
            break;
        case "2":
            risultato = numero - numero2;
            break;
        case "3":
            risultato = numero * numero2;
            break;
        case "4":
            if (numero2 !== 0) {
                risultato = numero / numero2;
            } else {
                alert("Errore: divisione per zero!");
                return;
            }
            break;
        default:
            alert("Seleziona un'operazione valida!");
            return;
    }

    document.getElementById("risultato").textContent = risultato;
}