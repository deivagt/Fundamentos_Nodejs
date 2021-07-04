const hola = async (nombre, callback) => {
  setTimeout(() => {
    console.log("Hola", nombre);
    callback(nombre);
  }, 1500);
};

const adios = (nombre, callback) => {
  setTimeout(() => {
    console.log("Adios", nombre);
    callback();
  }, 1000);
};

const hablar = (callback) => {
  setTimeout(() => {
    console.log("Bla bla bla");
    callback();
  }, 1000);
};

const despedida = () =>{
    console.log('Terminamos');
}

const conversar = (nombre, veces, callback) => {
    if(veces > 0){
        hablar(() => {
            conversar(nombre,--veces,callback);
        })
    }else {
        adios(nombre, callback);
    }
    
}
// --
console.log("Iniciando Proceso");
hola('Carlos', (nombre)=> {
    conversar(nombre, 3,despedida);
})

// hola("David", (nombre) => {
//   hablar(() => {
//     hablar(() => {
//       adios(nombre, () => {
//         console.log("Terminando Proceso");
//       });
//     });
//   });
// });

