const vV = require('./vV')

describe('description', () => {
    test('should first', () => { 
        expect(vV(50)).toBe(true) 
    })

    test('should first', () => { 
        expect(vV(-1)).toBe(false) 
    })

    test('should first', () => { 
        expect(vV(101)).toBe(false) 
    })

    test('пограничное значение сверху', () => { 
        expect(vV(0)).toBe(true) 
    })

    test('пограничное значение снизу', () => { 
        expect(vV(100)).toBe(true) 
    })
})