### Stateful

Está relacionado con el class component, este tipo de componente posee un state que le permite definir y actualizar
constantemente estado del componente donde cada accion llama al metodo render nuevamente.

### Stateless

Es una version simplificada del stateful donde se utilizan Funcional component.
Manejan el state en base a las props recibidas. Osea que no tiene un state interno por lo tanto no contiene 
funciones como setState.
No se utilizan metodos para manejar el ciclo de vida.