//importo
import ProductModel from "../models/product.model.js";

class ProductDAO {

  //Crea un nuevo producto
  async create(product) {
    return await ProductModel.create(product);
  }

  //Encuentra un producto por su ID
  async findById(id) {
    return await ProductModel.findById(id);
  }

  //Encuentra todos los productos
  async findAll() {
    return await ProductModel.find();
  }

  //Actualiza un producto por su ID
  async update(id, product) {
    return await ProductModel.findByIdAndUpdate(id, product, { new: true });
  }

  //Elimina un producto por su ID
  async delete(id) {
    return await ProductModel.findByIdAndDelete(id);
  }
}

//exporto
export default new ProductDAO();
