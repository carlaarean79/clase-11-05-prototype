function Persona(nombre,apellido,edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

const persona = new Persona("Carla", "Arean",43);
console.log(persona);
const persona2 = new Persona.constructor("Ivan","Ventureira",19);
console.log(persona2);

//formas de saber a que funcion cosntructora pertece el objeto
console.log(persona.constructor.name);//Persona
console.log(persona instanceof Persona);//true
console.log(persona instanceof Event);//si es del tipó obj Even//false