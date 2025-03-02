import { hashSync, compareSync, genSaltSync } from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "tafp";

// Hashea una contraseña
export const createHash = (password) => hashSync(password, genSaltSync(10));

// Compara una contraseña con su hash almacenado
export const isValidPassword = (password, passwordHash) => compareSync(password, passwordHash);

// Genera un token JWT con validez de 30 días
export const generateToken = (user) => jwt.sign({ user }, JWT_SECRET, { expiresIn: "30d" });

// Verifica y decodifica un token JWT
export const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
};
