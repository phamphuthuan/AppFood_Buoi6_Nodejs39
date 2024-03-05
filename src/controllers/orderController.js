import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import { Op } from "sequelize";

import { responseApi } from "../config/response.js";

const model = initModels(sequelize);

const order = async (req, res) => {
    try {
        let { user_id, food_id, amount } = req.body
        let order = {
            user_id,
            food_id,
            amount
        }
        await model.orders.create(order)
        responseApi(res, 200, "", "Success")
    } catch (err) {
        responseApi(res, 500, "", "Unsuccess")
        console.log(err);
    }
}

export {
    order
}