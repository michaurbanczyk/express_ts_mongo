import { Router, Request, Response } from 'express';
import UsersController from '@controllers/users.controller';

const userRoutes = Router();
const userController = new UsersController();

userRoutes.get('/', async (req: Request, res: Response) => {
  await userController.getUsers(req, res);
});

userRoutes.get('/:id', async (req: Request, res: Response) => {
  await userController.getUserById(req, res);
});

export default userRoutes;
