import ProductDAO from "../daos/product.dao.js";

class ProductRepository {
  // Crea un nuevo producto
  async create(product) {
    return await ProductDAO.create(product);
  }

  // Encuentra un producto por su ID
  async findById(id) {
    return await ProductDAO.findById(id);
  }

  // Obtiene todos los productos
  async findAll() {
    return await ProductDAO.findAll();
  }

  // Actualiza un producto por su ID
  async update(id, product) {
    return await ProductDAO.update(id, product);
  }

  // Elimina un producto por su ID
  async delete(id) {
    return await ProductDAO.delete(id);
  }
}

// Exporta una instancia única del repositorio de productos
export default new ProductRepository();
