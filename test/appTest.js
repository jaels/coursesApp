
var assert = require('assert');
const app = require('../src/app.js');


describe('App', () => {
    describe('checkType()', () => {
        it('should return dict - roman number at the end', () => {
            let input = ["prok", "is", "V"];
            let result = app.checkType(input);
            assert.equal(result, "dict");
        });
        it('should return dict - normal number at the end', () => {
            let input = ["pish", "tegj", "prok", "is", "45"];
            let result = app.checkType(input);
            assert.equal(result, "dict");
        });
        it('should return priceLine', () => {
            let input = ["pish", "pish", "Iron", "is", "3910", "Credits"];
            let result = app.checkType(input);
            assert.equal(result, "priceLine");
        });
        it('should return query', () => {
            let input = ["how", "many", "Credits", "is", "glob", "prok", "Gold", "?"];
            let result = app.checkType(input);
            assert.equal(result, "query");
        });
        it('should return undefined', () => {
            let input = ["glob", "is", "XC"];
            let result = app.checkType(input);
            assert.equal(result, undefined);
        });
    })

    describe('convertArabNumberToRoman()', () => {
        it('should return a roman number - MCMXLIV', () => {
            let input = 1944;
            let result = app.convertArabNumberToRoman(input);
            assert.deepEqual(result, "MCMXLIV");
        })
        it('should return a roman number - MCMIII', () => {
            let input = 1903;
            let result = app.convertArabNumberToRoman(input);
            assert.deepEqual(result, "MCMIII");
        })
        it('should return a roman number - DCLIV', () => {
            let input = 654;
            let result = app.convertArabNumberToRoman(input);
            assert.deepEqual(result, "DCLIV");
        })
    })

    describe('checkRepetition()', () => {
        it('should return false because 5 repeats twice', () => {
            let input = ["100", "50", "5", "5", "1"];
            let result = app.checkRepetition(input);
            assert.equal(result, false);
        })
        it('should return false because 10 repeats 5 times', () => {
            let input = ["100", "50", "10", "10", "10", "1", "10", "10"];
            let result = app.checkRepetition(input);
            assert.equal(result, false);
        })
        it('should return true', () => {
            let input = ["100", "50", "10", "10", "10", "5", "1"];
            let result = app.checkRepetition(input);
            assert.equal(result, true);
        })
    })

    describe('checkSuccession()', () => {
        it('should return false - four times, mirror order', () => {
            let input = ["10", "5", "10","10", "10"];
            let result = app.checkSuccession(input);
            assert.equal(result, false);
        })
        it('should return false, not right order ', () => {
            let input = ["100", "100", "10", "100", "100"];
            let result = app.checkSuccession(input);
            assert.equal(result, false);
        })
        it('should return true', () => {
            let input = ["10", "10", "10", "5", "10"];
            let result = app.checkSuccession(input);
            assert.equal(result, true);
        })
    })

    describe('checkSubtraction()', () => {
        it('should return true, following subtraction rules', () => {
            let input = ["100", "500", "10", "50", "1", "10"];
            let result = app.checkSubtraction(input);
            assert.equal(result, true);
        })
        it('should return false, not following subtraction rules', () => {
            let input = ["100", "1000", "10", "100", "1", "50"];
            let result = app.checkSubtraction(input);
            assert.equal(result, false);
        })
        it('should return false, not following subtraction rules', () => {
            let input = ["100", "1000", "10", "100", "5", "50"];
            let result = app.checkSubtraction(input);
            assert.equal(result, false);
        })
        it('should return false, more than one subtraction', () => {
            let input = ["100", "1000", "10", "1000", "10", "50"];
            let result = app.checkSubtraction(input);
            assert.equal(result, false);
        })
        it('should return true, only one subtraction from each large value', () => {
            let input = ["100", "1000", "100", "500", "10", "50"];
            let result = app.checkSubtraction(input);
            assert.equal(result, true);
        })
    })

    describe('convertArrayToArabNumber()', () => {
        it('should return 1944', () => {
            let input = ["1000", "100", "1000", "10", "50", "1", "5"];
            let result = app.convertArrayToArabNumber(input);
            assert.equal(result, 1944);
        })
        it('should return 1903', () => {
            let input = ["1000", "100", "1000", "1", "1", "1"];
            let result = app.convertArrayToArabNumber(input);
            assert.equal(result, 1903);
        })
    })

})
