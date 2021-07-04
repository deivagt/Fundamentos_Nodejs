const fs = require('fs').promises;

const readFile = async (ruta) => {
    try{
        const file = await fs.readFile(ruta, {encoding: 'utf-8'});
        console.log(file);
    }catch(e){
        console.error(e);
    }
}

// Siempre realiza la busqueda en la raiz del proyecto
const writeFile = async (ruta, contenido) => {
    try {
        const file = await fs.writeFile(ruta, contenido );
        
    }catch(e){
        console.error(e);
    }
}

const deleteFile = async (ruta) => {
    try {
        const file = await fs.unlink(ruta);
    }catch(e){
        console.log(e);
    }
}
let cont = `contenido del archivo`;
let ruta = __dirname+'/file.txt';

const main = async () => {
    await readFile(ruta);
    await writeFile(ruta, cont);
    await deleteFile(ruta);
    await readFile(ruta);
}

main();