# Útiles
Librerías elementales útiles
## Documentos
Consisten en dos documentos que se añaden a un proyecto HTML: utiles.js y utiles.css.

### CSS
Está preparado para generar bloques-grillas a partir de las clases fila y columna, y se puede definir anchos (porcion12 para un ancho de 1/2, porcion34 para un ancho de 3/4, etc.).
Existen clases para colores, por ejemplo class=Rojo ó class=Roja. Pero a la vez se puede aceptar una Opacidad o Transparencia (inversa) en 40%, 60% y 80% agregando T40, T60 y T80. Por ejemplo: class=RojoT60 genera un fondo rojo con opacidad 60%.

### JavaScript
La intención de este sistema es generar lenguaje lo más natural posible y más cercano al castellano (español).
Ejemplos:
Selecciono varios objetos en el documento, por ejemplo todos los objetos que sean de la clase Rojo.

```javascript
var objetosRojos = Items.clase("rojo");
Para.todosLos( objetosRojos ).realizar( function(x) {
  console.log("Tengo al objeto " + x);
});
```

También se puede trabajar con rangos (arrays ordenados), arrays de cualquier tipo, par máximo-mínimo, para trabajar con ellos:
```javascript
var misNumeros = [3, 54, 10, 15];
console.log( new Entre( misNumeros ).sumatoria() );
console.log( new Entre( misNumeros ).azar() );
console.log( new Entre( misNumeros ).promedio() );
```
Ejemplo de lo que podría producir:
```
82
54
20.5
```
```javascript
var misColores = ["Rojo", "Gris", "Turquesa"];
console.log( "Un color al azar puede ser " + Entre( misColores ).azar() );
console.log( "Colores que tengo: " + Entre( misColores ).juntar( ", ", "", ". Ninguno más" ) );
```
Da algo como lo siguiente:
```
Un color al azar puede ser: Turquesa
Colores que tengo: Rojo, Gris, Turquesa. Ninguno más
```

Luego construyo escalas, arrays de valores escalados:
```javascript
var losNrosPares = new Escala( { desde: 0, hasta: 100, paso: 2 } );
var primeros10 = new Escala( [1, 10, 1] );
Para.los( primeros10 ).realizar( function(x) { 
  console.log( "El triple de " + x + " es " + (x*3) );
}
```

Por último, haremos café de las cosas...
```javascript
var unParrafo = Item.id( "parrafo1" );
cafeDe( unParrafo ).cuando( "el usuario haga un **clic**k" ).realizar( function() {
  alert( "Hiciste click en el párrafo" );
}
cafeDe( unParrafo ).contenido( " y el párrafo termina así.", "**agreg**ar a lo último" );
cafeDe( unParrafo ).estilos( { "background-color": "black", "color": "white" } );
```

# Al respecto
El código no está optimizado, es solamente con fines educativos. 

