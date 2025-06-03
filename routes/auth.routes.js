import { Router } from 'express';
import { signIn, signOut, signUp } from '../controllers/auth.controller.js';

const authRouter = Router();

authRouter.post('/sign-up', signUp);
authRouter.post('/sign-in', signIn);
authRouter.post('/sign-out', signOut);

export default authRouter;

// ('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODNjNzAyMzk4MTkyOWQzZTNlNzYwZTciLCJpYXQiOjE3NDg4NzUwMTQsImV4cCI6MTc0ODk2MTQxNH0.Cr4b7rEThrTojrSOumreHlWhCeMg8C0liE2dqTVzhTY');
