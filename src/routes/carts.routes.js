import { Router } from "express";
import CartRepository from "../repositories/cart.repository.js";
import ProductRepository from "../repositories/product.repository.js";
import { isUser } from "../middlewares/auth.js";

const router = Router();

// Ruta para crear un nuevo carrito (solo usuarios autenticados)
router.post("/", isUser, async (req, res) => {
  try {
    // Crea un carrito vacío para el usuario autenticado
    const cart = await CartRepository.create({ user: req.user._id, products: [] });
    res.status(201).json(cart); // Responde con el carrito creado
  } catch (error) {
    res.status(400).json({ error: error.message }); // Manejo de errores
  }
});

// Ruta para agregar un producto al carrito (solo usuarios autenticados)
router.post("/:cid/products", isUser, async (req, res) => {
  try {
    const { cid } = req.params; // ID del carrito
    const { productId, quantity } = req.body; // ID del producto y cantidad

    const cart = await CartRepository.findById(cid); // Busca el carrito por ID
    if (!cart) {
      return res.status(404).json({ error: "Cart not found" }); // Si no se encuentra el carrito, responde con error
    }

    // Verifica si el producto ya está en el carrito
    const product = cart.products.find(p => p.product._id.toString() === productId);
    if (product) {
      product.quantity += quantity; // Si el producto ya existe, actualiza la cantidad
    } else {
      cart.products.push({ product: productId, quantity }); // Si no existe, lo agrega al carrito
    }

    await CartRepository.save(cart); // Guarda los cambios en el carrito
    res.status(200).json(cart); // Responde con el carrito actualizado
  } catch (error) {
    res.status(400).json({ error: error.message }); // Manejo de errores
  }
});

export default router;
