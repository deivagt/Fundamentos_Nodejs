let i = 1;
const inter = setInterval(() => {
    console.log('Hola');
    if(i === 3){
        clearInterval(inter);
    }
    i++;
}, 1000);

setImmediate(()=>{
    console.log('hola')
})
console.log(__filename);

global.miVar = 'Variable Global';
console.log(miVar);