const handler = require('../handler');

describe('handler', () => {
    let spy;
    let mockEvent;
    let mockRouter;

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

        mockRouter = [
            {
                method: 'get',
                path: '/search',
                handler: spy,
            },
        ];
    });

    it('should call mapped handler', async () => {
        await handler(mockEvent, mockRouter);
        expect(spy).toHaveBeenCalled();
    });

    afterAll(() => {
        getPropertiesSpy.mockRestore();
    });
});
