const { transformProperty } = require('../../property-api/util/transform.util');

describe('transform', () => {
    it('should transform property and ignore unwanted properties', async () => {
        const mockResponse = {
            Items: [
                {
                    id: 'unique id',
                    address: 'some address',
                    price: '1234',
                    randomProperty: 'some thing very random',
                },
            ],
        };
        const [first] = await transformProperty(mockResponse);

        expect(first).toBeDefined();
        expect(first.randomProperty).toBeUndefined();

        expect(first.id).toBe('unique id');
        expect(first.address).toBe('some address');
        expect(first.price).toBe('1234');
    });
});
