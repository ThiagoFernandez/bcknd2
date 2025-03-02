//Import
import dotenv from "dotenv";
import mongoose from "mongoose";

// Cargar variables de entorno desde el archivo .env
dotenv.config();

// Obtener la URI de conexión desde las variables de entorno
const URI = process.env.MONGODB_URI;

// Conectar a MongoDB
mongoose.connect(URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });
