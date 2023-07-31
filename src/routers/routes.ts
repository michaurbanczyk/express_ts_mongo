import { Router, Request, Response } from 'express';

const general = Router();

general.get('/', async (req: Request, res: Response) => {
  try {
    res.status(200).send('Hello World!');
  } catch (e) {
    res.status(500).send(e.message);
  }
});

general.get('/api', async (req: Request, res: Response) => {
  try {
    res.status(200).send('This is an API endpoint!');
  } catch (e) {
    res.status(500).send(e.message);
  }
});

general.get('/api/:id', async (req: Request, res: Response) => {
  try {
    res.status(200).json({ id: req.params.id });
  } catch (e) {
    res.status(500).send(e.message);
  }
});

export default general;
