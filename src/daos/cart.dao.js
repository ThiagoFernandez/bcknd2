// Importo el modelo Cart para interactuar con la base de datos
import Cart from "../models/cart.model.js";

// Clase para manejar las operaciones de carrito
class CartDAO {
  
// Crea un nuevo carrito
  async create(cart) {
    const newCart = new Cart(cart);
    return await newCart.save();
  }

// Encuentra un carrito por su ID
  async findById(id) {
    return await Cart.findById(id).populate("products.product");
  }

// Guarda l carrito (nuevo oactualizado)
  async save(cart) {
    return await cart.save();
  }
}

// Exporto
export default new CartDAO();
