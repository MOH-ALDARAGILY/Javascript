var arrOfNumbers = [];
for(var i = 0; i < 5; i++)
    arrOfNumbers[i] = parseInt(prompt(`Enter number[${i + 1}]`));
var assOrderArr = [...arrOfNumbers];
var descOrderArr = [...arrOfNumbers];
assOrderArr.sort((a, b) => a - b);
descOrderArr.sort((a, b) => b - a);
document.write(`Default: ${arrOfNumbers}<br>`);
document.write(`Asc: ${assOrderArr}<br>`);
document.write(`Desc: ${descOrderArr}`);