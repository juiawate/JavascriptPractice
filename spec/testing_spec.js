

describe('Testing anagrams', function () {

    it('Should return true', function () {
        expect(areAnagrams('parliament','partial men')).toBe(true);
    });

    it('Should return false', function () {
        expect(areAnagrams('parliament','partial man')).toBe(false);
    });

    it('Should return true', function () {
        expect(areAnagrams('name','mane')).toBe(true);
    });

});

describe('Testing hexToDecimal', function () {

    it('Should return decimal', function () {
        expect(hexToDec('ff')).toEqual(255);
    });

    it('Should return decimal', function () {
        expect(hexToDec('10')).toEqual(16);
    });

});

describe('Testing merge sorted arrays', function () {

    it('Should merge sorted arrays', function () {
        expect(mergeSortedArrays([1,3,5],[2,4,6])).toEqual([1,2,3,4,5,6]);
    });

    it('Should merge sorted arrays', function () {
        expect(mergeSortedArrays([1,2,5],[2,4,6])).toEqual([1,2,2,4,5,6]);
    });

    it('Should merge sorted arrays', function () {
        expect(mergeSortedArrays([1,2,3,5],[4,6])).toEqual([1,2,3,4,5,6]);
    });

    it('Should merge sorted arrays', function () {
        expect(mergeSortedArrays([-2,1],[2,3,4,6])).toEqual([-2,1,2,3,4,6]);
    });

});