let suma = 0;
console.time('benchmark')
for(let i = 0; i > 1; i++){
    suma +=1;
}
console.timeEnd('benchmark')

let suma2 = 0;
console.time('benchmark 2')
for(let j = 0; j > 1; j++){
    suma2 +=1;
}
console.timeEnd('benchmark 2')

const asyncrono =()=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log('Termina el proceso asincrono')
            resolve();
        });
    })
}
console.time('Async');
asyncrono()
.then(()=>{
    console.timeEnd('Async')
})


