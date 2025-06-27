const Planet = require('../data')
const { response } = require('../utils')

module.exports = async (req, res) => {
    const dataBody = req.body;

    const newPlanet = await Planet.insert(dataBody)
    response(res, 201, newPlanet)
}
