
productos.push(new Producto(1, "PLACA VGA ASUS TUF GTX 3080 10GB V2 LHR", 341.387, "img/gtx_3080.jpg"));
productos.push(new Producto(2, "PLACA VGA RX 6700 XT 12GB ASUS TUF", 249.754, "img/rx_6700.jpg"));
productos.push(new Producto(3, "PLACA VGA RTX 3060 XC 12GB GAMING EVGA", 180.790, "img/rtx_3060.jpg"));
productos.push(new Producto(4, "PLACA VGA GIGABYTE RTX 2060 6GB", 158.651, "img/rtx_2060.jpg"));
productos.push(new Producto(5, "PLACA VGA RX 580 AFOX 8GB DDR5", 140.575, 'img/rx_580.jpg'));
productos.push(new Producto(6, "PLACA ASUS GTX 1660 TI TUF 6GB EVO", 139.909, 'img/gtx_1660.jpg'));
productos.push(new Producto(7, "PLACA VGA GTX 1650 GIGABYTE 4GB DDR6 OC", 81.772, 'img/gtx_1650.jpg'));
productos.push(new Producto(8, "PLACA VGA GTX 1050 TI MSI 4GB D5 GAMING", 67.706, 'img/gtx_1050.jpg'));
productos.push(new Producto(9, "PLACA VGA MSI GT 210 1GB DDR3 LP", 7.925, 'img/gt_210.jpg'));



productosUI(productos, '#productosContenedor');


$(document).ready(function () {    
        $('.btn-compra').on('click', comprarProducto);         
        if ("carrito" in localStorage) {
            let genericos=JSON.parse(localStorage.getItem('carrito'));            
            for (const objeto of genericos) {
                carrito.push(new Producto(objeto.id, objeto.nombre, objeto.precio, objeto.img, objeto.cantidad));                
            }            
        }       
        carritoUI(carrito);
        
    $('.dropdown-menu').click(function (e) {
        e.stopPropagation();        
    })
});

$(window).on('load',function () {   
    $('#espera').remove();
});

$("#carritoCantidad").hide();

$(document).ready(function() {
    $(".toast").toast("show");
});