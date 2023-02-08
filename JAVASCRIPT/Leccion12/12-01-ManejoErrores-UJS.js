'use strict'
let resultado = 3;
try{
    if(isNaN(resultado)) throw 'No es un numero';
    else if( resultado === '' ) throw 'Es una cadena vacia';
    else if( resultado >= 0 ) throw 'Valor positivo';
    else if( resultado < 0 ) throw 'Valor negativo';
}
catch(error){
    console.log(error);
}
finally{
    console.log('termina la revision de errores');
}
console.log('continuamos');