const delay = require('./delay')

describe('delay', () => {
    test('should first', async () => {
        const sum = await delay(() => 5+5, 1000) 
        expect(sum).toEqual(10)
    })
})