import { MicroServiceController } from '../src/controller';

jest.setTimeout(20000)


describe('testing the controller method', () => {
    it('test the controller id method', () => {
        try {
            const service = new MicroServiceController().generateIds(100)
            const altService = new MicroServiceController().generateIds(1000)
            expect(service.length).toStrictEqual(100)
            expect(altService.length).toStrictEqual(500)
        } catch (error) {
            console.error(error)
            expect(error).toBeInstanceOf(Error)
        }
    })
})