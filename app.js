import express from 'express';

import { PORT } from './config/env.js';

import cookieParser from 'cookie-parser';
import connectToDatabase from './database/mongodb.js';
import arcjectMiddleware from './middleware/arcjet.middleware.js';
import errorMiddleware from './middleware/error.middleware.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRoutes from './routes/subscription.routes.js';
import userRouter from './routes/user.routes.js';
import workflowRouter from './routes/workflow.routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(arcjectMiddleware);

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRoutes);
app.use('/api/v1/workflows', workflowRouter);
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
