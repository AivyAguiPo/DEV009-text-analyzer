import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const areatexto = document.getElementsByName('user-input')[0];
const resetbutton = document.getElementById('reset-button');
resetbutton.addEventListener('click', function () { areatexto.value = "" });//boton borrar todo
areatexto.addEventListener('keyup', function (){
  const characterCountLi = document.querySelector('.box:nth-child(1)');//obtengo el elemento con el api queryselector, getelements ,etc que es funcion del api, al obtener el elemento le asigno a una constante para poder modificar un atributo de ese elemento
  const characterCountExcludingSpacesli = document.querySelector('.box:nth-child(2)');
  const wordCountli = document.querySelector('.box:nth-child(3)');
  const numberCountli = document.querySelector('.box:nth-child(4)');
  const numberplusli = document.querySelector('.box:nth-child(5)');
  const averageWordlengthli = document.querySelector('.box:nth-child(6)');
  const characterCount = analyzer.getCharacterCount(areatexto.value);//analyzer tiene sus funciones , getcharas
  const wordCount = analyzer.getWordCount(areatexto.value);
  characterCountLi.innerHTML = `Caracteres: ${characterCount}`; //literal string ${};template strings es una string que contiene variables en su interior, para hacer el llamado a la variable se utiliza "${}"
  wordCountli.innerHTML = `Palabras: ${wordCount}`;
  const numberCount = analyzer.getNumberCount(areatexto.value);
  numberCountli.innerHTML = `Numeros: ${numberCount}`;
  const numberplus = analyzer.getNumberSum(areatexto.value);
  numberplusli.innerHTML = `Suma de números: ${numberplus}`;
  const characterCountExcludingSpaces = analyzer.getCharacterCountExcludingSpaces(areatexto.value);
  characterCountExcludingSpacesli.innerHTML = `Caracteres sin espacios: ${characterCountExcludingSpaces}`;
  const averageWordlength = analyzer.getAverageWordLength(areatexto.value);
  averageWordlengthli.innerHTML = `Promedio longitud: ${averageWordlength}`;
});



