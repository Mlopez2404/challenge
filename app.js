// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []

function agregarAmigo() {
    let inputNombre = document.getElementById('amigo');
    let nombre = inputNombre.value;
    if (nombre == '') {
        alert('Por favor inserte un nombre');
    }
    else {
        amigos.push(nombre);
        inputNombre.value = '';
        console.log(amigos);
    }

}