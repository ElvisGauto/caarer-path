### Qué es Binding?

Es la accion de enlazar un metodo al contexto de la clase. Por ejemplo si tenemos un metodo que debe ser llamado
dentro del evento de la estructura jsx, debemos bindiar ese metodo en el constructor. Esta accion se hace principalmente en componentes basados en clases.
El bindeo dentro del constructor es una recomendacion de React.

constructor() {
    this.methodName = this.methodName.bind(this);
}

methodName(name) {
    console.log('Hi ' + name);
}