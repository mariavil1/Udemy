console.log('calculadora con bootstrap')

function sumar(params) {
    const formulario = document.getElementById("formulario");
    let operandoA = formulario['operandoA'];
    let operandoB = formulario['operandoB'];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if (isNaN(resultado)) {
        resultado = 'La operacion no incluye numeros';
        
    }
    document.getElementById('resultado').innerHTML = resultado;

}