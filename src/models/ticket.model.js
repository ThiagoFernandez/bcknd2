// Importa Schema y model desde mongoose, y uuid para generar códigos únicos
import { Schema, model } from "mongoose";
import { v4 as uuidv4 } from "uuid";

// Define el esquema para el ticket
const TicketSchema = new Schema({
  code: { 
    type: String, 
    unique: true, 
    default: uuidv4, // Genera un código único por defecto
  },
  purchase_datetime: { 
    type: Date, 
    default: Date.now, // Establece la fecha de compra por defecto
  },
  amount: Number, // Monto total del ticket
  purchaser: String, // Comprador del ticket
});

// Exporta el modelo Ticket basado en el esquema
export default model("Ticket", TicketSchema);
