// Importa Schema y model desde mongoose
import { Schema, model } from "mongoose";

// Define el esquema para el carrito de compras
const CartSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Referencia al usuario
  products: [
    {
      product: { type: Schema.Types.ObjectId, ref: "Product", required: true }, // Referencia al producto
      quantity: { type: Number, required: true } // Cantidad del producto
    }
  ]
});

// Exporta el modelo Cart basado en el esquema
export default model("Cart", CartSchema);
