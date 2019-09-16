const { getProperties, getFavourites } = require('./api');

const endpoints = [
    {
        path: '/search',
        handler: getProperties,
    },
    {
        path: '/favourites',
        handler: getFavourites,
    },
];

module.exports = {
    endpoints,
};
