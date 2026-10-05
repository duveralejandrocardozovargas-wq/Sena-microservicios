const apiServicio = new ApiServicio();
const facturacion = new Facturacion();
const carrito = [];

const listaProductos = document.getElementById("lista-productos");
const zonaCarrito = document.getElementById("carrito");
const zonaFactura = document.getElementById("factura");
const botonFactura = document.getElementById("btn-generar-factura");

function mostrarProductos() {
  const productos = apiServicio.obtenerProductos();
  listaProductos.innerHTML = "";

  for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];
    const item = document.createElement("div");
    item.className = "item";
    item.innerHTML =
      "<span>" + producto.nombre + " - $" + producto.precio + "</span>";

    const boton = document.createElement("button");
    boton.textContent = "Agregar";
    boton.addEventListener("click", function () {
      agregarAlCarrito(producto);
    });

    item.appendChild(boton);
    listaProductos.appendChild(item);
  }
}

function agregarAlCarrito(producto) {
  carrito.push(producto);
  mostrarCarrito();
}

function mostrarCarrito() {
  zonaCarrito.innerHTML = "";

  if (carrito.length === 0) {
    zonaCarrito.textContent = "El carrito está vacío.";
    return;
  }

  for (let i = 0; i < carrito.length; i++) {
    const producto = carrito[i];
    const linea = document.createElement("p");
    linea.textContent = producto.nombre + " - $" + producto.precio;
    zonaCarrito.appendChild(linea);
  }
}

botonFactura.addEventListener("click", function () {
  if (carrito.length === 0) {
    zonaFactura.textContent = "Agrega zapatos al carrito para generar la factura.";
    return;
  }

  zonaFactura.textContent = facturacion.generarFactura(carrito);
});

mostrarProductos();
mostrarCarrito();
