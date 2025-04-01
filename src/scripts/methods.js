// map()
const preciosDolares = [10, 20, 30]; 
const preciosEuros = preciosDolares.map(dolar => dolar * 0.95); 
//console.log(preciosEuros); // [9.5, 19, 28.5]


// filter()
const productos = [ { nombre: 'Camisa', precio: 25, enOferta: true }, 
		    { nombre: 'Pantalón', precio: 40, enOferta: false } ]; 
const enOferta = productos.filter(producto => producto.enOferta); 
//console.log(enOferta); // [ { nombre: 'Camisa', ... } ]

// reduce()
const carrito = [15, 25, 35];
const total = carrito.reduce((acum, valor) => acum + valor, 0);
//console.log(total); // 75
