import { Schema, model } from "mongoose";

// Definir el esquema para el usuario
const UserSchema = new Schema({
    first_name: String, // Primer nombre
    last_name: String,  // Apellido
    email: { 
        type: String, 
        unique: true // Correo único
    },
    age: { 
        type: Number, 
        min: 0 // Edad mínima de 0
    },
    role: { 
        type: String, 
        default: "user" // Rol predeterminado como "user"
    },
    password: String, // Contraseña del usuario

    cart: { 
        type: Schema.Types.ObjectId, 
        ref: 'Cart' // Referencia al carrito del usuario
    }
});

// Exportar el modelo "User" basado en el esquema definido
export default model("User", UserSchema);
