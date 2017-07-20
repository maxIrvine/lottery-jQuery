var $numberDiv = $('number-generator="list"');
var $numberButton = $('number-generator-button="trigger"');

function addNumbers(num) {
    var arr = [];
    for (var i=1;i<=num;i++){
        arr.push(i);
    }
    return arr;
}

function assignNumbers() {
    var firstNumbers = addNumbers(69);
    var secondNumbers = addNumbers(26);
    var numbers = []
    for (var i=1;i<=5;i++) {
        var randomDecimal = Math.random();
        var len = firstNumbers.length;
        var index = Math.round(randomDecimal * len);
        var num = 0;
        if (index === 0){
            num = firstNumbers[index];
        } else if (index ===1) {
            num = firstNumbers[index-1]
        } else {
            num = firstNumbers[index-2];
        }
        firstNumbers.splice(index-2,1);
        numbers.push(num);
    }
    var newRandomDecimal = Math.random();
    var secondLen = secondNumbers.length;
    var index2 = Math.round(newRandomDecimal * secondLen);
    var num2 = 0;
        if (index2 === 0){
            num2 = firstNumbers[index2];
        } else if (index2 ===1) {
            num2 = firstNumbers[index2-1]
        } else {
            num2 = firstNumbers[index2-2];
        }
        numbers.push(num2);
    return numbers;
}