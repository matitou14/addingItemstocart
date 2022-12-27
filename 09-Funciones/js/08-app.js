function sumar (a, b){
return  a + b;
}

const resultado = sumar(2, 3);
console.log(resultado);



// ejemplo avanzado

let total = 0;

function agregarCarrito (precio){
    return total += precio;
}

function calcularImpuesto (total){
    return 1.21 * total;
}


total = agregarCarrito(200);
total = agregarCarrito(400);
total =  agregarCarrito(600);
total =  agregarCarrito(3000);

const totalPagar = calcularImpuesto(total);


console.log(`Total a pagar: ${totalPagar}`);
console.log(total);