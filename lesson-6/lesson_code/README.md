# Lesson 6. JavaScript drills
In Lesson 6, we will be drilling some core programming algorithms. This is so you would get better acquainted with the **essential** keywords and concepts. When you know these, you will be a lot more comfortable when writing browser scripts, because you already "have a feel" for the language.

The exercises don't necessarily increase in difficulty, but they introduce **different aspects of a JS** one at a time.

> When you run into difficulties with these exercises - and you will - please **google** the problem and try to solve it on your own. This trains you to wander into the vast depth of knowledge found on the web, which you can use to learn anything.

## Refresher
Just a refresher before you start coding. You can use the following operators to compare values:
* `===` (strict equality)
* `!==` (strict inequality)
* `<` (less than)
* `>` (greater than)
* `<=` (less than or equal to)
* `>=` (greater than or equal to)

You can use the following logical operators:
* `&&` (and)
* `||` (or)
* `!` (not)

You can use the following operators on numbers:
* `+` (addition). Example: 1 + 1 // 2
* `-` (subtraction). Example: 1 - 1 // 0
* `*` (multiplication). Example: 2 * 2 // 4
* `/` (division). Example: 5 / 2 // 2.5
* `%` (modulus) - returns the remainder of a division. Example: 5 % 2 // 1


# Variables, strings, numbers, string concatenation and printing
```javascript
var myName = 'Samuel';
var myMiddleName = "L";
var myFamilyName = `Jackson`; // Backticks can be written with ALTGR + (the button to the left of backspace)

// String concatenation
console.log('Hi! My name is ' + myName + ' ' + myMiddleName + ' ' + myFamilyName + '.');
// can also be written as 
// console.log("Hi! My name is " + myName + " " + myMiddleName + " " + myFamilyName + ".");
// console.log(`Hi! My name is ${myName} ${myMiddleName} ${myFamilyName}.`); // Notice the backticks, and the ${} syntax

var myFullName = myName + ' ' + myMiddleName + ' ' + myFamilyName;
console.log(`Hi! My name is ${myFullName}.`);

var myAge = 23;
var myHeight = 1.74;
var myWeight = 72;

console.log(`I am ${myAge} years old. I am ${myHeight} meters tall. I weigh ${myWeight} kilograms.`);

```

### Number 1
Write a program where you can set a variable with your name. The program should then print a greeting that contains your name to the console.

### Number 2
Write a program that has 3 variables: Car brand, car model and car color. The program should print the following sentence to the console: "My car is a red Ford Mustang."

### Number 3
Write a program that calculates all basic properties of a pyramid.
The program should have a variable for the height and the base of the pyramid.
The program should then calculate the area and the volume of the pyramid.
The program should then print the results to the console.
> The formula for the **area of a pyramid is: 1/3 * base * height** The formula for the **volume of a pyramid is: 1/2 * base * height**



# String methods
* Cheat sheet:
```javascript
var myName = 'Henrik';
document.write('HELLO, ' + myName.toUpperCase() + '!');
/**
 * Some more string methods:
 * 'Henrik'.length 
 * 'Henrik'.slice(0, 6) // In JS, counting starts from 0, so 0, 1, 2, 3 
 * "Apple, Banana, Kiwi".substr(7) // Banana, Kiwi
 */

if (myName.length > 6) {
    console.log('cool.');
}
```

### Number 4
Declare a variable `myName`. Print the name with the following condition: if the name is longer than 10 characters, cut the name at the 10th character and append "...". Example: MinuNimiOn...

### Number 5
Declare a variable `var alphabet = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,š,z,ž,t,u,v,w,õ,ä,ö,ü,x,y"`. Write your name with only using string methods and string concatenation ("" + ""). 



# Loops
```javascript
/*
 * Loops are used to repeat a block of code a certain number of times.
 * There are 3 types of loops: for, while and do while.
 * The for loop is used when you know how many times you want to repeat the code.
 * The while loop is used when you don't know how many times you want to repeat the code.
 * The do while loop is used when you want to repeat the code at least once.
 */

// The for loop
for (var i = 0; i < 10; i++) {
    console.log(i);
}
// The for loop has 3 parts: the initialization, the condition and the final expression.
// The initialization is executed once before the loop starts.
// The condition defines the condition for running the loop (the code block).
// The final expression is executed at the end of each loop.

// The for loop will continue to run as long as the condition is true.
// The for loop will stop running when the condition is false.

// The while loop
var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
// The while loop will continue to run as long as the condition is true.
// The while loop will stop running when the condition is false.

// The do while loop
var i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);
// The do while loop will always run the code block once, even if the condition is false.
// The do while loop will continue to run as long as the condition is true.
// The do while loop will stop running when the condition is false.

// NB! Always prefer the for loop over the while loop.
```
### Number 6
Write a program that prints the numbers from 1 to 100 to the console. Only using the for loop.

### Number 7
Write a program that prints the numbers from 100 to 1 to the console. Only using the for loop.

### Number 8
Write a program that prints the numbers from 1 to 100 to the console. Only using the while loop.

### Number 9
Write a program that prints the phrase "I am Bart Simpson and I like to write stuff on the blackboard." 100 times.


# Arrays
```javascript
/**
 * Arrays are a way to store multiple values in a single variable.
 * Arrays are written with square brackets.
 * Each value in an array is called an element.
 * The first element in an array has the index 0. The second element in an array has the index 1. The third element in an array has the index 2. And so on.
 * The length of an array is the number of elements in it.
 * The last element in an array has the index equal to the length of the array minus 1.
 */

var myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 'š', 'z', 'ž', 't', 'u', 'v', 'w', 'õ', 'ä', 'ö', 'ü', 'x', 'y'];
console.log(myArray);
console.log(myArray[22] + myArray[4] + myArray[17] + myArray[4] + '!');

/**
 * Arrays can contain any type of data.
 * Example: [1, 2, 3, {age: 4}, 5, 6, 7, 8, 'Tere', 10]
 * Arrays can be empty. Example: []
 * Arrays can contain other arrays. Example: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
 * You can access the length of an array with the length property. Example: [1, 2, 3].length // 3
 * You can append elements to an array with the push method. Example: [1, 2, 3].push(4) // [1, 2, 3, 4]
 * You can remove the last element from an array with the pop method. Example: [1, 2, 3].pop() // [1, 2]
 * You can remove the first element from an array with the shift method. Example: [1, 2, 3].shift() // [2, 3]
 * You can add an element to the beginning of an array with the unshift method. Example: [1, 2, 3].unshift(0) // [0, 1, 2, 3]
 * You can remove an element from an array with the splice method. Example: [1, 2, 3].splice(1, 1) // [1, 3]
 * You can add an element to an array with the splice method. Example: [1, 2, 3].splice(1, 0, 1.5) // [1, 1.5, 2, 3]
 * You can find the index of an element in an array with the indexOf method. Example: [1, 2, 3].indexOf(2) // 1
 * You can find the last index of an element in an array with the lastIndexOf method. Example: [1, 2, 3, 2].lastIndexOf(2) // 3
 * You can reverse an array with the reverse method. Example: [1, 2, 3].reverse() // [3, 2, 1]
 * You can sort an array with the sort method. Example: [3, 2, 1].sort() // [1, 2, 3]
 * You can join the elements of an array into a string with the join method. Example: [1, 2, 3].join('') // '123'
 * You can split a string into an array with the split method. Example: '123'.split('') // [1, 2, 3]
 * Arrays can be populated with a loop. Example: var myArray = []; for (var i = 0; i < 10; i++) { myArray.push(i); }
 */
```
### Number 10
Declare a variable `myNameComponents = ['Samuel', 'L', 'Jackson'];`. 
Write a program that prints the following sentence to the console: "My name is Samuel Jackson." only using the `myNameComponents` variable.
> Hint: You can use the `join` method to join the elements of an array into a string.

### Number 11
Create an array of grades. Loop the array of grades, adding the element to an accumulator variable. After the loop is finished, divide the accumulator with the number of array elements. Print the average grade.



# If statements
```javascript
/*
 * if statements are used to execute a block of code if a condition is true.
 * if statements can be used with or without an else statement.
 * if statements can be used with or without an else if statement.
 * if statements can be nested.
 * if statements can be used with the logical operators &&, || and !.
 * if statements look like this:
 */
if (condition === true && 'a' === 'a' || 'b' === 'b') {
    // do something
}

// The condition is evaluated. If the condition is true, the code block is executed.
// If the condition is false, the code block is not executed.

// The else statement
if (condition === true) {
    // do something
} else {
    // do something else
}

// The else if statement
if (number === 1) {
    // do something
} else if (number === 2) {
    // do something else
} else {
    // do something else
}

// The logical operators
// The && operator is used to check if both conditions are true.
// The || operator is used to check if at least one of the conditions is true.
// The ! operator is used to check if the condition is false.
// Example: 
if (condition === true && 'a' === 'a' || 'b' !== 'z') {
    // do something
}

// The order of precedence of the logical operators is: !, &&, ||.
// Example:
if (condition === true && 'a' === 'a' || 'b' !== 'z' && 'c' === 'c') {
    // do something
}

// You can use parentheses to change the order of precedence.
// Example:
if (condition === true && ('a' === 'a' || 'b' !== 'z') && 'c' === 'c') {
    // do something
}
```
### Number 12
Write a program that counts up numbers from 1 to 100. If the number is divisible by 3, print "Tallinna". If the number is divisible by 5, print "Prantsuse". If the number is divisible by both 3 and 5, print "Lütseum". If the number is 42, print "Tallinna Prantsuse Lütseum".

### Number 13
Write a program that checks if an array of names contains the name "Samuel". If it does, print "Samuel is in the array" to the console. If it doesn't, print "Samuel is not in the array" to the console.



# Objects (Dictionaries)
```javascript
// Objects are used to store data in key-value pairs.
// Objects are created with curly braces {}.
// Example:
var myObject = {
    name: 'Henrik',
    age: 23,
    knowsAboutJsObjects: true
};

// Objects can be nested.
// Example:
var myObject = {
    name: 'Henrik',
    age: 23,
    knowsAboutJsObjects: true,
    address: {
        street: 'Hariduse 3',
        city: 'Tallinn',
        country: 'Estonia'
    }
};
// Objects can be accessed with the dot notation.
// Example:
console.log(myObject.name); // Henrik
console.log(myObject.address.city); // Tallinn

// Objects can also be accessed with the bracket notation.
// Example:
console.log(myObject['name']); // Henrik
console.log(myObject['address']['city']); // Tallinn

// Objects are some of the most useful data structures in JavaScript.
// Example:
var peopleWithCars = {
    'Henrik': 'Audi',
    'Samuel': 'BMW',
    'Karl': 'Mercedes',
};

for (var person in peopleWithCars) { // notice the for in loop
    console.log(person + ' has a ' + peopleWithCars[person]);
}
```
### Number 14
Declare an object with the following properties: name, age, address, phone, email.
Then declare an array of objects with the same properties.
Then print the name of the person with the oldest age to the console.    

### Number 15
Declare 3 parties people can vote for. Use an object `{}` to create it. Each party should have a name and a number of votes.
Then declare an array of votes. Each vote should be a string with the name of the party.
Update the number of votes for each party based on the votes in the array.
Print the name of the party with the most votes to the console.



# Functions
```javascript
// Functions are used to execute a block of code when they are called.
// Functions are created with the function keyword. This is called a function declaration or a function definition, or signature.
// Example:
function myFunction() {
    // do something
}

// Functions can be called with the function name followed by parentheses.
// Example:
myFunction();

// Functions can be called with arguments. Sometimes also called parameters.
// Example:
function myFunction(name) {
    console.log('Hello ' + name);
}

myFunction('Henrik'); // Hello Henrik
myFunction('Samuel'); // Hello Samuel

// Functions can return a value.
// Example:
function myFunction(name) {
    return 'Hello ' + name;
}

var greeting = myFunction('Henrik'); 
console.log(greeting); // Hello Henrik

// Functions can be called with default arguments.
// Example:
function myFunction(name) {
    name = name || 'Henrik';
    return 'Hello ' + name;
}

var greeting = myFunction();
console.log(greeting); // Hello Henrik

// Functions can have multiple arguments.
// Example:
function myFunction(name, age) {
    return 'Hello ' + name + '. You are ' + age + ' years old.';
}

var greeting = myFunction('Henrik', 23);
console.log(greeting); // Hello Henrik. You are 23 years old.

// Functions can be called with an object as an argument.
// Example:
function myFunction(options) {
    options = options || {};
    return 'Hello ' + options.name + '. You are ' + options.age + ' years old.';
}

var greeting = myFunction({name: 'Henrik', age: 23});
console.log(greeting); // Hello Henrik. You are 23 years old.

// Functions are used to create abstractions and to avoid repetition.
// Example:
function getPersonDetailsAsObject(name, age) {
    return {
        name: name,
        age: age
    };
}

var henrik = getPersonDetailsAsObject('Henrik', 23);
var samuel = getPersonDetailsAsObject('Samuel', 24);

// Functions can be used to create abstractions.
// Example:
function getPersonDetailsAsString(name, age) {
    return 'Hello ' + name + '. You are ' + age + ' years old.';
}

var henrik = getPersonDetailsAsString('Henrik', 23);
console.log(henrik); // Hello Henrik. You are 23 years old.

// Functions can be declared with the function keyword, or with the "arrow function" syntax. The arrow function syntax is a shorthand for declaring functions, but it's a bit more complicated.
// Example:
var greeting1 = function(name) {
    return 'Hello ' + name;
}

// Example:
var greeting2 = (myName) => {
    return 'Hello ' + myName;
}

// Functions can also call other functions.
// Example:
function sayHello(name) {
    return 'Hello ' + name;
}

function sayGoodbye(name) {
    return 'Goodbye ' + name;
}

function sayHelloAndGoodbye(name) {
    return sayHello(name) + ' and ' + sayGoodbye(name);
}

var greeting = sayHelloAndGoodbye('Henrik');
console.log(greeting); // Hello Henrik and Goodbye Henrik
```
