import Producto from "./productos.js";

let listaProductos =
  JSON.parse(localStorage.getItem("listaProductosKey")) || [];

const modalFormProducto = new bootstrap.Modal(
  document.querySelector("#modalProducto")
);
const btnCrearProducto = document.querySelector("#btnCrearProducto");
let codigo = document.querySelector("#codigo");
let modelo = document.querySelector("#modelo");
let descripcion = document.querySelector("#descripcion");
let imagen = document.querySelector("#imagen");
let precio = document.querySelector("#precio");
let formulario = document.querySelector("#formProducto");
let productoNuevo = true;

btnCrearProducto.addEventListener("click", mostrarFormulario);
formulario.addEventListener("submit", crearProducto);

cargaInicial();

function cargaInicial() {
  if (listaProductos.length > 0) {
    listaProductos.map((producto) => {
      crearFila(producto);
    });
  }
}

function crearFila(producto) {
  let tablaProducto = document.querySelector("#tablaProducto");
  tablaProducto.innerHTML += `<tr>
    <th scope="row">${producto.codigo}</th>
    <td>${producto.modelo}</td>
    <td>${producto.descripcion}</td>
    <td>${producto.imagen}</td>
    <td>${producto.precio}</td>
    <td>
      <button class="btn btn-warning" onclick="editarProducto('${producto.codigo}')">
        <i class="bi bi-pencil-square"></i>
      </button>
      <button class="btn btn-danger" onclick="borrarProducto('${producto.codigo}')">
        <i class="bi bi-x-square"></i>
      </button>
    </td>
  </tr>`;
}

function mostrarFormulario() {
  productoNuevo = true;

  limpiarFormulario();
  modalFormProducto.show();
  codigo.value = uuidv4();
}

function crearProducto(e) {
  e.preventDefault();

  if (productoNuevo) {
    generarProducto();
  } else {
    actualizarProducto();
  }
}

function generarProducto() {
  //crear una pelicula
  const nuevaProducto = new Producto(
    codigo.value,
    modelo.value,
    descripcion.value,
    imagen.value,
    precio.value
  );

  listaProductos.push(nuevaProducto);

  guardarDatosEnLS();

  limpiarFormulario();

  crearFila(nuevaProducto);

  Swal.fire(
    "Producto creado",
    "El Producto fue creada correctamente",
    "success"
  );

  modalFormProducto.hide();
}

function limpiarFormulario() {
  formulario.reset();

  modelo.className = "form-control";
  descripcion.className = "form-control";
  imagen.className = "form-control";
  precio.className = "form-control";
  codigo.className = "form-control";
}

function guardarDatosEnLS() {
  localStorage.setItem("listaProductosKey", JSON.stringify(listaProductos));
}

window.borrarProducto = function (codigo) {
  Swal.fire({
    title: "Eliminar Producto",
    text: "Esta por eliminar el producto seleccionada, no puede revertir este paso",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Borrar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      let copiaListaProductos = listaProductos.filter(
        (producto) => producto.codigo != codigo
      );
      listaProductos = copiaListaProductos;

      guardarDatosEnLS();

      actualizarTabla();
      Swal.fire(
        "Producto eliminado",
        "El producto seleccionada se borro correctamente",
        "success"
      );
    }
  });
};

function actualizarTabla() {
  let tablaProducto = document.querySelector("#tablaProducto");
  tablaProducto.innerHTML = "";
  cargaInicial();
}

window.editarProducto = function (codigoBuscado) {
  productoNuevo = false;

  modalFormProducto.show();

  let proBuscado = listaProductos.find(
    (producto) => producto.codigo === codigoBuscado
  );

  codigo.value = proBuscado.codigo;
  modelo.value = proBuscado.modelo;
  descripcion.value = proBuscado.descripcion;
  imagen.value = proBuscado.imagen;
  precio.value = proBuscado.precio;
};

function actualizarProducto() {
  let posicionProducto = listaProductos.findIndex(
    (producto) => producto.codigo === codigo.value
  );

  listaProductos[posicionProducto].modelo = modelo.value;
  listaProductos[posicionProducto].descripcion = descripcion.value;
  listaProductos[posicionProducto].imagen = imagen.value;
  listaProductos[posicionProducto].precio = precio.value;

  guardarDatosEnLS();

  actualizarTabla();

  modalFormProducto.hide();

  limpiarFormulario();
}
