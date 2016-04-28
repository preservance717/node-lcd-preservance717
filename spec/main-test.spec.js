describe('integration test', function () {
    var main = require("../main/main");
    var printLcd;
    var input;

    beforeEach(function () {
        input = 1314;
        printLcd = new main(input);
    });

    it('should print correct LCD',function () {
        spyOn(console, 'log');
        printLcd.print(input);
        var expectLcdDigit = input+'的LCD数字'+'\n'+'... '+'._. '+'... '+'...'+'\n'
            +'..| '+'._| '+'..| '+'|_|'+'\n'
            +'..| '+'._| '+'..| '+'..|';
        expect(console.log).toHaveBeenCalledWith(expectLcdDigit);
    });
});

describe('unit test', function(){
    var main = require("../main/main");
    var printLcd;
    var input;

    beforeEach(function () {
        input = 1314;
        printLcd = new main(input);
    });

    describe('buildDigitArray',function () {
        it('print correct digitArray',function () {
            var digitArray =  printLcd.buildDigitArray(input);

            var expectDigitArray = ['1','3','1','4'];

            expect(digitArray).toEqual(expectDigitArray);
        });
    });

    describe('buildDigitObject',function () {
        it('print correct digitObject',function () {
            var digitObject = printLcd.buildDigitObject(printLcd.buildDigitArray(input));

            var expectDigitObject = {
                1:['...','..|','..|'],
                3:['._.','._|','._|'],
                4:['...','|_|','..|']
            };

            expect(digitObject).toEqual(expectDigitObject);
        });
    });
});