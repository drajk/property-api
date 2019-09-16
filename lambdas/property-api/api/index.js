const { ok } = require('../util/response.util');
const dbUtil = require('../util/db.util');

const transform = ({ Items: items = [] }) => {
    return items
        ? items.map(({ id, price, address }) => ({ id, price, address }))
        : [];
};

const getProperties = async (params = {}) => {
    let properties = await dbUtil.filterBySuburb(params.suburb || '');
    return ok(transform(properties));
};

const getFavourites = async (params = {}) => {
    let favourites = await dbUtil.getFavourites();
    return ok(transform(favourites));
};

module.exports = {
    getProperties,
    getFavourites,
};
