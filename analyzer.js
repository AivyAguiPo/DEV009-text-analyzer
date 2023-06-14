const analyzer = {  
  getCharacterCount: (text) => {//getCharacterCount es definida como función que toma el parámetro llamado `text`
    return text.length; //*length devuelve el largo del string incluido el espacio osea el numero de elementos(cantidad de elementos encontrados en el texto)
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => { // getCharacterCountExcludingSpaces es definida como función que toma el parámetro llamado `text`
    const elementx =text.replace(/[^\w\s]|_/g, "").replace(/\s+/g, ""); // se utiliza replace() para eliminar los caracteres no alfanuméricos y los guion bajo del texto con la expresión regular `/[^\w\s]|_/g`, para eliminar los espacios multiples y dejar un solo espacio entre palabras se usa /\s+/g
    const CharacterCountExcludingSpaces = elementx.length;//devuelve el número de caracteres en el texto después de eliminar los espacios
    return CharacterCountExcludingSpaces; // ejecución del código
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getWordCount: (text) => { 
    const elementw =text.split(" "); // funcion del string que divide el texto por un delimitador y devuelve un arreglo `elementw`
    const elementsWordCount =elementw.length;//cuenta los elementos
    const words =[]; //declaro un arreglo vacio -words mi array
    for (let i= 0; i< elementsWordCount; i++){
      const element= elementw[i];// acceder un elemento del array por indice 
      if(element){
       words.push(element)
      }// si element es diferente de vacio 
    }
    const wordsCount=words.length;
    return wordsCount
    
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    const elements =text.split(" "); // la función split separa la cadena text con el espacio (" "), cada palabra o número se convierte en elemento en el array `elements`
    const elementsCount =elements.length;//elementsCount se le asigna con la longitud del array `elements`, dando el número total de elementos
    const numbers =[]; //declaro un arreglo vacio llamado `numbers`, para almacenar los elementos numéricos encontrados en el texto
    //la función del for es iterar sobre cada elemento en el array `elements `
    for (let i= 0; i< elementsCount; i++){// si i=0 que comienza desde 0 ; i es menor a la cantidad de elementos aumenta en 1
      const element= Number(elements[i]);// el elemento en el bucle se convierte en número utilizando la función `Number()` 
      if (!isNaN(element)&&element){ //la función `isNaN()`verifica si `element`no es un valor NaN(no es número), y `element` diferente de cero,esto hace que solo se consideren elementos númericos
        numbers.push(element) //si el elemento es un número valido ,se agrega al array numbers utilizando `push()`
      }
    }
    const numberCount=numbers.length;// a numberCount da la longitud del array numbers (cantidad de elementos números encontrados en el texto) 
    return numberCount
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    const elements =text.split(" "); // la función split separa la cadena text con el espacio (" "), cada palabra o número se convierte en elemento en el array `elements`
    const elementsCount =elements.length;//cuenta los elementos
    let total = 0; 
    for (let i= 0; i< elementsCount; i++){
      const element= Number(elements[i]);
      if (!isNaN(element)){total+=element}
    }
    return total
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {    
    const wordL = text.split(" ");//la función split separa la cadena text con el espacio (" "), cada palabra o número se convierte en elemento en el array `wordL`
    let lengthTotal = 0;
    for (let i=0; i < wordL.length; i++){
      lengthTotal += wordL[i].length;
    }
    const averageWord = lengthTotal / wordL.length; 
    const averageWordL = averageWord.toFixed(2);
    const averageWordFinal = Number(averageWordL);
    return averageWordFinal;
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;
