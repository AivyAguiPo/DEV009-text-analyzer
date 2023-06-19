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
  - `selector del DOM querySelector`: Método que se utiliza para buscar y seleccionar el primer elemento que coincida con un selector CSS , en este caso se uso para seleccionar los elementos por su clase de esta manera ***document.querySelector('.box:nth-child(1)')*** , donde se usa **:nth-child(1)** para seleccionar el primer elemento de la clase **box**.
  - `selector del DOM getElementById`: Método que se utiliza para obtener un elemento HTML con un ID específico, en este caso se utilizo para acceder y manipular el elemento con el **id="reset-button"**.
* Manejos de eventos del DOM (listeners,propagación,delegación)
  - `Event Listener para el evento **keyup** del <textarea>`: Se agrega un evento de escucha al ***areatexto*** que espera el evento ***keyup*** de soltar una tecla,después de realizarla se ejecuta una función.

  - `Event Listener para el evento **click** del <button>`: Se utiliza el método ***addEventListener()*** para agregar un escucha de eventos a un elemento, en este caso se agrega un evento de escucha a ***resetbutton*** que espera el evento de **'click'** ; que al realizarla se ejecuta una función.

* Manipulación dinámica del DOM:
  - `innerHTML`: Es una propiedad con la cual se actualiza el contenido de los ***<li>*** ,quiere decir que se establecera con los textos ingresados para cada uno de ellos.

## 5. JavaScrip
Con JavaSccrip se agrego interactividad y funcionalidad a las 6 funciones declaradas :
- `analyzer.getWordCount(text)`: en esta función retorna el recuento de palabras que se encuentran en el parámetro text de tipo string.
- `analyzer.getCharacterCount(text)`: en esta función retorna el recuento de caracteres que se encuentran en el parámetro text de tipo string.
- `nalyzer.getCharacterCountExcludingSpaces(text`: en esta función retorna el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro text de tipo string.
- `analyzer.getNumberCount(text)`: en esta función retorna cúantos números se encuentran en el parámetro text de tipo string.
- `analyzer.getNumberSum(text)`: en esta función retorna la suma de todos los números que se encuentran en el parámetro text de tipo string.
- `analyzer.getAverageWordLength(text)`: en esta función retorna la longitud media de palabras que se encuentran en el parámetro text de tipo string. En este caso usa 2 dígitos decimales.


## 6. Diseño de producto
Ultimamente los temas vintage y retro , esta muy presente en los diseños para paginas web o apps, es por ello que me incline a escoger una paleta de colores pastel. 
- Paleta de colores:
   ![paleta de colores](<paleta de colores.png>)
   ![paleta de colores 2](<paleta de colores 2.png>)
## 7. Página desplegada

![Text Analyzer](<Text Analyzer.png>)
