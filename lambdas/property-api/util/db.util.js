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
            ':suburb': suburb,
            ':isActive': true,
        },
        FilterExpression: 'suburb = :suburb and isActive = :isActive',
    };
    return await db.scan(scanParams).promise();
};

const findProperties = async (params) => {
    const { suburb = '' } = params || {};

    if (suburb) {
        return await filterBySuburb(suburb);
    }

    const scanParams = {
        ...dbClientSchema.table,
        ExpressionAttributeValues: {
            ':isActive': true,
        },
        FilterExpression: 'isActive = :isActive',
    };
    return await db.scan(scanParams).promise();
};

const getFavourites = async () => {
    const scanParams = {
        ...dbClientSchema.table,
        ExpressionAttributeValues: {
            ':isFavourite': true,
        },
        FilterExpression: 'isFavourite = :isFavourite',
    };
    return await db.scan(scanParams).promise();
};

module.exports = {
    findProperties,
    getFavourites,
};
