const USUARIO = "Pablo";
const CLAVE = "Nini2026";

window.onload = function () {
    if (localStorage.getItem("logueado") === "si") {
        document.getElementById("login").style.display = "none";
        document.getElementById("contenido").style.display = "block";
    }
}

function ingresar() {

    const usuario = document.getElementById("usuario").value;
    const clave = document.getElementById("clave").value;

    if (usuario === USUARIO && clave === CLAVE) {

        localStorage.setItem("logueado", "si");

        document.getElementById("login").style.display = "none";
        document.getElementById("contenido").style.display = "block";

    } else {

        document.getElementById("error").innerHTML = "Usuario o contraseña incorrectos";

    }

}

function cerrarSesion() {

    localStorage.removeItem("logueado");
    location.reload();

}
