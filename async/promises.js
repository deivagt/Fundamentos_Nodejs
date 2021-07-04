const hola =  (nombre) => { 
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            console.log('Hola', nombre);
            resolve(nombre);
        }, 1500);
    });
    
    
}
const adios = (nombre) => {
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            console.log('Adios', nombre);
            resolve();
        }, 1000);
    })
    
}
const hablar = (nombre) => {
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            console.log("Bla bla bla");
            resolve(nombre)
          }, 1000);
    })
    
  };

// --
console.log('Iniciado el proceso...');
hola('Carlos')
.then(hablar)
.then(hablar)
.then(hablar)
.then(adios)
.then(()=> {
    console.log('Terminado el proceso...');
})
.catch((err)=> console.error(err))