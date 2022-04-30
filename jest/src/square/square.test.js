const square = require('./square')

describe('description', () => {
    let mockVal;
    // перед каждым 
    beforeEach(() => {
        mockVal = Math.random()
    })
    // один раз в начале 
    beforeAll(() => {
        // ДОБАВИЛ В БД
    })

    test('should first', () => { 
        /*expect(square(2)).toBe(4) 

        expect(square(2)).toBeLessThan(5) 

        expect(square(2)).toBeGreaterThan(3) 

        expect(square(2)).not.toBeUndefined()  */
        const spyMathPow = jest.spyOn(Math, 'pow')
        square(2)
        expect(spyMathPow).toBeCalledTimes(1)
    })

    test('should first', () => { 
        const spyMathPow = jest.spyOn(Math, 'pow')
        square(1)
        expect(spyMathPow).toBeCalledTimes(0)
    })

    afterEach(()=>{
        jest.clearAllMocks()
    })
    
    afterAll(()=>{
        // УДАЛИЛ ИЗ БД
    })


})