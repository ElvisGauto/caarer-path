### ES6 Classes - ver de nuevo...

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