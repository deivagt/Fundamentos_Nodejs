process.on('beforeExit',()=>{
    console.log('El proceso va a terminar');
});

process.on('exit',()=>{
    console.log('Proceso Terminado');
    //No ocurre porque el proceso ya acabo
    setTimeout(() => {
        console.log('Esto no pasa')
    }, 0);
});

process.on('uncaughtException',(e,origin)=>{
    console.error('error en', e.message,'en', origin)
})

const serompe =()=>{
    return a+3;
}

serompe();