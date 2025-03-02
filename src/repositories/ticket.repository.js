import TicketDAO from "../daos/ticket.dao.js";

class TicketRepository {
  // Crea un nuevo ticket
  async create(ticket) {
    return await TicketDAO.create(ticket);
  }

  // Encuentra un ticket por su ID
  async findById(id) {
    return await TicketDAO.findById(id);
  }

  // Obtiene todos los tickets
  async findAll() {
    return await TicketDAO.findAll();
  }
}

// Exporta una instancia única del repositorio de tickets
export default new TicketRepository();
