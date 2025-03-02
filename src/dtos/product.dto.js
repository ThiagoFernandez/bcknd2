class ProductDTO {
  
  // Constructor que recibe un producto y lo transforma en un DTO
  constructor(product) {
    // Asignacion de las propiedades del producto
    this.id = product._id;
    this.name = product.name;
    this.description = product.description;
    this.price = product.price;
    this.stock = product.stock;
  }
}

//export
export default ProductDTO;
