import { Router } from "express";
import passport from "passport";
import UserRepository from "../repositories/user.repository.js";
import UserDTO from "../dtos/user.dto.js";
import { isAdmin, isUser } from "../middlewares/auth.js";

const router = Router();

// Ruta para obtener la información del usuario actual
router.get("/current", passport.authenticate('jwt', { session: false }), (req, res) => {
  const user = new UserDTO(req.user); // Crea un DTO del usuario actual
  res.render("current", { title: "CURRENT", user }); // Renderiza la vista "current"
});

// Ruta para crear un nuevo usuario (solo administradores)
router.post("/", isAdmin, async (req, res) => {
  try {
    const user = await UserRepository.create(req.body); // Crea un nuevo usuario
    res.status(201).json(new UserDTO(user)); // Devuelve el usuario en formato DTO
  } catch (error) {
    res.status(400).json({ error: error.message }); // Manejo de errores
  }
});

// Ruta para obtener un usuario por ID (solo administradores)
router.get("/:id", isAdmin, async (req, res) => {
  try {
    const user = await UserRepository.findById(req.params.id); // Busca el usuario por ID
    if (!user) {
      return res.status(404).json({ error: "User not found" }); // Si no se encuentra, devuelve 404
    }
    res.json(new UserDTO(user)); // Devuelve el usuario en formato DTO
  } catch (error) {
    res.status(400).json({ error: error.message }); // Manejo de errores
  }
});

// Ruta para actualizar un usuario por ID (solo administradores)
router.put("/:id", isAdmin, async (req, res) => {
  try {
    const user = await UserRepository.update(req.params.id, req.body); // Actualiza el usuario
    if (!user) {
      return res.status(404).json({ error: "User not found" }); // Si no se encuentra, devuelve 404
    }
    res.json(new UserDTO(user)); // Devuelve el usuario actualizado en formato DTO
  } catch (error) {
    res.status(400).json({ error: error.message }); // Manejo de errores
  }
});

// Ruta para eliminar un usuario por ID (solo administradores)
router.delete("/:id", isAdmin, async (req, res) => {
  try {
    const user = await UserRepository.delete(req.params.id); // Elimina el usuario por ID
    if (!user) {
      return res.status(404).json({ error: "User not found" }); // Si no se encuentra, devuelve 404
    }
    res.status(204).send(); // Responde con estado 204 (sin contenido)
  } catch (error) {
    res.status(400).json({ error: error.message }); // Manejo de errores
  }
});

export default router;
