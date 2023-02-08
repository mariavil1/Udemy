class Empleado{
    constructor(nombre, sueldo){
     this.nombre = nombre;
     this.sueldo = sueldo;   
    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this.nombre}, sueldo: ${this.sueldo}`;
    }
}
class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this.departamento = departamento
    }
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} depto: ${this.departamento}`;
    }
}

function determinarTipo (tipo){
    console.log(tipo.obtenerDetalles());
    if(tipo instanceof Gerente){
        console.log('Es un objeto de tipo Gerente');
        console.log(tipo.departamento);
    }
    else if(tipo instanceof Empleado){
        console.log('Es un tipo Empleado');
        console.log(tipo.departamento);
    }
}

let empleado1 = new Empleado('nelson', 5000, 'maquinas');
let gerente1 = new Gerente('luis', 2000, 'sistemas');

determinarTipo(empleado1);
determinarTipo(gerente1);
