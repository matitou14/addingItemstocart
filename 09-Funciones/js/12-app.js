const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audífonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
]

const nuevoArreglo = carrito.map( (producto) => {
    return `${producto.nombre} - Precio: ${producto.precio}`;
});

carrito.forEach((producto) => console.log( `${producto.nombre} - Precio: ${producto.precio}`));

console.log(nuevoArreglo);
