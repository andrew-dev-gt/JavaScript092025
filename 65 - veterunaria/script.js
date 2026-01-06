// 🐾 Clase base
class Animal {
    constructor(nombre, peso, edad) {
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;
    }

    informacion() {
        return `${this.nombre} - ${this.peso} Kg - ${this.edad} años`;
    }
}

// 🐶 Subclase Perro
class Perro extends Animal {
    constructor(nombre, peso, edad, raza) {
        super(nombre, peso, edad);
        this.raza = raza;
    }

    informacion() {
        return `🐶 ${this.nombre} - ${this.peso} Kg - ${this.edad} años - Raza: ${this.raza}`;
    }
}

// 🐱 Subclase Gato
class Gato extends Animal {
    constructor(nombre, peso, edad, sexo) {
        super(nombre, peso, edad);
        this.sexo = sexo;
    }

    informacion() {
        return `🐱 ${this.nombre} - ${this.peso} Kg - ${this.edad} años - Sexo: ${this.sexo}`;
    }
}

// 🐰 Subclase Conejo
class Conejo extends Animal {
    constructor(nombre, peso, edad, color) {
        super(nombre, peso, edad);
        this.color = color;
    }

    informacion() {
        return `🐰 ${this.nombre} - ${this.peso} Kg - ${this.edad} años - Color: ${this.color}`;
    }
}

// 🐾 Crear instancias de animales
let perro1 = new Perro('Simba', 11, 4, 'Shih Tzu');
let gato1 = new Gato('Ringo', 5, 2, 'Macho');
let conejo1 = new Conejo('Dumbo', 3, 1, 'Blanco');

// Lista de animales
let animales = [perro1, gato1, conejo1];

// 🧾 Mostrar los animales en la página
function mostrarAnimales() {
    let lista = document.getElementById('listaAnimales');
    lista.innerHTML = ''; // Limpia la lista antes de mostrarla
    for (let animal of animales) {
        let item = document.createElement('li');
        item.innerText = animal.informacion();
        lista.appendChild(item);
    }
}
