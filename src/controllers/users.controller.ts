import { Request, Response } from 'express';
import { users } from '@utils/data';

class UsersController {
  public getUsers = (req: Request, res: Response) => {
    try {
      res.status(200).json(users);
    } catch (e) {
      res.status(500).send(e.message);
    }
  };

  public getUserById = (req: Request, res: Response) => {
    try {
      const userById = users.filter(user => user.id === parseInt(req.params.id));
      res.status(200).json(userById);
    } catch (e) {
      res.status(500).send(e.message);
    }
  };
}

export default UsersController;
