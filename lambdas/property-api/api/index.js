const { ok } = require('../util/response');

const getProperties = (params = {}) => {
    let properties = [
        {
            price: '1050000',
            address: '12 York Street, South Melbourne',
        },
        {
            price: '750000',
            address: '668 Inkerman Road, Caufield',
        },
    ];
    return ok(properties);
};

const getFavourites = (params = {}) => {
    let favourites = [
        {
            price: '1050000',
            address: '12 York Street, South Melbourne',
        },
    ];
    return ok(favourites);
};

module.exports = {
    getProperties,
    getFavourites,
};
