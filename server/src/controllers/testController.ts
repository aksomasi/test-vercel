import { Request, Response } from 'express';

export class TestController {
  async addHello(req: Request, res: Response) {
    try {
      const { value } = req.body;
      const response = `Hello ${value}`;
      res.json({ message: response });
    } catch (error) {
      res.status(500).json({ error: 'Failed to process request' });
    }
  }
}