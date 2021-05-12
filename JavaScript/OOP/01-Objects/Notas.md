### Constructor:

- Nos ayuda a referenciar un  objecto.

### Functions Objects:

- En JS las funciones son Objectos.

### Value vs Reference Type

Las variables primitivas copian su valor
Los objetos copian su referencia.

### Adding or Removing Properties

object['key'] return property

tambien pueden acceder a el mediante variables en caso de que la key tenga palabras separadas 

const key = 'pancho villa';

object[key] return property;

### Enumerating properties

podemos usar for in para enumerar propiedades

for (key in Object) {
    console.log(key) // retorna keys

    Object[key] // retorna sus valores
}

Otra forma es usar

const keys = Object.keys(object);

Si queremos saber si una propiedad especifica se encuentra en el objeto podemos hacer lo siguiente

if ('key' in Object) se cumplira la condición si Object tiene la propiedad 'key'


### Abstraction

Oculta los detalles y muestra lo esencial.

### Private properties and Methods

las clousures nos permiten crear una funcion dentro de otra y mantener las propiedades y metodos a un solo scope

### Getters and Setters

Object.defineProperties nos permite acceder a una variable privada de un objeto y poder Obtenerla o Modificarla (Get or Set)

