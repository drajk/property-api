const { error, badRequest } = require('./util/response');

/**
 * 
 * @param {object} event injected by api gateway
 * @param {*} endpoints list if supported endpoints and thier handlers
 */
const handler = async (event, endpoints) => {
    const { headers: { 'X-Amzn-Trace-Id': traceId } = {} } = event || {};

    // TODO: Create a new uuid() when traceId if its null
    const logPrefix = `Property Api - ${traceId}`;

    console.log(`${logPrefix} - Handle request`);

    try {
        const { path, httpMethod: method, queryStringParameters: params } =
            event || {};

        console.log(`${logPrefix} - method: ${method} path: ${path}`);

        const validEndpoints = endpoints.map(({ path }) => path.toLowerCase());

        if (method !== 'GET' || !validEndpoints.includes(path)) {
            return badRequest('Invalid method or path');
        }

        return await endpoints.find((item) => item.path === path).handler(params);
    } catch (err) {
        console.log(`${logPrefix} - error - ${err.message}`);
        return error(err.message);
    }
};

module.exports = {
    handler,
};
