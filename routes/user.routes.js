import { Router } from 'express';

const userRouter = Router();

userRouter.get('/', (req, res) => res.send({ title: 'GET all users' }));

userRouter.post('/:id', (req, res) => res.send({ title: 'CREATE new user' }));

userRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE user' }));

userRouter.get('/:id', (req, res) => res.send({ title: 'GET user details' }));

userRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE user' }));

export default userRouter;
