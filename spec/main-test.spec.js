var main = require("../main/main.js");
var fixtures = require("./fixtures.js");

describe('integration test', function () {

    var input;
    var allLcdDigits;

    beforeEach(function () {
        input = 1314;
        allLcdDigits = fixtures.loadLcdDigit();
    });

    it('should print correct LCD',function () {
        spyOn(console, 'log');

        main.printLcdDigit(input);

        var expectLcdDigit = '\n'+'... '+'._. '+'... '+'...'+'\n'
                                 +'..| '+'._| '+'..| '+'|_|'+'\n'
                                 +'..| '+'._| '+'..| '+'..|';
        expect(console.log).toHaveBeenCalledWith(expectLcdDigit);
    });
});

describe('unit test', function () {

    var input;
    var allLcdDigits;

    beforeEach(function () {
        input = 1314;
        allLcdDigits = fixtures.loadLcdDigit();
    });

    describe('buildDigitArray',function () {
        it('print correct digitArray',function () {
            var digitArray =  main.buildDigitArray(input);

            var expectDigitArray = ['1','3','1','4'];

            expect(digitArray).toEqual(expectDigitArray);
        });
    });

    describe('buildDigitObject',function () {
        it('print correct digitObject',function () {
            var digitObject = main.buildDigitObject(main.buildDigitArray(input), allLcdDigits);

            var expectDigitObject = {
                1:['...','..|','..|'],
                3:['._.','._|','._|'],
                4:['...','|_|','..|']
            };

            expect(digitObject).toEqual(expectDigitObject);
        });
    });

});
