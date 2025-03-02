class TicketDTO {
  
  // Constructor que recibe un ticket y lo transforma en un DTO
  constructor(ticket) {
    // Asignacion de las propiedades del ticket
    this.id = ticket._id;
    this.code = ticket.code;
    this.purchaseDatetime = ticket.purchase_datetime;
    this.amount = ticket.amount;
    this.purchaser = ticket.purchaser;
  }
}

// eXPORT
export default TicketDTO;
