### ES6 Classes

Las clases son funciones, con ellas podemos crear objetos. Dentro de las clases 
tenemos un metodo llamado Constructor que nos permite inicializar los objetos.

Los metodos definidos dentro de la clase siempre estaran dentro del prototype a menos 
que lo definamos dentro del constructor.

Babel es un compilador de ES6 a JS nativo.

### Hoisting

hay propiedades en Javascript que al momento de invocarlas se declaran primera en forma secuencial entonces no importa si llamo el nombre de la propiedad después de ser declaradas. Por ejemplo las funciones de tipo declaración (function nameMethod {}) pueden ser llamadas antes de declararlas y no retornaria ningun error. En cambio las funciones de tipo expresión (const functionName = function () {}) no pueden ser llamadas antes de crearlas. 
Las clases expresivas y declarativas no forman parte del Hoisting por lo tanto se llaman una vez creadas de forma secuencial y no antes.

### Static Method

Los metodos estaticos no se guardan dentro del objeto proto. 
Tambien pueden ser llamadas sin instanciar la clase que lo contiene. 

Por ejemplo
Object1.method(param)

para hacer de un metodo estatico se tiene que declarar static nameMethod ()

Un ejemplo de uso podemos decir que Math tiene a sus metodos de forma estatica ya que no necesitamos instanciar Math para poder acceder a ellos.

### The This keyword --- ver de nuevo.

En las clases el strict mode de JS está activo de forma predeterminada, entonces la palabra reservada This siempre apuntara al objeto de la clase y nunca apuntara al objeto global window, de lo contrario retornará undefined.

### Private Members Using Symbols

Con Symbols podemos privatizar las propiedades y metodos de nuestro objeto. Por ejemplo

const _var1 = Symbol();
const _method = Symbol();

luego en la clase hacemos 

[_var1] = value;

y para funciones seria 

[_method] {
    // code
}

Cada vez que creamos una propiedad de tipo Symbol, estamos creando una unica propiedad. Por eso si comparamos Symbol() === Symbol() va a retornar falso ya que se crean de forma unica.

### Private Members Using Weakmaps -- ver de nuevo<>
 
nos permite acceder a propiedades o metodos privados. 

### Getters and Setters

En ES6 podemos hacer uso de getter y setter con la declaracion siguiente

get valuePrivateName () {

}

set valuePrivateName (value) {
    return ...
}

### Inheritance

En las clases para heredar de otra clase usamos la palabra reservada extendes posteriormente al nombre de la clase que está heredando. 
Una vez que heredamos de la otra clase, tenemos que usar palabra reservada super dentro del constructor para inicializar las propiedades del objeto que nos está herando
Por ejemplo

class Object2 extends Object1 {
    constructor(propertyObj1, propertyObj2A, propertyObj2B) {
        super(propertyObj1, propertyObj2A, propertyObj2B)
    }
}

### Method Riding

para heredar las funcionalidades del objeto1 tenemos que crear un metodo del mismo nombre y utilizar la funcion super para heredar sus funcionalidad
Por ejemplo.

class obj2 extends obj1 {
    method() {
        super.method(); // hola 1

        c.l('hola 2');
    }
}

 