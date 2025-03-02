import { Router } from "express";
import passport from "passport";

const router = Router();

// Página de inicio
router.get("/", (req, res) => {
  res.render("home", { title: "HOME" });
});

// Registro e inicio de sesión
router.get("/register", (req, res) => res.render("register", { title: "REGISTER" }));
router.get("/login", (req, res) => res.render("login", { title: "Login" }));

// Página del usuario actual (requiere autenticación)
router.get("/current", passport.authenticate("jwt", { session: false }), (req, res) => {
  if (!req.user) return res.status(401).json({ error: "Unauthorized" });
  res.render("current", { title: "CURRENT", user: req.user });
});

export default router;
