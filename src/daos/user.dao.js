//Import
import UserModel from "../models/users.model.js";

class UserDAO {

  //Encuentra un usuario por su ID y popula el carrito
  async findById(id) {
    return await UserModel.findById(id).populate("cart");
  }

  //Encuentra un usuario por su email y popula el carrito
  async findByEmail(email) {
    return await UserModel.findOne({ email }).populate("cart");
  }

  //Crea un nuevo usuario
  async create(user) {
    return await UserModel.create(user);
  }

  //Actualiza un usuario por su ID
  async update(id, user) {
    return await UserModel.findByIdAndUpdate(id, user, { new: true });
  }

  //Elimina un usuario por su ID
  async delete(id) {
    return await UserModel.findByIdAndDelete(id);
  }
}
//Export
export default new UserDAO();
