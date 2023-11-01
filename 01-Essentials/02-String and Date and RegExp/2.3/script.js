var username;
var usernameValidation = new RegExp(/^[a-zA-Z]+$/gm);
do
    username = prompt('Enter your name');
while(!usernameValidation.test(username));

var phoneNumber;
var phoneNumberValidation = new RegExp(/^[0-9]{8}$/gm);
do
    phoneNumber = prompt('Enter your phone number');
while(!phoneNumberValidation.test(phoneNumber));

var mobileNumber;
var mobileNumberValidation = new RegExp(/^(010|011|012|015)[0-9]{8}$/gm);
do
    mobileNumber = prompt('Enter your mobile number');
while(!mobileNumberValidation.test(mobileNumber));

var userEmail;
var userEmailValidation = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
do
    userEmail = prompt('Enter your email');
while(!userEmailValidation.test(userEmail));

var tempColor;
var color;
var isChosen = false;
do {
    tempColor = prompt('Enter a color: 1-Red, 2-Green, 3-Blue');
    switch(tempColor) {
        case '1':
        case 'RED':
        case 'Red':
        case 'red':
            color = 'red';
            isChosen = true;
            break;
        case '2':
        case 'GREEN':
        case 'Green':
        case 'green':
            color = 'green';
            isChosen = true;
            break;
        case '3':
        case 'BLUE':
        case 'Blue':
        case 'blue':
            color = 'blue';
            isChosen = true;
            break;
    }
}
while(!isChosen);
document.write(`<span style="color: ${color}">Welcome: </span>`);
document.write(`${username} <br>`);
document.write(`<span style="color: ${color}">Phone number: </span>`);
document.write(`${phoneNumber} <br>`);
document.write(`<span style="color: ${color}">Mobile number: </span>`);
document.write(`${mobileNumber} <br>`);
document.write(`<span style="color: ${color}">email: </span>`);
document.write(`${userEmail} <br>`);
document.write(`<span style="color: ${color}">Today: </span>`);
document.write((new Date()).toDateString());
