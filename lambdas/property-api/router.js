const { getProperties, getFavourites } = require('./api');

module.exports = [
    {
        method: 'get',
        path: '/search',
        handler: getProperties,
    },
    {
        method: 'get',
        path: '/favourites',
        handler: getFavourites,
    },
];
