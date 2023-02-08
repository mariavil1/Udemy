class DispositivoEntrada{
    constructor (tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
}

let dispositivoEntrada1 = new DispositivoEntrada ('entrada1', 'apple');
console.log (dispositivoEntrada1);

class Raton extends DispositivoEntrada{

    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton(){
        return this._idRaton;
    }
    toString (){
        return `Raton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}`;
    }
}

let raton1 = new Raton ('USB', 'HP');
console.log (raton1.toString());
let raton2 = new Raton ('Inalambrico', 'Dell');
console.log (raton2.toString());

class Teclado extends DispositivoEntrada{

    static contadorTeclado = 0;

    constructor (tipoEntrada, marca){
        super(tipoEntrada, marca)
        this._idTeclado = ++Teclado.contadorTeclado;
    }
    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `Teclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}`;
    }
}

let teclado1 = new Teclado ('Bluetooth', 'MSI');
console.log (teclado1.toString());
let teclado2 = new Teclado ('Cable', 'Acer');
console.log (teclado2.toString());


class Monitor{

    static contadorMonitores = 0;

    constructor(marca, tamaño){
        this._marca = marca;
        this._tamaño = tamaño;
        this._idMonitor = ++Monitor.contadorMonitores;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    toString (){
        return `Monitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamaño}`;
    }
}

let monitor1 = new Monitor ('hp', '15');
console.log (monitor1.toString());
let monitor2 = new Monitor ('Dell', '20');
console.log (monitor2.toString());

class Computadora{
    static contadorComputadoras = 0;

    constructor(nombre, monitor, raton, teclado){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton,
        this._teclado = teclado;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get idComputadora(){
        return this._idMonitor;
    }
    toString (){
        return `Computadora ${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado}`
    }
}

class Orden{
    static contadorOrdenes = 0;

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    } 
    mostrarOrden(){
        let computadorasOrden = '';
        for( let computadora of this._computadoras ){
            computadorasOrden += `\n${computadora}`;
        }
        console.log(`Orden: ${this.idOrden}, Computadoras: ${computadorasOrden}`);
    }
}

let computadora1 = new Computadora ('HP', monitor1, raton1, teclado1);
console.log( computadora1.toString());
let computadora2 = new Computadora ('Intel', monitor2, raton2, teclado2);
console.log(`${computadora2}`);

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarComputadora(computadora1);
orden2.agregarComputadora(computadora2);
orden2.mostrarOrden();
