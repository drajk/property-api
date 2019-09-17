const router = require('./router');
const handler = require('./handler');

module.exports = {
    handler: (event) => handler(event, router)
};
