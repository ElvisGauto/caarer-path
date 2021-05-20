### What is Functional Programming?

Es un paradigma de programación donde las funciones son las que mandan.
Es un estilo de programación.
La manera de pensar sobre un problema.
Todo se resuelve con funciones.

En la programación funcional no pensamos en una estructura de objetos sino más bien en inputs y outputs

Not Functional:  estilo imperativo
    var name = "Mauro";
    var greeting = "Hi, I'm ";
    console.log(greeting + name);
    => "Hi, I'm Mauro"

Funcional:
    function greet(name) {
        return "Hi, I'm " + name;
    }

    greet("Mauro");

    => "Hi, I'm Mauro"

Lo que logramos con la programación funcional es evitar efectos secundarios, por ejemplo cualquier cosa que pueda
hacer una funcion que no sea calcular la salida a partir de la entrada dada y devolverla.

Siempre vamos a querer que una funcion solo se dedique a tomar su entrada, calcular y devolverlo a la salida, esto significa que la funcion es pura.

No es pura:

    var name = "Mauro";
    function greet() {
        console.log("Hi, I'm " + name);
    }

Si queremos que esta funcion sea pura tenemos que crearla con un parametro name y que retorne un string con el parametro concatenado a la cadena. De esta forma priorisamos la entrada (seria el parametro) y lo unico que hace es devolver una salida.

### High Order Functions 

funciones que pueden tomar otras funciones como entrada

Ejemplo 

function makeAdjetifier(adjetive) {
    return function (string) {
        return adjetive + "" + string;
    };
}

var coolfier = makeAdjetifier("cool");
coolifier("conference");

=> "cool conference"

### Iteration in Function programming

No debemos iterar, hay que usar mejor map, reduce, filter ya que son funciones de orden superior.

### Avoid mutability

Debemos evitar la mutabilidad de datos, por ejemplo cambiar los objetos que usamos

Ejemplo

Mutacion: malo!

    var rooms = ["H1", "H2", "H3"];
    rooms[2] = "H2";
    rooms;
    => ["H1", "H2", "H4"];

Inmutable: Bien!

   var rooms = ["H1", "H2", "H3"];

   var newRooms = rooms.map(function (rm) {
       if (rm == "H3") { return "H4"; }
       else { return rm }
   });

   newRooms; => ["H1", "H2", "H4"]
   rooms; => ["H1", "H2", "H3"]

### Persistent data structures for efficient inmutability - 16:17
    
Basicamente hacer uso de la reusabilidad y mergear por asi decirlo aquellas estructuras que son inmutables.
Esto ayuda al almacenamiento en memoria y achicamos el esfuerzo de trabajo a la hora de aplicar cambios.

