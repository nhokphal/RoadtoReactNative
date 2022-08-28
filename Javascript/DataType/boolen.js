/// boolean is ether true or false 


1 < 3
// result true or fasle
1 > 3


1 == 2


/// ==== compare type 

/*1. Additional operators

Logical AND operator: && 

Logical OR operator: || 

Logical NOT operator: ! 

The modulus operator: % 

The equality operator: ==

The strict equality operator: ===

The inequality operator: !=

The strict inequality operator: !==

The addition assignment operator: += 

The concatenation assignment operator: += (it's the same as the previous one - more on that later) */
var currentTime = 10;
console.log(currentTime > 9 && currentTime < 17);
console.log(10 > 9 && 10 < 17);
console.log(true && true);
var longString = "";
longString += "Once";
longString += " upon";
longString += " a";
longString += " time";
longString += "...";
console.log(longString); // "Once upon a time..."