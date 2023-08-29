const carrito = ['Producto 1' , 'Producto 2', 'Producto 3' ]
console.log(carrito);

carrito.map(producto => {
    return 'el producto es ' + producto
});

// en este caso, el map no modifica el array original,
// sino que crea uno nuevo