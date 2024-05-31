import express from 'express';

// Interfaces
import IRequest from '../interfaces/IRequest';

export default async (
  req: IRequest,
  res: express.Response,
  next: express.NextFunction,
) => {
  // TODO: Here we can check authentication on each request
  next();
};
