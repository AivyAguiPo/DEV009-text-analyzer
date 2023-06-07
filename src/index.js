import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const areatexto = document.getElementsByName('user-input')[0];
const resetbutton = document.getElementById('reset-button');
//borrar todo
resetbutton.addEventListener('click', function () { areatexto.value = "" });

areatexto.addEventListener('keyup', function () {
    const li1 = document.querySelector('.box');



});





