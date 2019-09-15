const { ok } = require('../util/response');

const getProperties = (request = {}) => {
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

module.exports = getProperties;
