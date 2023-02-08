let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombrecompleto: function(titulo, tel){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + tel;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

//uso de apply para usar el metodo 
//persona1.nombre completo con los datos de persona2
console.log( persona1.nombrecompleto('dr', '3434') ); 

let arreglo = ['ing','330330'];
console.log( persona1.nombrecompleto.apply( persona2, arreglo ) );
//aqui no pasamos los parametros uno por uno separado por comas
//si no que pasaremos un arreglo con los valores de los argumentos que
//queremos mandar a este metodo