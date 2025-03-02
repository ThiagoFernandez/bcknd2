import UserDAO from "../daos/user.dao.js";

class UserRepository {
  // Crea un nuevo usuario
  async create(user) {
    return await UserDAO.create(user);
  }

  // Encuentra un usuario por su ID
  async findById(id) {
    return await UserDAO.findById(id);
  }

  // Encuentra un usuario por su correo electrónico
  async findByEmail(email) {
    return await UserDAO.findByEmail(email);
  }

  // Actualiza un usuario por su ID
  async update(id, user) {
    return await UserDAO.update(id, user);
  }

  // Elimina un usuario por su ID
  async delete(id) {
    return await UserDAO.delete(id);
  }
}

// Exporta una instancia única del repositorio de usuarios
export default new UserRepository();
