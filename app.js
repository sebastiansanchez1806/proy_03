//paquete importado
require('colors');

//referencia el modulo math a traves de la constante math
const math = require('./modules/math.js');

console.clear();
console.log(math);

const main = async() => {
    console.log('***************************************'.bgYellow);
    console.log('****'.blue,'FUNCIONES MATEMATICAS'.bgMagenta.white,
                '*************'.blue);
    console.log('***************************************\n'.yellow);
    console.log('***************************************'.bgYellow);
    console.log('***************************************'.blue);
    
    
    console.log(math.add(14,6));
    console.log(math.substract(10,4));
    console.log(math.multiply(6,4));
    console.log(math.divide(12,0,9));

}

main();