import Productos from "./productos.js";

let listaDeProductos =
  JSON.parse(localStorage.getItem("listaProductoskey")) || [];

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

cargaInicial();

function cargaInicial() {
  if (listaDeProductos.length > 0) {
    listaDeProductos.map((producto) => {
      crearfila(producto);
    });
  }
}
function crearfila(producto) {
  //console.log(producto)
  let tablaProductos = document.querySelector("#tablaProductos");
  tablaProductos.innerHTML += `<tr>
  <th scope="row">${producto.codigo}</th>
  <td>${producto.nombre}</td>
  <td>${producto.descripcion}</td>
  <td>${producto.imagen}</td>
  <td>${producto.precio}</td>
  <td>${producto.marca}</td>
  <td>
    <button class="btn btn-warning" onclick="editarPelicula('${producto.codigo}')">
      <i class="bi bi-pencil-square"></i>
    </button>
    <button class="btn btn-danger" onclick="borrarPelicula('${producto.codigo}')">
      <i class="bi bi-x-square"></i>
    </button>
  </td>
</tr>`
}

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
  //console.log(nuevoProducto);
  //guardar un producto
  listaDeProductos.push(nuevoProducto);
  //console.log(listaDeProductos);
  //guardar datoen el local
  guadarDatosEnLS();
  //limpiar el formulario
  limpiarFormulario();
  //dibujar esta peli en la tabla
  crearfila(nuevoProducto)
  //cerar ventana modal
  modalFormProducto.hide();
}
function limpiarFormulario() {
  formulario.reset();
  //resetear la clase de bootstrap form-control
  nombre.className = "form-control";
  descripcion.className = "form-control";
  imagen.className = "form-control";
  precio.className = "form-control";
  marca.className = "form-control";
}
function guadarDatosEnLS() {
  localStorage.setItem("listaProductoskey", JSON.stringify(listaDeProductos));
}
