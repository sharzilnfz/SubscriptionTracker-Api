import { Router } from 'express';
import {
  createSubscription,
  getAllUserSubscriptions,
  getSpecificSubscription,
  getUserSubscriptions,
} from '../controllers/subscription.controller.js';

import authorize from '../middleware/auth.middleware.js';

const subscriptionRoutes = Router();

subscriptionRoutes.get('/', getAllUserSubscriptions);

subscriptionRoutes.get('/:id', authorize, getSpecificSubscription);

subscriptionRoutes.get('/user/:id', authorize, getUserSubscriptions);

subscriptionRoutes.get('/upcoming-renewals', (req, res) =>
  res.send({ title: 'GET upcoming renewals' })
);

subscriptionRoutes.post('/', authorize, createSubscription);

subscriptionRoutes.put('/:id', (req, res) =>
  res.send({ title: 'UPDATE subscription' })
);

subscriptionRoutes.put('/:id/cancel', (req, res) =>
  res.send({ title: 'CANCEL subscription' })
);

subscriptionRoutes.delete('/:id', (req, res) =>
  res.send({ title: 'DELETE subscription' })
);

export default subscriptionRoutes;
