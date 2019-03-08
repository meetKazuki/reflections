import express from 'express';
import Reflection from '../controllers/ReflectionJSON';
// import Reflection from '../controllers/Reflection';
// import User from '../controllers/User';
// import Auth from '../middleware/Auth';

const router = express.Router();

// Handle requestss on the /api/v1 endpoint
router.get('/', (req, res) => res.status(200).json({
  status: 200,
  message: 'Welcome to Reflections API v1',
}));

router.post('/reflections', Reflection.create);
router.get('/reflections', Reflection.getAll);
router.get('/reflections/:id', Reflection.getOne);
router.patch('/reflections/:id', Reflection.update);
router.delete('/reflections/:id', Reflection.delete);

// Handle POST requests
/*
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
); */

// Handle GET requests
/*
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
*/

export default router;
