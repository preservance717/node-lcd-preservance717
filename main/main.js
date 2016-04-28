function printLcdDigit(input) {};

printLcdDigit.prototype.buildDigitArray = function (input){
    return input.toString().split('');
}

printLcdDigit.prototype.buildDigitObject = function (input) {
    var digitArray = this.buildDigitArray(input)
    var fixtures = require('../spec/fixtures');
    var lcdDigitObject = fixtures();
    var lcdDigitArray = Object.keys(lcdDigitObject);
    var digitObject = {};

    digitArray.forEach(function (digitElement) {
        for(var i = 0; i < lcdDigitArray.length; i++){
            if(digitElement === lcdDigitArray[i]){
                digitObject[digitElement] = lcdDigitObject[lcdDigitArray[i]];
            }
        }
    });

    return digitObject;
}

printLcdDigit.prototype.print = function (input) {
    var digitObject = this.buildDigitObject(input);
    var expectLcdDigit = input + '的LCD数字';
    var inputArray = Object.keys(digitObject);

    for(var i = 0; i < inputArray.length; i++){
        for(var j = 0; j < digitObject[inputArray[i]].length; j++){
            expectLcdDigit += '\n'+digitObject[inputArray[i]][j]+' '+digitObject[inputArray[i+1]][j]+' '
                +digitObject[inputArray[i]][j]+' '+digitObject[inputArray[i+2]][j];
        }
        break;
    }

    console.log(expectLcdDigit);
}

module.exports = printLcdDigit;