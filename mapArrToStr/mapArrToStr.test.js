const mapArrToStr = require('./mapArrToStr')

describe('mapArrToStr', () => {
    test('should first', () => { 
        expect(mapArrToStr([1, 2, 3])).toEqual(['1','2','3']) 
    }) 

    test('Rexf-vjkf', () => { 
        expect(mapArrToStr([1, 2, 3, null, undefined, 'asdsad'])).toEqual(['1','2','3']) 
    }) 

    test('Empty', () => { 
        expect(mapArrToStr([])).toEqual([]) 
    }) 

    test('Отрицание', () => { 
        expect(mapArrToStr([1,2,3])).not.toEqual(['1' ,'2' ,'3' ,'4']) 
    }) 
})