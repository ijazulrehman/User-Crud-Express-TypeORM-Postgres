import express from 'express';
import Joi from 'joi';

export const validateRequest = (schema: Joi.ObjectSchema) => {
  return (
    req: any,
    res: express.Response,
    next: express.NextFunction,
  ) => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      return res.status(400).json({
        error: error.details.map((detail) => detail.message).join(', '),
      });
    }
    req.value = req.value || {};
    req.value.body = value;
    next();
  };
};
