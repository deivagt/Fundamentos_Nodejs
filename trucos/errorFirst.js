function asincrona(callback){
    setTimeout(() => {
        try{
            let a = 3+5;
            callback(null,a); //null porque no hay error
        }catch(e){
            callback(e,null); // null porque no ha respuesta, solo error
        }
    }, 1000);
}

asincrona((err, res)=>{
    if(err){
        console.error('Tenemos un error: ', err);
        
        //throw err // NO FUCIONA
        return false;
    }

    console.log('Exito :D, la respuesta es:', res);
});

/* No se puede encerrar una funcion asincrona en un try catch 
   para ejecucion directa AMENOS que sea async await*/