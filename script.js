// ===========================
// CONFIGURACIÓN DEL LOGIN
// ===========================

const USUARIO = "Pablo";
const CLAVE = "Nini2026";

// ===========================
// INICIO
// ===========================

window.onload = function () {

    if (localStorage.getItem("logueado") === "si") {
        mostrarAgenda();
    }

    cargarTareas();

};

// ===========================
// LOGIN
// ===========================

function ingresar() {

    const usuario = document.getElementById("usuario").value.trim();
    const clave = document.getElementById("clave").value;

    if (usuario === USUARIO && clave === CLAVE) {

        localStorage.setItem("logueado", "si");
        mostrarAgenda();

    } else {

        document.getElementById("error").textContent =
            "Usuario o contraseña incorrectos";

    }

}

function mostrarAgenda() {

    document.getElementById("login").style.display = "none";
    document.getElementById("contenido").style.display = "block";

}

function cerrarSesion() {

    localStorage.removeItem("logueado");
    location.reload();

}

// Permite ingresar con ENTER

document.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {

        if (document.getElementById("login").style.display !== "none") {
            ingresar();
        }

    }

});

// ===========================
// AGENDA
// ===========================

const botonAgregar = document.getElementById("agregar");
const lista = document.getElementById("listaTareas");

botonAgregar.addEventListener("click", agregarTarea);

function agregarTarea() {

    const titulo = document.getElementById("titulo").value;
    const descripcion = document.getElementById("descripcion").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;

    if (titulo.trim() === "") {
        alert("Ingrese un título.");
        return;
    }

    const tarea = {
        titulo,
        descripcion,
        fecha,
        hora
    };

    let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

    tareas.push(tarea);

    localStorage.setItem("tareas", JSON.stringify(tareas));

    mostrarTareas();

    document.getElementById("titulo").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("hora").value = "";

}

function cargarTareas() {

    mostrarTareas();

}

function mostrarTareas() {

    const tareas = JSON.parse(localStorage.getItem("tareas")) || [];

    lista.innerHTML = "";

    if (tareas.length === 0) {

        lista.innerHTML = "<li>No hay tareas pendientes.</li>";

        return;

    }

    tareas.forEach((tarea, indice) => {

        const li = document.createElement("li");

        li.innerHTML = `
            <h3>${tarea.titulo}</h3>
            <p>${tarea.descripcion}</p>
            <br>
            📅 ${tarea.fecha} &nbsp;&nbsp; ⏰ ${tarea.hora}
            <br><br>
            <button class="eliminar" onclick="eliminarTarea(${indice})">
                Eliminar
            </button>
        `;

        lista.appendChild(li);

    });

}

function eliminarTarea(indice) {

    let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

    tareas.splice(indice, 1);

    localStorage.setItem("tareas", JSON.stringify(tareas));

    mostrarTareas();

}
