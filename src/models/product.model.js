// Importa Schema y model desde mongoose
import { Schema, model } from "mongoose";

// Definición del esquema del producto
const ProductSchema = new Schema({
  category: { type: String, required: true }, // Categoría del producto
  name: { type: String, required: true }, // Nombre del producto
  description: { type: String, required: true }, // Descripción del producto
  price: { type: Number, required: true }, // Precio del producto
  stock: { type: Number, required: true } // Cantidad disponible en stock
});

// Exporta el modelo Product basado en el esquema
export default model("Product", ProductSchema);
