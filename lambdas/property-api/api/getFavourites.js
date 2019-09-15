const { ok } = require('../util/response');

const getFavourites = (request = {}) => {
    let favourites = [
        {
            price: '1050000',
            address: '12 York Street, South Melbourne',
        },
    ];
    return ok(favourites);
};

module.exports = getFavourites;
