function productosUI(productos, id){
  $(id).empty();
  for (const producto of productos) {
     $(id).append(`<div class="card" style="width: 18rem;">
                    <img src= "${producto.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${producto.nombre}</h5>
                      <p class="card-text">${producto.precio}</p>                      
                      <a href="#" id='${producto.id}' class="btn btn-primary btn-compra">COMPRAR</a>
                    </div>
                  </div>`);
  }
}
function comprarProducto(e){
  e.preventDefault();
  const idProducto   = e.target.id;
  const existe= carrito.find(producto => producto.id == idProducto);
  if(existe == undefined){
    const seleccionado = productos.find(producto => producto.id == idProducto);
    carrito.push(seleccionado);
  }else{
    existe.agregarCantidad(1);
  }
  localStorage.setItem('carrito',JSON.stringify(carrito));
  carritoUI(carrito);
}



function carritoUI(productos){
  $('#carritoCantidad').html(productos.length);
  $('#carritoProductos').empty();
  for (const producto of productos) {
    $('#carritoProductos').append(registroCarrito(producto));
  }
  $('.btn-delete').on('click', eliminarCarrito);
  $('.btn-add').on('click', addCantidad);
  $('.btn-sub').on('click', subCantidad);
}

function registroCarrito(producto) {
  return `<p> ${producto.nombre} 
            <span class="badge badge-warning">
            $ ${producto.precio}</span>
            <span class="badge badge-warning">
            Cantidad: ${producto.cantidad}</span>
            <span class="badge badge-warning">
            Subtotal: ${producto.subTotal()}</span>
            <a id="${producto.id}" class="btn btn-info btn-add">+</a>
            <a id="${producto.id}" class="btn btn-warning btn-sub">-</a>  
            <a id="${producto.id}" class="btn btn-danger btn-delete">x</a>                                       
            </p>`  
}
function eliminarCarrito(e){
  let posicion= carrito.findIndex(producto => producto.id == e.target.id);  
  carrito.splice(posicion,1);
  carritoUI(carrito);
}
  localStorage.setItem('carrito',JSON.stringify(carrito));

function addCantidad() {  
  let producto= carrito.find(p => p.id == this.id);
  producto.agregarCantidad(1);
  $(this).parent().children()[1].innerHTML = "Cantidad: "+producto.cantidad;
  $(this).parent().children()[2].innerHTML = producto.subTotal();
  localStorage.setItem('carrito',JSON.stringify(carrito));  
}

function subCantidad() {  
  let producto= carrito.find(p => p.id == this.id);
  if( producto.cantidad >1 ){
    producto.agregarCantidad(-1);
    $(this).parent().children()[1].innerHTML = "Cantidad: "+producto.cantidad;
    $(this).parent().children()[2].innerHTML = producto.subTotal();
    localStorage.setItem('carrito',JSON.stringify(carrito));
  }   
}



