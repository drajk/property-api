import { ok, error, badRequest } from '../response';

describe('response', () => {
    let payload;

    describe('ok', () => {
        beforeEach(() => {
            payload = ok({ status: 'test' });
        });

        it('should add a 200 with result property in response', () => {
            expect(payload.statusCode).toEqual(200);
            expect(payload.body).toEqual(
                JSON.stringify({
                    result: {
                        status: 'test',
                    },
                })
            );
        });

        it('should NOT add an error property to the response', () => {
            expect(payload.error).not.toBeDefined();
        });
    });

    describe('error', () => {
        beforeEach(() => {
            payload = error('this is a test');
        });

        it('should add 500 and error property to the response', () => {
            expect(payload.statusCode).toEqual(500);
            expect(payload.body).toEqual(
                JSON.stringify({
                    error: 'this is a test',
                })
            );
        });

        it('should NOT add a result property to the response', () => {
            expect(payload.result).not.toBeDefined();
        });
    });

    describe('badRequest', () => {
        beforeEach(() => {
            payload = badRequest('this is a test');
        });

        it('should add 400 and error property to the response', () => {
            expect(payload.statusCode).toEqual(400);
            expect(payload.body).toEqual(
                JSON.stringify({
                    error: 'this is a test',
                })
            );
        });

        it('should NOT add a result property to the response', () => {
            expect(payload.result).not.toBeDefined();
        });
    });
});
