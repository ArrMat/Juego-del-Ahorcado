// dibujar ahorcado
/*let pantalla = document.getElementById("canvas-ahorcado");
let pincel = pantalla.getContext("2d");

pincel.fillStyle = "red"
pincel.fillRect(0,0,100,100);
pincel.beginpath();
pincel.strokestyle = "blue";
pincel.moveTo(25,100);
pincel.lineTo(200,100);
*/



// contador para dibujar segun intentos
let intentos = 0;


// funcion que elije palabra al azar de la lista
let secret_words = ["HTML", "CSS", "JAVASCRIPT"];
function random_word() {
    let word_number = Math.round(Math.random()*10);
    while (word_number < secret_words.length == false) {
        word_number = Math.round(Math.random()*10);
    } return secret_words[word_number];
}

//funcion que regresa guiones segun la cantidad de letras de la palabra
function guiones(palabra) {
    palabra_array= palabra.split("");
    for (let contador=0; contador<palabra_array.length; contador++) {
        palabra_array[contador] = "_ ";
    }
}
//funcion que escriba