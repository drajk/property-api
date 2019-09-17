const { error, badRequest } = require('./util/response.util');

/**
 * Gets matching route from router
 * @param {*} method 
 * @param {*} path 
 * @param {*} router 
 */
const getMatchingRoute = (method, path, router) =>
    router.find(
        (route) =>
            route.path.toLowerCase() === path.toLowerCase() &&
            route.method.toLowerCase() === method.toLowerCase()
    ) || {};

/**
 *
 * @param {object} event injected by api gateway
 * @param {*} router list of supported routes
 */
const handler = async (event, router) => {
    const { headers: { 'X-Amzn-Trace-Id': traceId } = {} } = event || {};

    // TODO: Create a new uuid() when traceId if its null
    const logPrefix = `Property Api - ${traceId}`;

    console.log(`${logPrefix} - Handle request`);

    try {
        const { path, httpMethod: method, queryStringParameters: params } =
            event || {};

        console.log(`${logPrefix} - method: ${method} path: ${path}`);

        const matchingRoute = getMatchingRoute(method, path, router);

        if (!matchingRoute) {
            return badRequest('Invalid method or path');
        }
        
        return await matchingRoute.handler(params);

    } catch (err) {
        console.log(`${logPrefix} - error - ${err.message}`);
        return error(err.message);
    }
};

module.exports = handler;
