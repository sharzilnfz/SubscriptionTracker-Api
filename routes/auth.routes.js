import { Router } from 'express';

const authRouter = Router();

authRouter.post('/Sign-up', (req, res) => res.send({ title: 'Sign-Up' }));
authRouter.post('/Sign-in', (req, res) => res.send({ title: 'Sign-in' }));
authRouter.post('/Sign-out', (req, res) => res.send({ title: 'Sign-out' }));

export default authRouter;
