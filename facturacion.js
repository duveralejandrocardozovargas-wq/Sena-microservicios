class Facturacion {
  generarFactura(productos) {
    const numero = Math.floor(Math.random() * 9000) + 1000;
    const fecha = new Date().toLocaleDateString("es-CO");
    let total = 0;
    let items = "";

    for (let i = 0; i < productos.length; i++) {
      const producto = productos[i];
      total += producto.precio;
      items += "- " + producto.nombre + ": $" + producto.precio + "\n";
    }

    return (
      "Factura #" + numero + "\n" +
      "Fecha: " + fecha + "\n\n" +
      items +
      "\nTotal: $" + total
    );
  }
}
