
function reverseStringLoop(str) {
    //string to array
    var newString = "";
    //loop through array - decrementing
    for (var i = str.length-1; i >= 0; i--) {
        //put each element into array
        newString += str[i];
    }
    return newString;
    
}

function reverseString(str) {
    //string to array
    var splitString = str.split("");
    //reverse array
    var reverseArray = splitString.reverse();
    //join array
    var joinArray = reverseArray.join("");
    //single line solution
    //return str.split("").reverse().join("");    
    return joinArray;
}
document.writeln(reverseStringLoop("Yo What's up biiiitch??"));
document.writeln(reverseString("Yo mama called and said you a cuck ass biiiiitchhhh!!"));
console.log(reverseStringLoop("hello"));
console.log(reverseString("hello"));
