//paquete importado
require('colors');

//referencia el modulo math a traves de la constante math
const math = require('./modules/math.js');

console.clear();
console.log(math);

const main = async() => {
    console.log('***************************************'.blue);
    console.log('****'.blue,'FUNCIONES MATEMATICAS'.bgGreen,
                '************'.blue);
    console.log('***************************************\n'.blue);
    console.log('***************************************'.green);
    console.log('*                                     *'.green);
    
    
    console.log(math.add(20,6));
    console.log(math.substract(10,7));
    console.log(math.multiply(7,5));
    console.log(math.divide(10,9));

}

main();
