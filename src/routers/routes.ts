import { Router, Request, Response } from 'express';
import Controller from '@controllers/controller';

const general = Router();
const controller = new Controller();

general.get('/', async (req: Request, res: Response) => {
  await controller.getIndex(req, res);
});

general.get('/api', async (req: Request, res: Response) => {
  await controller.getApi(req, res);
});

general.get('/api/:id', async (req: Request, res: Response) => {
  await controller.getApiById(req, res);
});

export default general;
