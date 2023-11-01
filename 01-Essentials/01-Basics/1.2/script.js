var sum = 0;
do {
    var numberString = prompt('Enter a number');
    if(numberString == '0')
        break;
    if(isFinite(numberString))
        sum += parseInt(numberString);
}
while(sum <= 100);
alert(`Sum = ${sum}`);