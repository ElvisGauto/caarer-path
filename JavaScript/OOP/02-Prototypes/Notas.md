### Inheritance 

La herencia nos ayuda a reutilizar metodos o propiedades que pueden necesitar varias clases. Creamos una clase padre
y heredamos sus propiedades a las clases hijas.

exiten dos tipos de herencia 

Classical vs Prototypical

### Prototypes and Prototypical Inheritance

los prototipos son padres de los objetos. 
Todo objeto tiene un padre (Prototipo - objeto base)

__proto__ está depecrado.

### Multi-level Inheritance

Objetos instanciados por un constructor heredaran el mismo objecto Padre.

circle -> circleBase -> objectBase

### Properties Description

let objectBase = Object.getPrototypeOf(object);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log(descriptor);

Podemos definir las propiedades de un objecto de la siguiente manera

let person = { name: 'mauro' };

Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: false // las key de un objeto ya no son enumerables
    configurable: false // no podemos eliminar la propiedad del objeto
});

person.name = 'elvis' // El resultado no cambia porque writable es falso.

### Constructor Property

Object.getPropertyOf(object) = object.__proto__ // forma deprecada

### Protitype vs Instance Members

Podemos agregar miembros a un objecto de dos formas

// Instance members
objecto () {
    this.radius = radius;
}

// Prototype members: de esta forma, las propiedades o metodos se guardan en el objeto __proto__ y son accesibles a cualquier instancia. Mejora la carga de memoria, etc.
MyObjecto.prototype.method = function() {
    console.log('method');
}

### Iterating instance and Prototype members

Object.keys solo retorna instancia de miembros pero no los que están dentro del __proto__

for (let key in object) console.log(key) // retornará todo los miembros, incluso el de __proto__ 

objeto.hasOwnProperty(propertyName) solo  retorna  instancias que no están dentro del __proto__

### Avoid extending the built-in Object

no modificar los objetos que no son propios porque quizas alguien más puede utilizar esos metodos que están en el Built-in