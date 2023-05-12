function Animal(color, peso, altura) {
    this.color= color;
    this.peso = peso;
    this.altura = altura;
}


function Gato(raza, edad, vacunas){
    this.raza = raza;
    this.edad= edad; 
    this.vacunas= vacunas;
}

const animal = new Animal("Beige","12",35);

const gati = new Gato("Angora",8,"26/03/2020: Rabia, 8/04/2023: Moquillo");

Gato.prototype.caracteristicas = function (){
    return ( `Su color es ${animal.color}, mide ${animal.altura} centimetros y pesa ${animal.peso}`);
}

console.log(gati)
console.log(gati.caracteristicas());