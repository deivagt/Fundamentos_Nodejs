const http = require('http');

const port = 3000;


const router = (req,res)=>{
    console.log('Nueva peticion');
    console.log(req.url);
    switch(req.url) {
        case '/':
            res.write('inicio');
            res.end();
        break;
        case '/hola':
            res.write('Hola, que tal');
            res.end();
        break;
        default:
            res.write('Error 404: No encontrado');
            res.end();
        break;
    }
    //Excribir respuesta
    
    
}

http.createServer(router).listen(port)

console.log('Escuchando en el puerto', port)

