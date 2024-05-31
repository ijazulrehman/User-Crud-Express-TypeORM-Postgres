import Joi from 'joi';

export const updateSchema = Joi.object({
  password: Joi.string().min(6).max(30).optional(),
  firstName: Joi.string().min(3).max(100).optional(),
  lastName: Joi.string().min(3).max(100).optional(),
});
