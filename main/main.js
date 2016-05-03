function printLcdDigit(input) {
    var fixtures = require('../spec/fixtures');
    var lcdDigitObject = fixtures.loadLcdDigit();

    var digitArray = buildDigitArray(input);
    var digitObject = buildDigitObject(digitArray, lcdDigitObject);
    print(digitObject);
}

function buildDigitArray(input) {
    return input.toString().split('');
}

function buildDigitObject(digitArray, lcdDigitObject) {
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

function print(digitObject) {
    var expectLcdDigit = '';
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

module.exports = {printLcdDigit:printLcdDigit,buildDigitArray:buildDigitArray,
                  buildDigitObject:buildDigitObject, print:print};
