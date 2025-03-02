class CartDTO {
  
  // Constructor que recibe un carrito y lo transforma en un DTO
  constructor(cart) {
    // Asigno el ID del carrito
    this.id = cart._id;

    // Mapeo
    this.products = cart.products.map(product => ({
      productId: product.product._id,
      quantity: product.quantity
    }));
  }
}
//Export
export default CartDTO;
