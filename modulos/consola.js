console.log('Algo');
console.info('xd');
console.error(':c');

let tabla = [{a: 1, b:'z'},{a:2,b:'Otra'}]
console.log(tabla)
console.table(tabla)

console.group('Conversacion');
console.log('Hola');
console.log('BlaBlaBla');
console.log('Adios');
console.groupEnd('Conversacion')

console.log('a')

const uno =()=>{
    console.group('Funcion 1');
    console.log('Esto es de la F1');
    console.log('Tambien');
    
    dos();
    console.groupEnd()
    //
}
const dos = ()=>{
    console.group('Funcion 2');
    console.log('Estamos en dos');
    console.groupEnd();
    //
}
console.log('start');
uno();

console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');

