var arrOfNumbers = [];
var sum = 0;
var mult = 1;
for(var i = 0; i < 3; i++) {
    arrOfNumbers[i] = parseInt(prompt(`Enter number [${i + 1}]`));
    sum += arrOfNumbers[i];
    mult *= arrOfNumbers[i];
}
var div = arrOfNumbers[0];
for(var i = 1; i < arrOfNumbers.length; i++) {
    if(arrOfNumbers[i] == 0) {
        div = 'NA';
        break;
    }
    div /= arrOfNumbers[i];
}
document.write(`SUM = ${sum}<br>`);
document.write(`MULT = ${mult}<br>`);
document.write(`DIV = ${div.toFixed(2)}`);
