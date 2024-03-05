import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import { Op } from "sequelize";

import { responseApi } from "../config/response.js";

const model = initModels(sequelize);

const like = async (req, res) => {
    try {
        let { user_id, res_id } = req.body
        let likeRes = {
            user_id,
            res_id
        }
        await model.like_res.create(likeRes)
        responseApi(res, 200, "", "Success")
    } catch (err) {
        responseApi(res, 500, "", "Unsuccess")
        console.log(err);
    }
}

const unLikeRes = async (req, res) => {
    try {
        const { user_id, res_id } = req.params;

        await model.like_res.destroy({
            where: { user_id, res_id },
        });

        responseApi(res, 200, "", "Res has been unliked")
    } catch (err) {
        responseApi(res, 500, "", "Unsuccess")
        console.log(err);
    }
}

const getLikeByRes = async (req, res) => {
    try {
        const {res_id} = req.params;

        let data = await model.like_res.findAll({
            where:{
                res_id
            }
        })

        responseApi(res, 200, data, "Get Success")
    } catch(err) {
        responseApi(res, 500, "", "Unsuccess")
        console.log(err);
    }
}

const getLikeByUser = async (req, res) => {
    try {
        const {user_id} = req.params;

        let data = await model.like_res.findAll({
            where: {
                user_id
            }
        })
        responseApi(res, 200, data, "Get Success")
    } catch (err) {
        responseApi(res, 500, "", "Unsuccess")
        console.log(err);
    }
}

export {
    like,
    unLikeRes,
    getLikeByRes,
    getLikeByUser
}