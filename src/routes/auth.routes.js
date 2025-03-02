import { Router } from "express";
import UserRepository from "../repositories/user.repository.js";
import { isValidPassword, generateToken } from "../utils/index.js";

const router = Router();

// Ruta para login de usuario
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    // Busca al usuario por correo electrónico
    const user = await UserRepository.findByEmail(email);

    // Verifica si el usuario existe y si la contraseña es válida
    if (!user || !isValidPassword(password, user.password)) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Genera un token de autenticación
    const token = generateToken({ _id: user._id, role: user.role });

    // Envía el token como respuesta
    res.json({ token });
  } catch (error) {
    // Manejo de errores
    res.status(500).json({ error: error.message });
  }
});

export default router;
