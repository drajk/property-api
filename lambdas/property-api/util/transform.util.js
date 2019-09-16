const transformProperty = ({ Items: items = [] }) => {
    return items
        ? items.map(({ id, price, address }) => ({ id, price, address }))
        : [];
};

module.exports = {
    transformProperty,
};
