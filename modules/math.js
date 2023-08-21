const math = {}
    function add(a,b){
        return a + b;
    }
    function substract(a,b){
        return a - b;
    }
    function multiply(a,b){
        return a * b;
    }
    function divide(a,b){
        if (b ==0){
            return "ERROR NO SE PUEDE DIVIDIR ENTRE 0".bgRed
        }else{
            return a / b;
            }
        }

Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;
            
module.exports = Math;
