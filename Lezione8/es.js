/*let job=() =>{
    let p = new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve("job");console.log("job");
        },2000);});
        return p;
}

job().then((risultato)=>{
    console.log(risultato);
}).catch((errore)=>{
    console.log(errore);
});

let job3 = (data) => {
    let q = new Promise((resolve, reject) => {
        if (isNaN(data)) {
            reject("Errore: il valore non è un numero");
            return;
        }
        if (data % 2 === 0) {
            setTimeout(() => {
                resolve(data);
                console.log("Pari");
            }, 2000);
        } else {
            setTimeout(() => {
                reject("Dispari");
                console.log("Dispari");
            }, 1000);
        }
    });
    return q;
}

job3(2).then((risultato) => {
    console.log(risultato); 
}).catch((errore) => {
    console.log(errore);
});


job3("abc").then((risultato) => {
    console.log(risultato);
}).catch((errore) => {
    console.log(errore);
});

*/


let job1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("result of job1");
        }, 1000);
    });
}
let job2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("result of job2");
        }, 1000);
    });
}
let promise = job1();

promise.then((data1)=>{
    console.log(data1);
    return 'Hello word';
}).then((data2)=>{
    console.log('data2',data2);
    return job2();
    
}).then((data3)=>{
    console.log('data3',data3);
    
});

let callback1=()=>{
    let p = new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve("callback1");
        },2000);});
        return p;
}
let callback2=()=>{
    let p = new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve("callback2");
        },1000);});
        return p;
}

let j =()=>{
    callback1().then((risultato)=>{
        console.log(risultato);
    }).catch((errore)=>{
        console.log(errore);
    });
    callback2().then((risultato)=>{
        console.log(risultato);
    }).catch((errore)=>{
        console.log(errore);
    });
    callback2().then((risultato)=>{
        console.log(risultato);
    }).catch((errore)=>{
        console.log(errore);
    });
    callback2().then((risultato)=>{
        console.log(risultato);
    }).catch((errore)=>{
        console.log(errore);
    });
}
j();