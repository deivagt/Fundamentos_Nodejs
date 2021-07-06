const os = require('os');
const SIZE = 1024;

console.log(os.arch());
console.log(os.platform());
console.log(os.cpus().length);
console.log(os.freemem());

const kb =(bytes)=>{
    return (bytes / SIZE)
}
const mb =(bytes)=>{
    return (kb(bytes) / SIZE)
}
const gb =(bytes)=>{
    return (mb(bytes) / SIZE)
}
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.totalmem()));

console.log(os.homedir())
console.log(os.tmpdir())
console.log(os.hostname())
console.log(os.networkInterfaces())