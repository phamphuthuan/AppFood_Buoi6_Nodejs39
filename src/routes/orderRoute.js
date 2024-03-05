import express from 'express'
import { order } from '../controllers/orderController.js';

const orderRoute = express.Router();

orderRoute.post('/post-order', order)

export default orderRoute