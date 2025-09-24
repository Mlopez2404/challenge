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
        mostrarLista();
    }
}

function mostrarLista() {
    let inputLista = document.getElementById('listaAmigos');
    inputLista.innerHTML = '';
    for (let index = 0; index < amigos.length; index++) {
        let nombre = '<li>' + amigos[index] + '</li>';
        inputLista.innerHTML += nombre;
    }
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert('No se puede sortear');
    }
    else {
        let index = Math.floor(Math.random() * amigos.length);
        console.log(index);
        let aleatorio = amigos[index];
        document.getElementById('resultado').innerHTML = 'El amigo secreto es ' + aleatorio;
    }
}
