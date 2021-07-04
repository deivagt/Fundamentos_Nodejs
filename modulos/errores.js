const otraFunc = ()=>{
     roto();
}

const roto = ()=> {
    return 3+z;
}

const rotoAsync = (cb)=> {
    setTimeout(() => {
        try{return 3+z;}catch(e){
            console.error('Error en async')
            cb(e);
        }
        
    }, 100);
}
try{
    //otraFunc();
    rotoAsync((e) =>{console.log('hay error',e.message)});
}catch(e){
    console.error(e);
    console.log('Ta bien')
}
console.log('final')