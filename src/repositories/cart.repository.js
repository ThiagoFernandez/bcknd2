import CartDAO from "../daos/cart.dao.js";

class CartRepository {
  // Crea un nuevo carrito
  async create(cart) {
    return await CartDAO.create(cart);
  }

  // Encuentra un carrito por su ID
  async findById(id) {
    return await CartDAO.findById(id);
  }

  // Guarda o actualiza un carrito
  async save(cart) {
    return await CartDAO.save(cart);
  }
}

// Exporta una instancia única del repositorio de carritos
export default new CartRepository();
