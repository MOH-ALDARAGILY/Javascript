var str = prompt('Enter a string');
var isCaseSensitive = confirm('Conside case sensitivity?');
var reversedStr = str.split('').reverse().join('');
var isPalindrome = false;
switch(isCaseSensitive) {
    case true:
        if(str == reversedStr)
            isPalindrome = true;
        break;
    case false:
        if(str.toUpperCase() == reversedStr.toUpperCase())
            isPalindrome = true;
        break;
}
alert(`[${str} palindrome: [${isPalindrome}]`);