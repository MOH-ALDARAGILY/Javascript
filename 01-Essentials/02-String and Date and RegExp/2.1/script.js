var str = prompt('Enter a string');
var letter = prompt('Enter a letter to be counted');
var count = 0;
for(var i = 0; i < str.length; i++)
    if(str.charAt(i) == letter)
        count++
alert(`Letter [${letter}] was found [${count}] time/s in [${str}]`);