import express from 'express'
import { getRateByRes, getRateByUser, rateRes } from '../controllers/rateController.js'
const rateRoute = express.Router();

rateRoute.post('/post-rate', rateRes)
rateRoute.get('/get-rate-by-res/:res_id', getRateByRes)
rateRoute.get('/get-rate-by-user/:user_id', getRateByUser)


export default rateRoute