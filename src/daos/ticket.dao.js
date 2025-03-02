//Importo
import TicketModel from "../models/ticket.model.js";
class TicketDAO {

  //Encuentra un ticket por su ID
  async findById(id) {
    return await TicketModel.findById(id);
  }

  //Encuentra todos los tickets
  async findAll() {
    return await TicketModel.find();
  }

  //Crea un nuevo ticket
  async create(ticket) {
    return await TicketModel.create(ticket);
  }
}

//Exporto
export default new TicketDAO();
