function laser1(){
    console.log('beam');
}

const laser3 = () => {
    console.log('beam');
}

function executador(fun){

    if(Math.random() > 0.50){

    }

    console.log('Executador está executando');
    fun();
}

function pegarNumero10(){
    console.log('10');
    return 10;
}

executador(pegarNumero10);

const numbers = [1,2,3,4,5,6,7,8,9];
const result = numbers.filter((number) => { 
    if (number >= 5) {
        return true
    } else { return false}
});

console.log(result);

function filter(array, fn){
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const shouldFilter = fn(element);
    }
}

function callback(numbers){
    if (number > 5) {
        return true;
    } else {
        return false;
    }
}

filter(numbers, callback)