const hola = async (nombre) => { 
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            console.log('Hola', nombre);
            resolve(nombre);
        }, 1500);
    });
    
    
}
const adios = async (nombre) => {
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            console.log('Adios', nombre);
            resolve();
        }, 1000);
    })
    
}
const hablar = async (nombre) => {
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            console.log("Bla bla bla");
            resolve(nombre)
          }, 1000);
    })
    
  };

// --
const main = async () => {
    try{
        let nombre = await hola('David');
        await hablar();
        await hablar();
        await hablar();
        await hablar();
        await hablar();
        await adios(nombre);
        console.log('termina el proceso');
        
    }catch(e){
        console.error('Este es un error',e);
    }
    
}

console.log('Empezamos el proceso');
main();
console.log('Segunda instr')

