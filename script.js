const relojes = [
  { id: 1, nombre: 'Naviforce 9163', precio: 3000 },
  { id: 2, nombre: 'Naviforce 8045', precio: 2500 },
  { id: 3, nombre: 'Lige 10045', precio: 2850 },
  { id: 4, nombre: 'Lige 9920', precio: 2300 },
  { id: 5, nombre: 'Casio Merlin', precio: 4500 }
];


if (!localStorage.getItem('relojes')) {
  localStorage.setItem('relojes', JSON.stringify(relojes));
}


const relojesStorage = JSON.parse(localStorage.getItem('relojes'));

let carrito = [];


function mostrarMenu(relojes) {
  const relojesDiv = document.querySelector('.relojes');
  relojesDiv.innerHTML = '';

  relojes.forEach(reloj => {
    const relojDiv = document.createElement('div');
    relojDiv.innerHTML = `<p>${reloj.id}. ${reloj.nombre} - $${reloj.precio}</p>
                          <button onclick="agregarAlCarrito(${reloj.id})" class="btn">Agregar al carrito</button>`;
    relojesDiv.appendChild(relojDiv);
  });
}


function agregarAlCarrito(id) {
  const reloj = relojesStorage.find(r => r.id === id);
  if (reloj) {
    carrito.push(reloj);
    alert(`Agregaste ${reloj.nombre} al carrito.`);
  } else {
    alert('Reloj no encontrado.');
  }
}


function filtrarRelojes(opcion) {
  let relojesFiltrados = [];
  if (opcion === 'caros') {
    relojesFiltrados = relojesStorage.slice().sort((a, b) => b.precio - a.precio);
  } else if (opcion === 'baratos') {
    relojesFiltrados = relojesStorage.slice().sort((a, b) => a.precio - b.precio);
  }
  mostrarMenu(relojesFiltrados);
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
  carrito = []; 
}


document.querySelector('.filtrarCaros').addEventListener('click', () => filtrarRelojes('caros'));
document.querySelector('.filtrarBaratos').addEventListener('click', () => filtrarRelojes('baratos'));
document.querySelector('.finalizarCompra').addEventListener('click', finalizarCompra);


mostrarMenu(relojesStorage);
