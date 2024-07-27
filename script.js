
alert('Bienvenido a la tienda');


const relojes = [
  { id: 1, nombre: 'Naviforce 9163', precio: 3000 },
  { id: 2, nombre: 'Naviforce 8045', precio: 2500 },
  { id: 3, nombre: 'Lige 10045', precio: 2850 },
  { id: 4, nombre: 'Lige 9920', precio: 2300 },
  { id: 5, nombre: 'Casio Merlin', precio: 4500 }
];


function mostrarMenu(relojes) {
  let menu = 'Relojes disponibles:\n';
  relojes.forEach(reloj => {
    menu += `${reloj.id}. ${reloj.nombre} - $${reloj.precio}\n`;
  });
  menu += '\n1. Filtrar por precio (más caro a más barato)\n';
  menu += '2. Filtrar por precio (más barato a más caro)\n';
  menu += '3. Agregar reloj al carrito\n';
  menu += '4. Finalizar compra\n';
  return menu;
}


const carrito = [];

function agregarAlCarrito(id) {
  const reloj = relojes.find(r => r.id === id);
  if (reloj) {
    carrito.push(reloj);
    alert(`Agregaste ${reloj.nombre} al carrito.`);
  } else {
    alert('Reloj no encontrado.');
  }
}

function filtrarRelojes(opcion) {
  let relojesFiltrados = [];
  if (opcion === '1') {
    relojesFiltrados = relojes.slice().sort((a, b) => b.precio - a.precio);
  } else if (opcion === '2') {
    relojesFiltrados = relojes.slice().sort((a, b) => a.precio - b.precio);
  }
  alert(mostrarMenu(relojesFiltrados));
}

function finalizarCompra() {
  if (carrito.length === 0) {
    alert('No agregaste nada...');
    return;
  }
  
  let resumen = 'Artículos en tu carrito:\n';
  let total = 0;
  
  carrito.forEach(reloj => {
    resumen += `${reloj.nombre} - $${reloj.precio}\n`;
    total += reloj.precio;
  });
  
  resumen += `\nTotal a pagar: $${total}`;
  
  alert(resumen);
  alert('Gracias por su compra');
}


let opcion;
do {
  opcion = prompt(mostrarMenu(relojes));
  switch (opcion) {
    case '1':
    case '2':
      filtrarRelojes(opcion);
      break;
    case '3':
      const id = parseInt(prompt('Ingresa el numero del modelo que desa /1 /2 /3 /4 /5:'));
      agregarAlCarrito(id);
      break;
    case '4':
      finalizarCompra();
      break;
    default:
      if (opcion !== null) {
        alert('No exiiste');
      }
  }
} while (opcion !== null);

alert('Gracias por visitar la tienda, vuelve pronto');
