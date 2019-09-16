const { endpoints } = require('./endpoints');
const { handler } = require('./handler');

module.exports = {
    handler: (event) => handler(event, endpoints)
};
