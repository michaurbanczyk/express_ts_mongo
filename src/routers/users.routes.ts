import { Router } from 'express';
import UsersController from '@controllers/users.controller';

const userRoutes = Router();
const userController = new UsersController();

userRoutes.get('/users', userController.getUsers);

userRoutes.get('/users/:id', userController.getUserById);

userRoutes.post('/users', userController.createUser);

userRoutes.put('/users/:id', userController.updateUser);

userRoutes.delete('/users/:id', userController.deleteUser);

export default userRoutes;
