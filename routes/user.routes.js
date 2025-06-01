import { Router } from 'express';
import { getUser, getUsers } from '../controllers/user.controller.js';
import authorize from '../middleware/auth.middleware.js';

const userRouter = Router();
userRouter.get('/', getUsers);

userRouter.post('/', (req, res) => res.send({ title: 'CREATE new user' }));

userRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE user' }));

userRouter.get('/:id', authorize, getUser);

userRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE user' }));

userRouter.get('/user/:id', (req, res) =>
  res.send({ title: 'GET all user subscriptions' })
);

userRouter.get('/upcoming-renewals', (req, res) =>
  res.send({ title: 'GET upcoming renewals' })
);

export default userRouter;
