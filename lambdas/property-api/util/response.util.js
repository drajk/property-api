/**
 * Apply consistent response format
 * @param {object?} result
 * @param {string?} error
 * @return {*}
 */
const formatResponse = (result, error) => {
    const defaultHeaders = {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
    };

    if (error) {
        return {
            ...defaultHeaders,
            body: JSON.stringify({
                error,
            }),
        };
    }

    return {
        ...defaultHeaders,
        body: JSON.stringify({
            result,
        }),
    };
};

/**
 * Standard 200 response with optional body
 * @param {object?} body
 * @return {object}
 */
const ok = (body) => ({ statusCode: 200, ...formatResponse(body) });

/**
 * Standard 500 response helper with default message
 * @param {string?} message
 * @return {object}
 */
const error = (message = 'The operation failed') => ({
    statusCode: 500,
    ...formatResponse(null, message),
});

/**
 * Standard 500 response helper with default message
 * @param {string?} message
 * @return {object}
 */
const badRequest = (message = 'Invalid params') => ({
    statusCode: 400,
    ...formatResponse(null, message),
});

module.exports = {
    ok,
    error,
    badRequest,
};
