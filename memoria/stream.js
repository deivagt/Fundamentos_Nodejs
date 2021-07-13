const fs = require('fs');
const stream = require('stream')
const util = require('util')

let data = ``;

let readableStream = fs.createReadStream(__dirname+'/input.txt');

// encode response
readableStream.setEncoding('utf-8')

readableStream.on('data', (chunk)=>{
    data +=chunk
})

readableStream.on('end',()=>{
    //console.log(data);
})

// process.stdout.write('Hola')
// process.stdout.write('que')
// process.stdout.write('tal')

const TRANSFORM = stream.Transform;

function Mayus(){
    TRANSFORM.call(this)
}

util.inherits(Mayus,TRANSFORM)

Mayus.prototype._transform = function (chunk,codif, callback){
    let chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    callback();
}
let mayus = new Mayus();
readableStream.pipe(mayus)
.pipe(process.stdout)


