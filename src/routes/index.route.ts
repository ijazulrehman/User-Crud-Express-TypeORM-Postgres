import * as express from 'express';

import userRouter from './user/user.route';

const router = express.Router();

router.use('/users', userRouter);

export default router;
