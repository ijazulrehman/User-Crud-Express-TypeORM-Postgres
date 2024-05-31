import express from 'express';
import { validateRequest } from './../../middlewares/Validator';
import { createSchema,updateSchema } from './../../validations';
import userController from '../../controllers/user/user.controller';

const router = express.Router();

router.get('/', userController.list);
router.get('/:id', userController.detail);
router.post('/', validateRequest(createSchema), userController.create);
router.put('/:id', validateRequest(updateSchema),userController.update);
router.delete('/:id', userController.remove);

export default router;
