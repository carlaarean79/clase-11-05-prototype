function Persona(nombreCompleto,edad,ocupacion, estadoCivil, sexo, hobbies){
    this.nombreCompleto = nombreCompleto;
    this.edad = edad;
    this.ocupacion = ocupacion;
    this.estadoCivil = estadoCivil;
    this.sexo = sexo;
    this.hobbies = hobbies;
}
//se crea un nuevo objeto persona
const persona = new Persona("Carla Arean", 43, "Empleada", "casada","Femenino","Hacer pilates, andar en bicicleta")
//con prototype se accede al constructor de Persona//similar a suoer() de herencia
//se crea un metodo llamado presentarse
Persona.prototype.presentarse = function (){
    console.log(`mi nombre es ${nombreCompleto}, tengo ${edad} años y me gusta ${hobbies}`);
}
console.log(persona);

console.log(persona.presentarse());

function Cliente(id, ultimaCompra, compraRealizada){
    this.id = id;
    this.ultimaCompra = ultimaCompra;
    this.compraRealizada = compraRealizada;
}

//se crea un nuevo cliente

const cliente = new Cliente(25,"25/04/2023",50000);
//se accede al constructor de cliente y se le agrega un nuevo atributo
Cliente.prototype.ropa ="pantalon";

//en prototype queda guadado las propiedades de cliente
cliente.prototype = new Persona("Carla Arean", 43, "Empleada", "casada","Femenino","Hacer pilates, andar en bicicleta")
console.log(cliente);
