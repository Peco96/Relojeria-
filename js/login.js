import { validarNombre, validarContraseña } from "./helpers.js";

let usuario = document.getElementById("usuario");
let pass = document.getElementById("pass");
let formLogin = document.getElementById("formLog");

formLogin.addEventListener("submit", crearAdmin);

function crearAdmin(e) {
  e.preventDefault();
  if (validarNombre(usuario) && validarContraseña(pass)) {
    ir();
  }
}

usuario.addEventListener("blur", () => {
  validarNombre(usuario);
});
pass.addEventListener("blur", () => {
  validarContraseña(pass);
});

function ir() {
  if (usuario.value === "franciscopeco" && pass.value === "Reloj7280") {
    location.href = window.location.origin + "/pages/admin.html";
  } else {
    window.location.href = window.location.origin + "/index.html";
  }
}
