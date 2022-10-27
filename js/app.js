let listaProductos = JSON.parse(localStorage.getItem('listaProductosKey')) || [];

//dibujar columnas
listaProductos.map((producto)=>{ crearColumna(producto)})


function crearColumna(producto){
    let grilla = document.querySelector('#grilla');
    grilla.innerHTML += `
    <aside class="col-12 col-md-4 col-lg-3 mb-3">
    <div class="card" >
      <img src="${producto.imagen}" class="card-img-top" alt="${producto.modelo}">
      <div class="card-body"> 
        <h5 class="card-title text-center">${producto.modelo}</h5> 
        <p>$${producto.precio}</p>
        <button class="btn btn-primary" onclick="detalleProducto('${producto.codigo}')">Ver detalle</button>
        <button class="btn btn-warning">Comprar</button>
      </div>
    </div>
  </aside>
    `
}

function detalleProducto(codigo){
    
    window.location.href = window.location.origin + '/pages/detalle.html?codigo='+codigo;
}