import { Router } from "express";
import ProductRepository from "../repositories/product.repository.js";
import ProductDTO from "../dtos/product.dto.js";
import { isAdmin } from "../middlewares/auth.js"; // Asegúrate de que la ruta sea correcta

const router = Router();

// Ruta para crear un nuevo producto (solo administradores)
router.post("/", isAdmin, async (req, res) => {
  try {
    const product = await ProductRepository.create(req.body); // Crea un nuevo producto
    res.status(201).json(new ProductDTO(product)); // Responde con el producto creado en formato DTO
  } catch (error) {
    res.status(400).json({ error: error.message }); // Manejo de errores
  }
});

// Puedes agregar más rutas para obtener, actualizar y eliminar productos

export default router;
