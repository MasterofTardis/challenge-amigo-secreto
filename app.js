let amigos = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        let boton = document.querySelector(".button-add");
    boton.style.backgroundColor = "#05DF05"; // Cambia el color al presionar
    setTimeout(() => {
        boton.style.backgroundColor = "#C4C4C4"; // Vuelve al color original después de 200ms
    }, 200);
        agregarAmigo();
    }
});

function resaltarBoton() {
    let boton = document.querySelector(".button-add");
    boton.style.backgroundColor = "#05DF05"; 
    setTimeout(() => {
        boton.style.backgroundColor = "#C4C4C4"; 
    }, 200);
}

document.querySelector(".button-add").addEventListener("click", () => {
    resaltarBoton();
});


function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    let regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/; 
    if (nombre === "" || !regex.test(nombre)) {
        alert("Por favor, ingrese un nombre válido (solo letras y espacios).");
        return;
}

amigos.push(nombre);
    input.value = "";
    mostrarLista();
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for (let amigo of amigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    
    asignarTextoElemento("#resultado","El amigo secreto es: " + amigoSorteado);
}