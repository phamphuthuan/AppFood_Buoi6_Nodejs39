import express from 'express'
import { getLikeByRes, getLikeByUser, like, unLikeRes } from '../controllers/likeController.js'

const likeRoute = express.Router();

likeRoute.post('/post-like', like)
likeRoute.delete('/unlike-res/:user_id/:res_id', unLikeRes)
likeRoute.get('/get-like-by-res/:res_id', getLikeByRes)
likeRoute.get('/get-like-by-user/:user_id', getLikeByUser)

export default likeRoute