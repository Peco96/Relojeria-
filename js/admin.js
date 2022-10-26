import Productos from "./productos.js";

let listaDeProductos = JSON.parse(localStorage.getItem("listaProductoskey")) || [];

const modalFormProducto = new bootstrap.Modal(
  document.querySelector("#modalProducto")
);

const btnCrearProducto = document.querySelector("#btnCrearProducto");
let codigo = document.querySelector("#codigo");
let nombre = document.querySelector("#nombre");
let descripcion = document.querySelector("#descripcion");
let imagen = document.querySelector("#imagen");
let precio = document.querySelector("#precio");
let marca = document.querySelector("#marca");
let formulario = document.querySelector("#formProducto");

btnCrearProducto.addEventListener("click", mostarformulario);
formulario.addEventListener("submit", crearProducto);

function mostarformulario() {
  modalFormProducto.show();
  codigo.value = uuidv4();
}

function crearProducto(e) {
  e.preventDefault();
  //agregar validaciones
  //crear un producto
  const nuevoProducto = new Productos(
    codigo.value,
    nombre.value,
    descripcion.value,
    imagen.value,
    precio.value,
    marca.value
  );
  console.log(nuevoProducto);
  //guardar un producto
  listaDeProductos.push(nuevoProducto);
  console.log(listaDeProductos);
  //guardar datoen el local
  guadarDatosEnLS();
  //limpiar el formulario
  limpiarFormulario();
  //cerar ventana modal
  modalFormProducto.hide();
}
function limpiarFormulario() {
  formulario.reset();
}
function guadarDatosEnLS() {
  localStorage.setItem(
    "listaProductoskey",
    JSON.stringify(" listaDeProductos")
  );
}
