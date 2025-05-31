import express from 'express';

import { PORT } from './config/env.js';

import connectToDatabase from './database/mongodb.js';
import errorMiddleware from './middleware/error.middleware.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRoutes from './routes/subscription.routes.js';
import userRouter from './routes/user.routes.js';

const app = express();

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRoutes);
app.use(errorMiddleware);

app.get('/', (req, res) => {
  res.send('Welcome to the subcription tracker API! ');
});

app.listen(PORT, async () => {
  console.log(
    `Subcription Tracker API is running on port http://localhost:${PORT}/`
  );

  await connectToDatabase();
});

export default app;
