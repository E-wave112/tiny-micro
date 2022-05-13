import { instantiateTestIds } from '../src/index';
import { IdDto } from '../src/dto/id.dto'
jest.setTimeout(20000)

describe('testing the index method', () => {
    it('test the index id method', () => {
        try {
            const id: IdDto = {
                start: 190
            }

            const altId: IdDto = {
                start: 780
            }
            const instance = instantiateTestIds(id)
            const altInstance = instantiateTestIds(altId)
            expect(instance.length).toStrictEqual(190)
            expect(altInstance.length).toStrictEqual(500)
        } catch (error) {
            console.error(error)
            expect(error).toBeInstanceOf(Error)
        }
    })
})