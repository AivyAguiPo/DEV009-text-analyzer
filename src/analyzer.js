const analyzer = {  
  getCharacterCount: (text) => {
    return text.length; //*length devuelve el largo del string incluido el espacio osea el numero de elementos
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {
    const elementx =text.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "");
    const CharacterCountExcludingSpaces = elementx.length;
    return CharacterCountExcludingSpaces;
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getWordCount: (text) => { 
    const words =text.split(" ");//text es el texto ,split divide el texto
    const wordCount =words.length;//No es lo mismo que esta en Index.js 
    return wordCount;  
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    const elements =text.split(" "); // separa los elementos por espacios like[al , be , 1 , 2, 13]
    const elementsCount =elements.length;//cuenta los elementos
    const numbers =[]; //declaro un arreglo de numeros vacios -numbers mi array
    for (let i= 0; i< elementsCount; i++){
      const element= Number(elements[i]);
      if (!isNaN(element)&&element){numbers.push(element)}//valido si es numero 
    }
    const numberCount=numbers.length;
    return numberCount
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    const elements =text.split(" "); // separa los elementos por espacios like[al , be , 1 , 2, 13]
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
    const wordL = text.split(" ");//separa los elementos por espacios like[al , be , 1 , 2, 13]
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
