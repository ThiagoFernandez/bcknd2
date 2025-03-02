// Import passport para autenticación
import passport from "passport";

// Middleware para verificar si el usuario es administrador
export const isAdmin = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    if (err || !user || user.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied' });
    }
    req.user = user;
    next();
  })(req, res, next);
};

// Middleware para verificar si el usuario es un usuario regular
export const isUser = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    if (err || !user || user.role !== 'user') {
      return res.status(403).json({ error: 'Access denied' });
    }
    req.user = user;
    next();
  })(req, res, next);
};
