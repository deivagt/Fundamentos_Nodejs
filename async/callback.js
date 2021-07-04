const hola = async (nombre, callback) => {   
    setTimeout(() => {
        console.log('Hola', nombre);
        callback(nombre);
    }, 1500);
    
}
const adios = (nombre, callback) => {
    setTimeout(() => {
        console.log('Adios', nombre);
        callback();
    }, 1000);
}
console.log('Iniciando Proceso');
hola('David', (nombre) => {
    adios(nombre, () => {
        console.log('Terminando Proceso');
    });
    
});



// hola('david',() => { } )
// adios('david',() => { } )