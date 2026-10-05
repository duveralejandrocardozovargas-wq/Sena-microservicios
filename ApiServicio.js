class ApiServicio {
  constructor() {
    this.productos = [
      new Producto(1, "Tenis running", 180000),
      new Producto(2, "Bota casual", 220000),
      new Producto(3, "Sandalia de cuero", 95000),
      new Producto(4, "Zapato formal", 250000),
      new Producto(5, "Slip-on urbano", 140000)
    ];
  }

  obtenerProductos() {
    return this.productos;
  }
}
