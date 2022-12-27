const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
   


}


// agregar nuevas propiedades al objeto
producto.imagen = "imagen2.jpg";
producto.disponible = false;
delete producto.imagen;

console.log(producto);

