//tipo primitivo
let x = 10;

function cambiarValor(a){
    a = 20;
}

cambiarValor(x);
console.log(x);
//console.log(a);


const persona = {
    nombre: 'Juan',
    apellido: 'Perez'
}

function cambiaValorObjeto(p1){
    p1.nombre = 'Carlos';
    p1.apellido = 'Lara';
}

//paso por referencia
cambiaValorObjeto( persona );
console.log( persona );