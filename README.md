# Analizador de texto

## Índice

* [1. Prototipo de baja fidelidad](#1-Prototipo-de-baja-fidelidad)
* [2. HTML semántico](#2-HTML-semántico)
* [3. Uso de selectores de CSS](#3-Uso-de-selectores-de-CSS)
* [4. Web APIs](#4-Web-APIs)
* [5. JavaScrip](#5-JavaScrip)
* [6. Diseño de producto](#6-Diseño-de-producto)


***
#### Los pasos que realice para desarrollar el proyecto
## 1. Prototipo de baja fidelidad

* Elaboración del **prototipo de baja fidelidad**.
![Prototipo de B.f.](<Prototipo de B.F..png>)


## 2. HTML semántico
* En la aplicación primero se implemento la etiqueda `<header>` que se usa para el encabezado de la aplicación ,en este caso se anido la etiqueta `<h1>` que se usa para definir el tema principal de la página.
* Seguidamente se uso la etiqueta `<main>` que representa el contenido principal del `<body>` ya sea de un documento o aplicación.
* Para la separacion del contenido en el `<body>` se uso la tres veces la etiqueta `<section>` que agrupa de manera especifica;en la primera para contener la etiqueta `<ul>`,que crea una lista no ordena de las métricas y sus 6 hijos `<li>` que representan cada métrica.
* Dentro de la segunda `<section>`se anida la etiqueta `<textarea>`que permite crear un cuadro de texto de varias lineas.
* Y por ultimo en la tercera `<section>` se anida la etiqueta `<button>` que representa un elemento cliqueable de tipo botón que puede ser utilizado en formularios o en cualquier parte de la página que necesite un botón estándar y simple de aplicar.
* Por ultimo se implemento la etiqueta `<footer>` que representa un pie de página , anidado esta la etiqueta `<p>` es de tipo bloque , por defecto ocupa una linea completa en la página.

## 3. Uso de selectores de CSS

* Para aplicar estilo en el `<header>`, `<footer>`,`<body>` y `<section>`, se uso ***selectores CSS de tipo*** es decir se le aplico estilos desde el nombre de la etiqueta.
* Para aplicar estilo al `<ul>` y `<li>` , se uso ***selectores CSS de class*** el selector de clase comienza con un punto **(.)** y selecciona todo elemento del documento que esté afectado por esa clase.
* Para aplicar estilo al `<textarea>`se uso ***selectores de atributo*** utilizando el atributo **[name:" "]** para darle estilo; tambien se uso otros atributos propios del `<textarea>` como **rows** que proporciona número de líneas visibles en el control , **cols** proporciona anchura visible del control del texto y **placeholder** que puede añadir una indicación para el usuario y defina que debe insertar en el cuadro de texto. 
* Para darle estilo al `<button>` se uso ***selectores CSS de ID*** un selector de ID comienza con un carácter **#** en lugar de un punto, pero se utiliza básicamente de la misma manera que un selector de clase.
* Para agregar estilo se uso tambien propiedades del modelo de caja como **background** (fondo), **padding** (espacio entre su contenido y su borde ), **border** (borde de los elementos) y **margin** (establece el margen para los cuatro lados).


## 4. Web APIs

* Selectores del DOM:
  - `selector del DOM querySelector`: 
  - `selector del DOM getElementById`: 
* Manejos de eventos del DOM (listeners,propagación,delegación)
  - `Event Listener para el evento **keyup** del <textarea>`: 

  - `Event Listener para el evento **click** del <button>`: 
* Manipulación dinámica del DOM:
  - `innerHTML`: 

  

## 5. JavaScrip



### JavaScript

* **Tipos de datos primitivos**

  - [ ] La aplicación convierte valores tipo `string` a tipo `number`.

* **Strings (cadenas de caracteres)**

  - [ ] La aplicación usa métodos para manipular strings como
  [`split`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split),
  [`trim`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim)
  o
  [`replace`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace).

* **Variables (declaración, asignación, ámbito)**

  - [ ] La aplicación declara variables con
  [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
  y
  [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const).

  - [ ] La aplicación NO declara variables con  `var`.

* **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

  - [ ] La aplicación usa el statement
  [`if..else`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
  para evaluar condiciones.

* **Uso de bucles/ciclos (while, for, for..of)**

  - [ ] La aplicación usa el statement
  [`for`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
  para crear un bucle.

* **Funciones (params, args, return)**

  - [ ] El objeto `analyzer` contiene un método `getWordCount` para calcular el
  recuento de palabras de un texto.

  - [ ] El objeto `analyzer` contiene un método `getCharacterCount` para calcular
  el recuento de caracteres de un texto.

  - [ ] El objeto `analyzer` contiene un método `getCharacterCountExcludingSpaces`
  para calcular el recuento de caracteres excluyendo espacios y signos de
  puntuación de un texto.

  - [ ] El objeto `analyzer` contiene un método `getNumbersCount` para contar
  cúantos números hay en un texto.

  - [ ] El objeto `analyzer` contiene un método `getNumbersSum` para la suma
  longitud media de los números en un texto.

  - [ ] El objeto `analyzer` contiene un método `getAverageWordLength` para
  calcular la longitud media de las palabras en un texto.


## 6. Diseño de producto
Ultimamente los temas vintage,retro y tierno , esta muy presente en los diseños para paginas web o apps, es por ello que me fui por escoger una paleta de colores pasteles ,ya que investigando que dentro de esos conceptos quedarian bien visualmente. 
- Paleta de colores:
   ![paleta de colores](<paleta de colores.png>)
   ![paleta de colores 2](<paleta de colores 2.png>)

## 7. Página desplegada 
![Text Analyzer](<Text Analyzer.png>)

