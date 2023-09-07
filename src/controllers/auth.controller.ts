import { Request, Response, NextFunction } from 'express';

export function register(req: Request, res: Response, next: NextFunction) {
  res.send('hello');
}
