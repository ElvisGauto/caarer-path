### Modules

Los modulos llegan principalmente para que pueda hacer del código: mantenible, reusable y por sobre todo abstracto, como lo es uno de los pilares de la programación.

### ES6 Modules

Para empezar a usar los modulos de ES6 primero tenemos que separar nuestra clase en un archivo aparte y exportarlo. 
Por ejemplo

export class Obj1 {
    // code
}

En nuestro modulo vamos a importarlo e instanciarlo para hacer uso de sus propiedades y metodos
Por ejemplo:

import { Obj1 } from './Obj1'

Si no usamos webpack en nuestro proyecto con modulos, vamos a tener que especificar que el archivo es de tipo modulo, por ejemplo.

<script type="module" src="./module.js"></script>

después de esto, tendremos que especificar en la importación de la clase el tipo de archivo, osea .js
De lo contrario obtendremos un error de que no se encuentra el archivo que estamos importando.

### ES6 Tooling

tenemos dos tipos de herramientas en ES6

Transpiler: nos permite traducir el JS moderno (ES6) a uno que el browser pueda entender (ES5).
Como ejemplo de esta herramienta tenemos a Babel.

Bubler: nos permite unificar varios archivos JS para reducir el tamaño final del producto y que el cliente pueda obtenerlo de una manera más liviana.
Como ejemplo de esta herramienta tenemos a Webpack.

### Babel

Para usar Babel necesitamos de Node.js para obtener librerias que nos ayuda en la instalación.
Lo que necesitamos hacer para comenzar es movernos a nuestro proyecto y después de instalar node.js, tenemos que correr el siguiente comando.

npm init --yes or -y

Esto nos creara un archivo base llamado package.json 

Luego instalamos Babel con el siguiente comando

npm i babel-cli@version-a-elegir. babel-core@version-a-elegir babel-preset-env@version-a-elegir
      (nos permite ejec comandos) (toda la logica de transpiler) (se encarga de usar los nuevos plugin para cada )
      (se encarga de convertir js)                                (funcion moderna que tenga JS)
                                                                  (almacena todos los plugins)

después colocamos --save-dev para que solo se instalen en modo de desarrollo y no en producción.

Para ejecutarlo tenemos que crear un script dentro de package.json 

"babel": "babel --presets env index.js -o build/index.js"

creamos la carpeta build así no nos da error y ejecutamos el siguiente comando

npm run babel

todo lo que esté escrito en js moderno se cambiara a un js que el navegador pueda entender.

### Webpack

Para usar Webpack tenemos que ejecutar el siguiente comando 

npm i -g webpack-cli@version-a-elegir

Luego en la carpeta ejecutamos lo siguiente

webpack init

Nos va a hacer varias preguntas, basicamente tenemos que indicar el modulo principal que va a contener nuestros archivos JS, por lo general siempre está en ./src/index
y las demás preguntas por default. 

Una vez que tengamos todo, tenemos que ejecutar el siguiente comando

npm run build

Esto hará el trabajo de minificar los archivos y crear un archivo de producción para el cliente. 
Como opción podemos modificar el script de webpack y agregar un -w para que al momento de ejecutar el codigo se quede observando cambios y agregandolo al bundle, de esta manera nos ahorramos de ejecutarlo cada vez que hagamos nuevos trabajos.