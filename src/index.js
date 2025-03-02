import express from "express";
import dotenv from "dotenv";

// Rutas
import userRoutes from "./routes/users.routes.js";
import authRoutes from "./routes/auth.routes.js";
import productRoutes from "./routes/products.routes.js";
import cartRoutes from "./routes/carts.routes.js";

// Configuración de Passport y base de datos
import passport from "./config/passport.js";
import "./database/index.js"; // Importar la conexión a MongoDB

// Cargar variables de entorno desde el archivo .env
dotenv.config();

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Inicializar Passport
app.use(passport.initialize());

// Rutas
app.use("/users", userRoutes);
app.use("/auth", authRoutes); // Registrar la ruta de autenticación
app.use("/products", productRoutes); // Registrar la ruta de productos
app.use("/carts", cartRoutes); // Registrar la ruta de carritos

// Puerto de la aplicación
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
