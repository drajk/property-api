const { handler } = require('../property-api/handler');

describe('handler', () => {
    let spy;
    let mockEvent;
    let mockEndpoints;

    beforeAll(() => {
        spy = jest.fn();

        mockEvent = {
            httpMethod: 'GET',
            path: '/search',
            queryStringParameters: {},
            headers: {
                'X-Amzn-Trace-Id': 'same random uuid',
            },
        };

        mockEndpoints = [
            {
                path: '/search',
                handler: spy,
            },
        ];
    });

    it('should call mapped handler', async () => {
        await handler(mockEvent, mockEndpoints);
        expect(spy).toHaveBeenCalled();
    });

    afterAll(() => {
        getPropertiesSpy.mockRestore();
    });
});
