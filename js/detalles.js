

const parametroCodigo = new URLSearchParams(window.location.search);

let listaProductos = JSON.parse(localStorage.getItem('listaProductosKey')) || [];
let proBuscado = listaProductos.find((producto)=>{return producto.codigo === parametroCodigo.get('codigo')});

console.log(proBuscado)
//dibujar la card
let detalle = document.querySelector('#seccionDetalle');
detalle.innerHTML=`<div class="card mb-3">
<div class="row g-0">
  <div class="col-md-4">
    <img
      src="${proBuscado.imagen}"
      class="img-fluid rounded-start"
      alt="${proBuscado.modelo}"
    />
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${proBuscado.modelo}</h5>
      <p class="card-text"> Detalle del Producto:
        ${proBuscado.descripcion}
      </p>
      <p class="card-text">
        Precio:
        <span class="badge rounded-pill bg-info"
          >$${proBuscado.precio}</span
        >
      </p>
      <p class="card-text">
        Cantidad de Productos:
        <span>${proBuscado.stock}</span
        >
      </p>
      <a href="./error404.html" class="btn btn-warning my-5"><i class="bi bi-cart2"> Comprar</i></a>
    </div>
  </div>
</div>
</div>`