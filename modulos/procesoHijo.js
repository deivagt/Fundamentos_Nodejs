const {exec,spawn} = require('child_process');
// exec('node modulos/consola.js', (err,stdout, sterr)=> {
//     if(err){
//         console.error(err);
//         return false;
//     }

//     console.log(stdout);
// });

let proceso = spawn('dir',[]);
console.log(proceso.pid)

proceso.stdout.on('data',(dato)=>{
    console.log(dato.toString());
})
proceso.on('exit',()=>{
    console.log('el proceso termino')
})
