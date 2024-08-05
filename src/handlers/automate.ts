import { Request, Response } from 'express';

export function automate (req: Request, res: Response) {
  // const { body } = req;
  // const { command } = body;
  // const result = execSync(command).toString();
  res.send('result');
}