const { ok } = require('../util/response.util');
const { transformProperty } = require('../util/transform.util');
const dbUtil = require('../util/db.util');

const getProperties = async (params) => {
    let properties = await dbUtil.findProperties(params);
    return ok(transformProperty(properties));
};

const getFavourites = async (params = {}) => {
    let favourites = await dbUtil.getFavourites();
    return ok(transformProperty(favourites));
};

module.exports = {
    getProperties,
    getFavourites,
};
