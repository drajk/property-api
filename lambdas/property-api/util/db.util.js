const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient();

/**
 * Shared schema params like table name, attribute values etc
 */
const dbClientSchema = {
    table: {
        TableName: 'properties',
    },
};

const filterBySuburb = async (suburb) => {
    const scanParams = {
        ...dbClientSchema.table,
        ExpressionAttributeValues: {
            ':s': suburb,
        },
        FilterExpression: 'suburb = :s',
    }
    return await db.scan(scanParams).promise();
};

const getFavourites = async () => {
    const scanParams = {
        ...dbClientSchema.table,
        ExpressionAttributeValues: {
            ':isFavourite': true
        },
        FilterExpression: 'isFavourite = :isFavourite',
    }
    return await db.scan(scanParams).promise();
};

module.exports = {
    filterBySuburb,
    getFavourites,
};
