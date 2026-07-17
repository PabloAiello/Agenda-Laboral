const botonAgregar = document.getElementById("agregar");
const lista = document.getElementById("listaTareas");

botonAgregar.addEventListener("click", function () {

    const titulo = document.getElementById("titulo").value;
    const descripcion = document.getElementById("descripcion").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;

    if (titulo.trim() === "") {
        alert("Ingrese un título para la tarea.");
        return;
    }

    // Si es la primera tarea, elimina el mensaje inicial
    if (lista.children.length === 1 &&
        lista.children[0].textContent === "No hay tareas pendientes.") {
        lista.innerHTML = "";
    }

    const tarea = document.createElement("li");

    tarea.innerHTML = `
        <strong>${titulo}</strong><br>
        ${descripcion}<br><br>
        📅 ${fecha} ⏰ ${hora}
        <br><br>
        <button class="eliminar">Eliminar</button>
    `;

    lista.appendChild(tarea);

    tarea.querySelector(".eliminar").addEventListener("click", function () {
        tarea.remove();

        if (lista.children.length === 0) {
            lista.innerHTML = "<li>No hay tareas pendientes.</li>";
        }
    });

    document.getElementById("titulo").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("hora").value = "";
});
