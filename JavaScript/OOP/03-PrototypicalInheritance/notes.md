### Creating your own Prototypical Inheritance

Para heredar metodos de otro Objeto, lo que hacemos es obtener el prototype como objeto hijo.
Por ejemplo:

Object2.prototype = Object.create(Object1.prototype);

Object2 tendrá dentro de su proto los metodos que esten en Object1. 

### Resetting the Constructor

Cuando heredamos el prototype de un objeto padre, estamos resetiando nuestro
proto y por lo tanto perdemos el constructor. Lo que se debe hacer es una vez que heredamo
tenemos que resetiar el constructor de la siguiente manera.

Object2.prototype.constructor = Object2;

### Calling the Super constructor

Para obtener las propiedades del objeto padre tenemos que hacer uso del super constructor
Por ejemplo

Object2 () {
    Object1.call(this, propertyParentName);
}

### Intermediate Function Inheritance

Si tenemos más de 2 hijos que heredan de un objeto padre, no podemos hacer lo que hicimos en la linea:6 por 
cada hijo que eso llevaria más linea de codigos. Lo que se puede hacer es crear una función que reciba 2 parametros
Child y Parent donde Child seria el Objeto hijo y Parent seria el objeto del que vamos a heredar sus propiedades. 
Quedaria así

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

Luego llamamos la funcion por cada objeto que necesitemos heredar.

### Method Overriding  - Mirar de nuevo...

(leer la implementación en un objeto hijo)

### Polymophism  - Mirar de nuevo...

Cuando creamos un metodo que después lo heredamos a otros objetos, podemos transformar este metodo a varias formas
en una sola linea. 

### When to Use Inheritance

Hay que evitar la jerarquia de herencias. Debemos tratar de usar herencia que no superen más de un nivel de jerarquia.

### Mixins

Object.assign = lo usamos para copiar las propiedades de un objeto a otro.

const newObj = Object.assign({}, obj1, obj2); Se pueden combinar varios objetos que asignaran al target vacio.

(parametro rest "...parameter" crea una coleccion de parametros)


