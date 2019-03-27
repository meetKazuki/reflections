import express from 'express';
import ReflectionController from '../controllers/ReflectionControllerJSON';
import Reflection from '../controllers/ReflectionControllerDB';
import User from '../controllers/UserControllerDB';
import Auth from '../middleware/Auth';

const router = express.Router();

// Handle requestss on the /api/v1 endpoint
router.get('/', (req, res) => res.status(200).json({
  status: 200,
  message: 'Welcome to Reflections API v1',
}));

/**
 * API v1 Endpoints
 */


router.post('/reflections', ReflectionController.create);
router.get('/reflections', ReflectionController.getAll);
router.get('/reflections/:id', ReflectionController.getOne);
router.patch('/reflections/:id', ReflectionController.update);
router.delete('/reflections/:id', ReflectionController.delete);

/**
 * API v2 Endpoints
 */

// Handle POST requests
router.post(
  '/reflections',
  Auth.verifyToken,
  Reflection.createReflection,
);
router.post(
  '/users',
  User.createUser,
);
router.post(
  '/users/login',
  User.loginUser,
);

// Handle GET requests
router.get(
  '/reflections',
  Auth.verifyToken,
  Reflection.getAllReflections,
);
router.get(
  '/reflections/:id',
  Auth.verifyToken,
  Reflection.getOneReflecton,
);

// Handle PATCH requests
router.patch(
  '/reflections/:id',
  Auth.verifyToken,
  Reflection.updateReflection,
);

// Handle DELETE requests
router.delete(
  '/reflections/:id',
  Auth.verifyToken,
  Reflection.deleteReflection,
);
router.delete(
  '/users/me',
  Auth.verifyToken,
  User.deleteUser,
);

export default router;
