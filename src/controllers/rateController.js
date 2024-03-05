import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import { Op } from "sequelize";

import { responseApi } from "../config/response.js";

const model = initModels(sequelize);

const rateRes = async (req, res) => {
    try {
        let { user_id, res_id, amount } = req.body
        let rateRes = {
            user_id,
            res_id,
            amount
        }
        await model.rate_res.create(rateRes)
        responseApi(res, 200, "", "Success")
    } catch (err) {
        responseApi(res, 500, "", "Unsuccess")
        console.log(err);
    }
}

const getRateByRes = async (req, res) => {
    try {
        const {res_id} = req.params

        let data = await model.rate_res.findAll({
            where: {
                res_id
            }
        })

        responseApi(res, 200, data, "Get Success")
    } catch (err) {
        responseApi(res, 500, "", "Unsuccess")
        console.log(err);
    }
}

const getRateByUser = async (req, res) => {
    try {
        const { user_id } = req.params

        let data = await model.rate_res.findAll({
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
    rateRes,
    getRateByRes,
    getRateByUser
}