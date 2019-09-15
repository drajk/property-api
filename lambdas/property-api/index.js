const { error, badRequest } = require('./util/response');
const getProperties = require('./api/getProperties');
const getFavourites = require('./api/getFavourites');

const allHandlers = [
    {
        path: '/search',
        handler: getProperties,
    },
    {
        path: '/favourites',
        handler: getFavourites,
    },
];

exports.handler = async (event) => {
    try {
        const { path, httpMethod } = event || {};
        const validEndpoints = allHandlers.map(({ path }) => path.toLowerCase());

        if (httpMethod !== 'GET' || !validEndpoints.includes(path)) {
            return badRequest('Bad Request');
        }

        return await allHandlers.find((item) => item.path === path).handler();
    } catch (err) {
        return error(err.message);
    }
};
