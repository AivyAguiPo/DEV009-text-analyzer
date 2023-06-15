import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const areatexto = document.getElementsByName('user-input')[0];
const resetbutton = document.getElementById('reset-button');
const characterCountLi = document.querySelector('.box:nth-child(1)');//obtengo el elemento con el api queryselector, getelements ,etc que es funcion del api, al obtener el elemento le asigno a una constante para poder modificar un atributo de ese elemento
const characterCountExcludingSpacesli = document.querySelector('.box:nth-child(2)');
const wordCountli = document.querySelector('.box:nth-child(3)');
const numberCountli = document.querySelector('.box:nth-child(4)');
const numberplusli = document.querySelector('.box:nth-child(5)');
const averageWordlengthli = document.querySelector('.box:nth-child(6)');
resetbutton.addEventListener('click', function () { 
  areatexto.value = "" 
  characterCountLi.innerHTML = 'Caracteres: 0'; //literal string ${};template strings es una string que contiene variables en su interior, para hacer el llamado a la variable se utiliza "${}"
  wordCountli.innerHTML = 'Palabras: 0';
  numberCountli.innerHTML = 'Numeros: 0';
  numberplusli.innerHTML = 'Suma de números: 0';
  characterCountExcludingSpacesli.innerHTML = 'Caracteres sin espacios: 0';
  averageWordlengthli.innerHTML = 'Promedio longitud: 0';
});//boton borrar todo
areatexto.addEventListener('keyup', function (){
  const characterCount = analyzer.getCharacterCount(areatexto.value);//analyzer tiene sus funciones , getcharas
  const wordCount = analyzer.getWordCount(areatexto.value);
  const numberCount = analyzer.getNumberCount(areatexto.value);
  const numberplus = analyzer.getNumberSum(areatexto.value);
  const characterCountExcludingSpaces = analyzer.getCharacterCountExcludingSpaces(areatexto.value);
  const averageWordlength = analyzer.getAverageWordLength(areatexto.value);
  characterCountLi.innerHTML = `Caracteres: ${characterCount}`; //literal string ${};template strings es una string que contiene variables en su interior, para hacer el llamado a la variable se utiliza "${}"
  wordCountli.innerHTML = `Palabras: ${wordCount}`;
  numberCountli.innerHTML = `Numeros: ${numberCount}`;
  numberplusli.innerHTML = `Suma de números: ${numberplus}`;
  characterCountExcludingSpacesli.innerHTML = `Caracteres sin espacios: ${characterCountExcludingSpaces}`;
  averageWordlengthli.innerHTML = `Promedio longitud: ${averageWordlength}`;
});



