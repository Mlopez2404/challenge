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
        console.log(amigos[index]);
        let nombre = '<li>' + amigos[index] + '</li>';
        inputLista.innerHTML += nombre;
    }
}
