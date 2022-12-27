// variables

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const listaCursos = document.querySelector('#lista-cursos');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
let artCarrito = [];


llamarEventListener()
function llamarEventListener(){
    listaCursos.addEventListener('click', agregarCurso);
    carrito.addEventListener('click', eliminarCurso);
    vaciarCarritoBtn.addEventListener('click', () => {
        artCarrito = []; // reseteamos el arreglo

        limpiarHTML(); // eliminamos todo el html
    })
}

// funciones

function agregarCurso(e){

  
    e.preventDefault();

 if(e.target.classList.contains('agregar-carrito')){
     const cursoSeleccionado = e.target.parentElement.parentElement;
     leerDatosCurso(cursoSeleccionado);

}

}

// Elimina un curso del carrito

function eliminarCurso(e){
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');
        // elimina del arreglo de articulos carrito por el data-id
        artCarrito = artCarrito.filter(curso => curso.id !== cursoId);
       
        carritoHTML(); // iterar sobre el carrito y mostrar su html
    }
}


// lee el contenido del html al que le dimos click y extrae la informacion del curso

function leerDatosCurso(curso){
    console.log(curso);


// crear un objeto con el contenido del curso actual
const infoCurso = {
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h4').textContent,
    precio: curso.querySelector('.precio span').textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad:1,
}
//  Agrega elemento al carrito
    artCarrito = [...artCarrito, infoCurso]
    console.log(artCarrito);

    carritoHTML();

}

// Muestra el carrito
function carritoHTML (){

    // limpiar el html

    limpiarHTML();

    // recorre el carrito y genera el html
    artCarrito.forEach(curso => {
        const {imagen, titulo, precio, cantidad, id} = curso;
        const row = document.createElement('tr');
            row.innerHTML = `
                <td><img src="${imagen}" width="100"></td>    
                <td>${titulo}</td>
                <td>${precio}</td>
                <td>${cantidad}</td>
                <td><a href="#" class="borrar-curso" data-id="${id}">X</a></td>

            `;
            
            // agregar el html del carrito en el tbody

            contenedorCarrito.appendChild(row);

    })
}

// Elimina los cursos del tbody
function limpiarHTML(){
   
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }


}
