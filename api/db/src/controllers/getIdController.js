const allModels = require('../models');
const { response } = require('../utils');

module.exports = async(req, res) => {
    const { model, id} = req.params;

    const result = await allModels[model].getById(id)
    response(res, 200, result);
}