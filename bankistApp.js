//7 Primitive Data Types
/*
1. Number: Floating point numbers - Used for decimals and integers
2. String: Sequence of characters - Used for text
3. Boolean: Logical type that can only be true or false - Used for taking decisions
4. Undefined: Value taken by a variable that is not yet defined ('empty value')
5. Null: Also means 'empty value'
6. Symbol: Value that is unique and cannot be changed
7. BigInt: Larger integers than the Number data type can hold

*/

// Use let instead of var or const when you might assign a new vlaue to a variable

//Strict Mode - it creates visible errors without this errors would not be visible
"use strict"; //Always put it before any code.

let myName = "Alex";
console.log(myName);

//To assign a new value to the same variable do this:
myName = "Alejandro"; //don't use let again
console.log(myName);

console.log(myName);

//The data type is shown when you use typeof
console.log(typeof true);
console.log(typeof myName);
console.log(typeof "23");
console.log(typeof "Jonas");

/* Math Operators */
const now = 2037;
const ageJonas = now - 1991;
const ageEmily = now - 2018;

console.log(ageJonas, ageEmily); //You can have multiple values in the same log

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); //2 ** 3 means 2 to the power of 3

const firstName = "Alex";
const lastName = "Ochoa";
console.log(firstName + " " + lastName);

/* Assignment Operators */
let u = 10 + 5;
u += 10; //This is u + 10
u *= 4;
console.log(u); //The output would me 100

/* Comparison Operators */

let w, t;
w = t = 25 - 10 + 5;
console.log(w, t); //The output would be 10 10

/* Precedence */
//The order in which things are executed is determined by operator types' level of precedence.
//Example:

const pricePotatos = 2;
const priceTomatoes = 4;

//Without the parentheses, priceTomatoes would be divided by 2 first and then this would be added to pricePotatos.
// const averagePrice = pricePotatos + priceTomatoes / 2;

const averagePrice = (pricePotatos + priceTomatoes) / 2;

//Coding Challenge #1
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

let markBMI = markMass / markHeight ** 2;
console.log("Mark BMI:" + " " + markBMI);

let johnBMI = johnMass / johnHeight ** 2;
console.log("John BMI:" + " " + johnBMI);

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

/* String and Template Literals */

const middleName = "Jeram";
const job = "Web Developer";
const birthYear = 1999;
const year = 2022;

const alex =
  "I'm " +
  middleName +
  ", a " +
  (year - birthYear) +
  "years old" +
  " " +
  job +
  "!";
console.log(alex);

//You can replace the quotations above by placing everything inside these ticks ` `
//to avoid having to put quotations around each string of text.
const alexNew = `I'm ${middleName}, a ${year - birthYear} year old ${job}!`;
console.log(alexNew);

console.log(`Just a regular string...`); //You can use ticks even if it's just a string by itself

//By using ticks you can also do this to have text on different lines
console.log(`String 
multiple
lines`);

/* Control Structures - If Else Statements */

const age = 19;
const isOldEnough = age >= 18;

//when you use if the output will always be a boolean so either true or false
if (isOldEnough) {
  console.log("Sarah can get her driving license"); //Since this is true, the string will be shown
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`); //This will only be shown if the code above is false
}

const birthDate = 1991;

let century; //If this was below the code block / below the curly brackets, it would not execute
if (birthDate <= 2000) {
  century = 20;
} else {
  century = 21;
}
//let century
console.log(century);

//Coding Challenge #2
let peterMass = 78;
let peterHeight = 1.69;
let jakeMass = 92;
let jakeHeight = 1.95;
const peterBMI = peterMass / peterHeight ** 2;
const jakeBMI = jakeMass / jakeHeight ** 2;
let higherBMI;
if (peterBMI > jakeBMI) {
  higherBMI = `Peter's BMI (${peterBMI}) is higher than Jake's (${jakeBMI})`;
} else {
  higherBMI = `Jakes's BMI (${jakeBMI}) is higher than Peter's (${peterBMI})`;
}
console.log(higherBMI);

const inputYear = "1991";
console.log(Number(inputYear)); //This turns the string into a number.
console.log(inputYear + 18); //This will not add the two together because inputYear is a string and not a number. You can convert it into a number. Shown above.

console.log(String(23)); //You can also convert a number into a string.

//The number will show up as a string because it is between two strings and plus signs.
console.log("I am" + 23 + " years old");

//Since there are minus signs here instead of plus signs, the strings are converted to numbers.
console.log("23" - "10" - 3);

//The strings are converted to numbers because of the division signs.
console.log("25" / "10" / 3);

//The strings are converted to numbers because of the multiplication signs.
console.log("25" * "10" * 3);

let n = "1" + 1; //The outcome of this is '11'
n = n - 1; //This turns it into a number because of the negative sign
console.log(n); //The output is the number 10

let ny = "10" - "4" - "3" - 2 + "5";
console.log(ny); //The output would be the string 15

/* 5 falsy values: 0, '', undefined, null, NaN */

console.log(Boolean(0)); //The output would be False
console.log(Boolean(undefined)); //The output would be False
console.log(Boolean("Jonas")); //The output would be True
console.log(Boolean("")); //The output would be False

//Example:
//Since money is in parentheses, it is trying to be converted to a Boolean but since money = 0 and 0 is a falsy value this returns false so it won't be shown
const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

//Since height is undefined, it is a falsy value so it will return false and the else statement will execute
let height;
if (height) {
  console.log("Yay");
} else {
  console.log("Boo");
}

//Since the question for the prompt is a string, you need to convert it to a number so that the message below is executed if the user input is 23.
// const favorite = Number(prompt("What's your favorite number?")); //This creates an input for the user.
// console.log(favorite); //This returns the user's input.
const favorite = 0;
if (favorite === 23) {
  console.log("Cool! 23 is a great number");
} else if (favorite === 7) {
  console.log("7 is also a cool number");
} else if (favorite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7");
}

if (favorite !== 23) console.log("Why not 23?"); // !== means not

/* Basic Boolean Logic: the And, Or & Not Operators */

//And - True when all are true

//Or Operator - True when one is true

//& Not Operator - Inverts true/false value

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision); //Output is true
console.log(hasDriversLicense || hasGoodVision); //Output is true
console.log(!hasDriversLicense); //Output is false

if (hasDriversLicense && hasGoodVision) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive...");
}

const isTired = true;
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive...");
}

//Coding Challenge #3

const dolphinsTeam = (96 + 108 + 89) / 3;
const koalasTeam = (88 + 91 + 110) / 3;
console.log(dolphinsTeam, koalasTeam);

if (dolphinsTeam > koalasTeam) {
  console.log("The Dolphins win with a score of" + " " + dolphinsTeam);
} else if (koalasTeam > dolphinsTeam) {
  console.log("The Koalas win with a score of" + " " + koalasTeam);
} else if (dolphinsTeam === koalasTeam) {
  console.log("It is a tie!");
}

const teamDolphins = (97 + 112 + 101) / 3;
const teamKoalas = (109 + 95 + 123) / 3;
console.log(teamDolphins, teamKoalas);

if (teamDolphins > teamKoalas && teamDolphins >= 100) {
  console.log("The Dolphins win with a score of" + " " + teamDolphins);
} else if (teamKoalas > teamDolphins && teamKoalas >= 100) {
  console.log("The Koalas win with a score of" + " " + teamKoalas);
} else if (
  teamDolphins === teamKoalas &&
  teamDolphins >= 100 &&
  teamKoalas >= 100
) {
  console.log("Both with the trophy!");
} else if (
  teamDolphins === teamKoalas ||
  (teamDolphins <= 100 && teamKoalas <= 100)
) {
  console.log("It is a tie!. No one wins.");
}

//Practice
// const zipCode = Number(prompt("Enter your zip code:"));
const zipCode = 0;
console.log(zipCode);
if (zipCode === 94541) {
  console.log("Hayward");
} else if (zipCode <= 501 || zipCode >= 99950) {
  console.log("Please enter a valid zip code.");
}

/* Switch Statement */

// const day = prompt('Enter day:');
const day = "monday";

switch (day) {
  case "monday": //colon not semi-colon
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend!");
    break;
  default:
    console.log("Not a valid day!");
}

/* Statements and Expressions */
//tThese are expressions
3 + 4;
1991;
true && false && !false;

if (23 > 10) {
  const str = "23 is bigger"; //This is a statement
}

/* Conditional (Ternary) Operators */

const edad = 23;
edad >= 18
  ? console.log("I like to drink wine") //This is like an if else statement. The question mark means if and the colon means else.
  : console.log("I like to drink water");

const legalAge = edad >= 18 ? "wine" : "water"; //legalAge is now conditionally defined by the edad condition
console.log(legalAge); //^
//                      |
//              This    | is a simplified version of what's below
//                      |
let drink2; //    <-----
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

//This is the most simplified version of the the top three statements.
console.log(`I like to drink ${edad >= 18 ? "wine" : "water"}`);

//Coding Challenge #4
const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value is ${
    bill + tip
  }`
);

/* Functions */
function logger() {
  console.log("My name is Alex");
}
// Calling, running, or invoking the function
logger(); /* The code that is in the function will be executed three times*/
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0); //This defines apples as 5 and oranges as 0
console.log(appleJuice); //The output is juice with 5 apples and 0 oranges.

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice); //The output is juice with 2 apples and 4 oranges.

/* Function Declarations vs Expressions */

//Function Declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1); //Output is 46

//Function Expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age2); //Output is 46

/* Arrow Functions */
//Example 1
const calcAge3 = (birthYear) => 2047 - birthYear; //the => means return
const age3 = calcAge3(1991);
console.log(age3);

//Example 2
const yearsUntilRetirement = (birthYear) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement; //The example above doesn't need a return because it's a one line function but since this is a two line function it needs a return.
};

console.log(yearsUntilRetirement(1991));

//Example 3
const yearsToRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
  //  return `${retirement} years until ${firstName}'s retirement!`
};

console.log(yearsToRetirement(1991, "Alex"));
console.log(yearsToRetirement(1981, "John"));

/* Functions Calling Other Functions */

const cutPieces = function (fruit) {
  return fruit * 4;
};

const secondFruitProcessor = function (apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
};

console.log(secondFruitProcessor(2, 3)); //The 2 is the number of apples and 3 is the number of oranges.
//These numbers go into the functions and they're both multiplied by 4.

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const numberYearsUntilRetirement = function (birthYear, firstName) {
  const age = 2037 - birthYear;
  const retirement = 65 - age;

  if (retirement > 0) {
    return retirement;
    console.log(`${firstName} retires in ${retirement} years`); //Important - This will not execute because as soon as the the return is executed it exits and executs the next return.
  } else {
    console.log(`${firstName} has already retired!`); //Important - This will execute because it is before the return.
    return -1;
    // return `Yay Retired!`;
  }

  // return `${firstName} retires in ${retirement} years `
};
console.log(numberYearsUntilRetirement(1991, "Alex"));
console.log(numberYearsUntilRetirement(1970, "Mike"));

//Summary Three Different Function Types

//Function Declaration - function that can be used before it's declared
function calculateAge(yearOfBirth) {
  return 2037 - yearOfBirth;
}

//Function Expression - essentially a function value stored in a variable
const calculateeAge = function (yearOfBirth) {
  return 2037 - yearOfBirth;
};

//Arrow Function - Great for quick one-line functions. Has no this keyword.
const calculateeeAge = (yearOfBirth) => 2037 - yearOfBirth;

// Coding Challenge #5 //

const dolphinsScore = (score1, score2, score3) => {
  const avgDolphins = (score1 + score2 + score3) / 3;
  console.log(`The Dolphins' average score is ${avgDolphins}`);
  return avgDolphins;
};
console.log(dolphinsScore(44, 23, 71));

const koalasScore = (score1, score2, score3) => {
  const avgKoalas = (score1 + score2 + score3) / 3;
  console.log(`The Koalas' average score is ${avgKoalas}`);
  return avgKoalas;
};
console.log(koalasScore(65, 54, 49));

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins * 2 > avgKoalas) {
    console.log(`Dolphins win (${avgDolphins}) vs. (${avgKoalas})!`);
    return `Dolphins Win!`;
  } else if (avgKoalas * 2 > avgDolphins);
  {
    console.log(`Koalas win (${avgKoalas}) vs. (${avgDolphins})!`);
    return `Koalas Win!`;
  }
};

console.log(checkWinner(46, 56));

//Solution
const calcAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const newCheckWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins}) vs. (${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas}) vs. (${avgDolphins})`);
  } else {
    console.log(`No team wins :(`);
  }
};
newCheckWinner(scoreDolphins, scoreKoalas);

scoreDolphins = calcAverage(85, 54, 41); //This is reassigning the let values from above. Only let variables can be reassigned. Not const.
scoreKoalas = calcAverage(23, 34, 27); //This is reassigning the let values from above
console.log(scoreDolphins, scoreKoalas);
newCheckWinner(scoreDolphins, scoreKoalas);

/* Arrays */

const friend1 = "Anmol";
const friend2 = "Alex";
const friend3 = "Sully";

const friends = ["Anmol", "Alex", "Sully"]; //This is the same as above but this is an array.
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020); //This is just an old fashioned way of this const years = [1991, 1984, 2008, 2020];
console.log(years);

console.log(friends[0]); //The output is Anmol because 0 represents the first value in the array.

console.log(friends.length); //The output is the amount of elements in the array. So the output is 3.

console.log(friends[friends.length - 1]); //friends.length is 3, minus 1 is 2 which is the last element in the array. The output is Sully.

friends[2] = "Jay"; //This reassigns the last element in this array so Sully is now Jay.
console.log(friends);

//friends = ['Bob', 'Billy']; Important - You can't reassign the entire array.

const alexOchoa = ["Alex", "Ochoa", 2023 - 1999, "Web Developer", friends];
console.log(alexOchoa);

//Exercise
const calculateAges = function (birthYear) {
  return 2037 - birthYear;
};
const numYears = [1990, 1967, 2002, 2010, 2018];
// console.log(calculateAges(numYears)); birthYear in the function above would become numYears but you can't pass an array into a function.

const age6 = calculateAges(numYears[0]); //numYears[0] is 1990 which replaces birthYear in the function so the output is 47.
const age7 = calculateAges(numYears[1]);
const age8 = calculateAges(numYears[years.length - 1]);
console.log(age6, age7, age8);

//This is a simplified version of the 4 lines of code above by putting them in an array.
const ages = [
  calculateAges(numYears[0]),
  calculateAges(numYears[1]),
  calculateAges(numYears[years.length - 1]),
];
console.log(ages);

/* Basic Array Operations (Methods) */
//Add new elements
const newFriends = ["John", "Steven", "Mike"];
newFriends.push("Joe"); //With .push 'Joe' is added to the newFriends array.
const newLength = newFriends.push("Jan"); //This is capturing the code above in a variable just added constLength = in front of the code above.
console.log(newLength);
console.log(newFriends);

//Add first element
newFriends.unshift("Jake"); //With .unshift 'Jake' is now the first element in the newFriends array.
console.log(newFriends);

//Remove elements
newFriends.pop(); //This removes the last element in the array.
// newFriends.pop(); You can add this line multiple times to remove more elements that are last.
console.log(newFriends);

const popped = newFriends.pop(); //By creating a variable for the element that was removed, that element is now equal to popped
console.log(popped); //so the output of this Joe since that is the element that was removed.

newFriends.shift(); // .shift removes the first element in the array
console.log(newFriends);

console.log(newFriends.indexOf("Steven")); //The output is 1 because that's the element's 'Steven' order in the array.

console.log(newFriends.includes("Steven")); //The output is true because 'Steven' is in the array.
console.log(newFriends.includes("Bob")); //The output is false because 'Bob' is not in the array.

if (newFriends.includes("Peter")) {
  console.log("You have a friend named Peter");
} else {
  console.log("No friend named Peter");
}

// Coding Challenge #6 //

const calcTip = function (newBill) {
  return newBill <= 300 && newBill >= 50 ? newBill * 0.15 : newBill * 0.2;
};

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips); //The output is the tip for the three numbers in the array above.

const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(total); //The output is the tips + the bills.

/* Objects - Similar to arrays because you use objects to group different variables that belong together. */
//Unlike arrays, the order of the varibles in objects does not matter.

//This is an object that contains five key value pairs.
const alejandro = {
  firstName: "Alex",
  lastName: "Ochoa",
  age: 2037 - 1999,
  job: "Web Developer",
  friends: ["Anmol", "Alex", "Sully"],
};
console.log(alejandro);

console.log(alejandro.lastName); //This is how you call specific elements from an object.

const nameKey = "Name"; //Since in the object above firstName and lastName both have Name this creates a variable for it.
console.log(alejandro["first" + nameKey]); //The output is Alex
console.log(alejandro["last" + nameKey]); //The output is Ochoa

// const interestedIn = prompt(
//   "What do you want to know about Alex? Choose between firstName, lastName, age, job, and friends"
// );
// console.log(alejandro[interestedIn]); //The prompt above asks the user to enter a response. If the response the user enters is job the output will be Web Developer since job is found in the alejandro object.

const interestedIn = 0;
//This is needed in case the user's response is anything other than firstName, lastName, age, job, friends.
if (alejandro[interestedIn]) {
  console.log(alejandro[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

alejandro.location = "California"; //This is adding this element to the alejandro object.
alejandro["twitter"] = "@ChocoBoy50"; //This is adding this element to the alejandro object.
console.log(alejandro);

//Challenge
const jonas = {
  firstName: "Jonas",
  friends: ["Michael", "Joe", "Jones"],
};
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}`
);
//The output is Jonas has 3 friends and his best friend is Michael.

/* Object Methods */

const jonasS = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: "1991",
  job: "teacher",
  friends: ["Michale", "Peter", "Steven"],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      jonasS.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(jonasS.calcAge()); //This is needed or else the output for the bottom three lines will be undefined.
console.log(jonasS.age);
console.log(jonasS.age);
console.log(jonasS.age);

console.log(jonasS.getSummary());

//Coding Challenge #7

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

console.log(mark.calcBMI());
console.log(john.calcBMI());

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than John's (${john.bmi})`
  );
} else {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than Mark's (${mark.bmi})`
  );
}

/* For Loops - used to create repetitive tasks */

//for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  //rep++ is the same as writing rep = rep + 1. rep++ is very IMPORTANT without it there would be an INFINITE amount of repetitions.
  console.log(`Lifting weight repetition ${rep}`);
}
//rep <= 10 means that as long as rep is less than or equal to 10 the console.log will be executed so this for loop will execute 10 times.
//rep = 1 mens that it will start at the first repetition but you can change this number.
//if you put rep = 5 the first output will be: Lifting weight repetition 5

// IMPORTANT - i represents the number of the element in the array so for 'Jonas' i is 0, 'Schmedtmann' i is 1
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];
const types = [];

for (let i = 0; i < jonasArray.length; i++) {
  //i represents the array so since arrays start at 0 i = 0 means the first element in the array.
  console.log(jonasArray[i]);
  console.log(jonasArray[i], typeof jonasArray[i]); //By writing typeof the output is the data types of each element in the array

  //this is done to fill the types array which is empty
  types.push(typeof jonasArray[i]);

  /*  types[i] = typeof jonasArray[i]; This is another way of writing the code above. */
}
//i < jonasArray.length means the task always needs to stay below the length of the array.

console.log(types); //The output will be the data types of each element in the jonasArray

const yearsOfBirth = [1991, 2007, 1969, 2020];
const ages2 = [];

for (let i = 0; i < yearsOfBirth.length; i++) {
  ages2.push(2037 - yearsOfBirth[i]);
}
console.log(ages2);

//continue and break

//continue
console.log("---- Only Strings ----");

for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") continue; //This means, if the data type in the jonasArray is Not a string skip it. So the outputs will ONLY be strings.

  console.log(jonasArray[i], typeof jonasArray[i]);
}

//break
console.log("---- Break with Number ----");

for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === "number") break; //This means that ones a number data type in the jonasArray appears stop the task. Since a number data type appears 3rd in the array, only the first two elements will be output.

  console.log(jonasArray[i], typeof jonasArray[i]);
}

for (let i = jonasArray.length - 1; i >= 0; i--) {
  //jonasArray.length - 1 means start at the last element in the array
  console.log(i, jonasArray[i]);
}
//This for loop says: let i equal the last element of the array; if the element is greater than the first element in the array execute. Then subtract one and move to the next element.
//The elements in the jonasArray are output from last to first.

//A for loop within a for loop
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}

//The while Loop

for (let repetition = 1; repetition <= 10; repetition++) {
  console.log(`Lifting weight repetition ${repetition}`);
}

let repetition = 1;
while (repetition <= 10) {
  console.log(`Lifting weight repetition ${repetition}`);
  repetition++;
}

//This gives a random number between 1 and 6
let dice = Math.trunc(Math.random() * 6) + 1; //Math.trunc removes any decimals so only whole numbers are output. Math.random() means give a number between 0 and 1
// console.log(dice);

//if a random number gotten from above is not 6 then the while loop below will execute. Once a number 6 appears, the loop will no longer execute. And since there's an if for the number 6 then that will execute.
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1; //Math.trunc removes fractional digits and give a whole number. So if a number if 5.4 it would give 5.
  if (dice === 6) console.log("Loop is about to end...");
}

//Important - if 6 is the first number to appear then the while loop will never execute and nothing will appear.

//Coding Challenge #8
const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips2 = [];
const totals2 = [];

const calcTip2 = function (newBill) {
  return newBill <= 300 && newBill >= 50 ? newBill * 0.15 : newBill * 0.2;
};

for (let i = 0; i < bills2.length; i++) {
  tips2.push([calcTip2(bills2[i])]);
  totals2.push(calcTip2(bills2[i]) + bills2[i]);
}
console.log(tips2);
console.log(totals2);

//My solution works, but the solution below is more efficeient because by creating the const tip, calcTip3 is only executed
//once instead of two times like in my solution.

//Solution

const bills3 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips3 = [];
const totals3 = [];

const calcTip3 = function (newBill) {
  return newBill <= 300 && newBill >= 50 ? newBill * 0.15 : newBill * 0.2;
};

for (let i = 0; i < bills3.length; i++) {
  const tip = calcTip3(bills3[i]);
  tips3.push(tip);
  totals3.push(tip + bills3[i]);
}
console.log(bills3, tips3, totals3);

//Bonus
const calcAverage4 = function (arr) {
  //arr means any array
  let sum = 0; //This is needed in order to declare sum. Without this sum would be undefined.
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; //sum += is the simplified version of sum = sum + arr[i];
    //This adds the numbers because the first number in the array becomes i so now sum equals that number. Then when the next number in the array becomes i that will be added to the sum which is the first number. This will be repeated as long as i is less than the length of the array. So if the length of the array is 5. Then 0 < 5, 1 < 5, 2 < 5, 3 < 5, 4 < 5.
  }
  return sum / arr.length;
};
console.log(calcAverage4([2, 5, 11])); //The output is 6
console.log(calcAverage4(totals3));

//For loop practice
const pandas = [96, 108, 89];
const dogs = [88, 91, 110];

const sumTeams = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
const pandasTeam = sumTeams(pandas);
const dogsTeam = sumTeams(dogs);
console.log(pandasTeam, dogsTeam);
console.log(pandasTeam, dogsTeam);

//Functions practice
const calculateSum = function (x, y) {
  return x + y;
};
console.log(calculateSum(2, 3));

let numbers = [3, 5, 7, 9];
const calculateAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calculateAverage(numbers));

//Write a function isPositive that takes a number as input and returns a boolean value indicating whether the number is positive or negative.

const isPositive = function (x) {
  if (x >= 0) {
    return true;
  } else {
    return false;
  }
};
console.log(isPositive(-2));

//Write a function calculateFactorial that takes a non-negative integer n as input and returns the factorial of n. The factorial of a non-negative integer n is the product of all positive integers less than or equal to n.

const calculateFactorial = function (n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    //This will execute as long as i which is 1 is less than or equal to n, in this case 5.
    result *= i; //So, since result = 1, the first iteration of this loop is 1 * 1, the second is 1 * 2, then 2 * 3, then 6 * 4, then 24 * 5. So the output is 120.
  }
  return result;
};

console.log(calculateFactorial(5));

//Write a function reverseString that takes a string as an argument and returns the string in reverse order.

const reverseString = function (str) {
  //str means it takes any string
  return str.split("").reverse().join("");
};
console.log(reverseString("Hello")); //Output is olleH
//In this implementation, str.split('') splits the input string into an array of individual
//characters, reverse() reverses the order of the elements in the array, and join('') concatenates
//the elements of the array back into a single string. The result of the function is the reversed string.

//Write a function findMax that takes an array of numbers as an argument and returns the maximum value in the array.
const findMax = function (arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
console.log(findMax([2, 5, 6]));

console.log("----Break----");
//My own exercise - Find the median of an array and return the corresponding element.

const randomArray = [
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
];
let number = 0;
const findMedian = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    number = (arr.length + 1) / 2;
    if (arr.length % 2 === 0) {
      console.log("Please enter an odd number.");
    } else {
      return arr[Math.ceil(number - 1)]; //Math.ceil gives a number always rounded up. If a number is 5.3 it will become 6.
    } //Math.floor gives a number always rounded down. So if the number was 5.7 it would become 5.
  }
};
const median = findMedian(randomArray);
console.log(median);

console.log("----Break----");
//Write a function that takes a number as input and returns the sum of all positive integers
//up to and including that number. For example, if the input is 4, the function should return
//10. This comes from (1 + 2 + 3 + 4).

const sumIntegers = function (num) {
  let sumNum = 0;
  let b = 1;
  while (b <= num) {
    sumNum += b;
    b++;
  }
  return sumNum;
};
console.log(sumIntegers(4)); //Output is 10

console.log("----Break----");
//Write a function called `sumOddIntegers` that takes in a positive integer `n` as a parameter,
//and returns the sum of all odd integers from 1 to `n`.
//For example, `sumOddIntegers(7)` should return `16` because the odd integers from 1 to 7
//are 1, 3, 5, and 7, and their sum is `16`.

function sumOddIntegers(n) {
  let sum = 0;
  let i = 1;
  while (i <= n) {
    if (i % 2 !== 0) {
      //This means that if i has a remainder not equal to 0 or in other words, if i has a remainder...
      sum += i; //sum is now what i is. So if i was 3 then now sum is 3. So when the while loop is entered again the next i will be added to 3.
    }
    i++; //This is outside the if loop so it doesnt add 1 to the i in the if loop. This is in the while loop so it only applies to (i <= n). So since let i = 1, the first iteration of the while loop is (1 <= n), then for next iteration it is (2 <= n) because 1 was added 1 by i++.
  }
  return sum;
}
console.log(sumOddIntegers(7));

console.log("----Break----");

const numbersArray = [28, 34, 8, 24, 2, 5];
const newArray = function (arr) {
  let max = arr[0];
  for (let b = 0; b < arr.length; b++) {
    if (arr[b] > max) {
      max = arr[b];
    }
  }
  return max;
};
console.log(newArray(numbersArray));

console.log("----Break----");

//Write a function that takes an array of strings as an argument and returns an array of all the strings that have a length greater than 5 characters.

const words = ["eijiej", "eijijeie", "e", "12345"];

function longStrings(strings) {
  //strings takes any string
  let longStrings = [];
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > 5) {
      longStrings.push(strings[i]);
    }
  }
  return longStrings;
}
console.log(longStrings(["a", "abcd", "abcdef", "abcdefg", "kkkkkk"]));
console.log(longStrings(words));

const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

console.log("----Break----");

//This is an example of 3 functions calling each other:

function multiplyByTwo(number) {
  return number * 2;
}

function divideByThree(number) {
  return number / 3;
}

function calculate(number) {
  let result = multiplyByTwo(number);
  result = divideByThree(result);
  return result;
}

console.log(calculate(6));

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Jonas Schmedtmann");
lufthansa.book(535, "Alex Ochoa");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;
// This doesn't work:
// book(23, "Sarah Williams");

// Call Method
// You have to do this:
book.call(eurowings, 23, "Sarah Williams");
console.log(eurowings);

book.call(lufthansa, 239, "Mary Cooper");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

// Apply Method
const flightData = [583, "George Russell"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData); // this is simpler than using the Apply Method

// Bind Method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, "Steven Williams");
bookLH(234, "Lewis Hamilton");
bookLX(523, "Sergio Perez");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Fernando Alonso");
bookEW23("Lance Stroll");

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); // presetting 0.23 as the rate and since for the bind method you need the this keyword or an object, since we're not using an object here you put null.
// addVAT = (rate, value) => value + value * 0.23; // this is what's above
console.log(addVAT(100));
console.log(addVAT(23));

// Function returning a function
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(23));

// Coding Challenge

const poll = {
  question: "What is your favorite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    let question = Number(
      prompt(`${this.question}\n ${this.options.join("\n")}`)
    );
    if (question > 0 && question < 4) {
      this.answers[question] += 1;
    } else {
      alert("Please enter a number from 0 to 3");
    }
    if (typeof question === "number" && question > 0 && question < 4) {
      this.displayResults();
      this.displayResults("string");
    }
  },

  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

const pollQuestion = poll.registerNewAnswer;

document
  .querySelector(".poll")
  .addEventListener("click", pollQuestion.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, "string");

// Immediately Invoked Function Expressions
(function () {
  console.log("This will never run again");
})();

(() => console.log("This will also never run again"))();

{
  const isPrivate = 23;
  let isPrivate2 = 23;
  var notPrivate = 46;
}
// console.log(isPrivate); // CAN'T access because it's const
// console.log(isPrivate2); // CAN'T access because it's let
console.log(notPrivate); // CAN access because it's var so output is 46

// Closures - a closure is the closed-over variable environment of the execution context in which a function was created, even after that execution context is gone.
// a closure gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preserves the scope chain throughout time.
// a closure makes sure that a function doesn't lose connection to variables that existed at the function's birthplace
// We do NOT have to manually create closures, it is a JavaScript feature that happens automatically. We can't even access closed over variables explicitly. A closure is NOT a tangible JavaScript object
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();

booker(); // 1 passengers
booker(); // 2 passengers
booker(); // 3 passengers

console.dir(booker);

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f(); // 46 (Note: If the g function isn't called before calling this function then it won't run.)
// Re-assigning f function
h();
f(); // 1554

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000; // Since the perGroup is already defined inside the boardPassengers function, the function will run using n / 3 and 1000 will NOT be used.
boardPassengers(180, 3);

// Closure example
(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();

// Splice Method
let arr = ["a", "b", "c", "d", "e"];
console.log(arr.splice(2)); // ['c', 'd', 'e']
console.log(arr); // ['a', 'b']
// arr.splice(1, 2); // first number is start index and second is number of elements to delete

// Concat Method - join two arrays
const arr2 = ["l", "i", "h"];
const letters = arr.concat(arr2);
console.log(letters); // ['a', 'b', 'l', 'i', 'h']

// At Method - returns an element at a specified index
const arr3 = [23, 11, 64];
console.log(arr3.at(1)); // 11
console.log(arr3.at(-1)); // 64

// For of Method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  console.log(`Movement ${i + 1}`);
}

// For Each Method
movements.forEach(function (movement, i) {
  if (movement > 0) {
    console.log(`Movement: ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});
// for each method with map
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(["USD", "GBP", "EUR", "EUR"]);
currenciesUnique.forEach(function (value, _, map) {
  // Sets don't have keys so you don't need the key so you use _ to represent it's a throwaway value
  console.log(`${_}: ${value}`);
});

// Coding Challenge

const checkDogs = function (dogsJulia, dogsKate) {
  let copyDogsJulia = [...dogsJulia];
  copyDogsJulia.splice(-2);
  copyDogsJulia.splice(0, 1);
  let correctedData = [...copyDogsJulia, ...dogsKate];
  correctedData.forEach(function (dog, i) {
    console.log(
      dog >= 3
        ? `Dog number ${i + 1} is an adult and is ${dog} years old`
        : `Dog number ${i + 1} is still a puppy`
    );
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

const calcAverageHumanAge = function (ages) {
  const humanAges = ages
    .map((x) => (x <= 2 ? 2 * x : 16 + x * 4))
    .filter((x) => x >= 18);
  const averageHumanAge = Math.round(
    humanAges.reduce((a, b) => a + b) / humanAges.length
  );
  return averageHumanAge;
  return humanAges;
};
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// Find Method - returns the first element that meets the specified condition(s)
const firstWithdrawal = movements.find((x) => x < 0);
console.log(firstWithdrawal); // -400

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
};
const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -20],
  interestRate: 1.5,
  pin: 2222,
};
const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -450],
  interestRate: 0.7,
  pin: 3333,
};
const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// The Find Method is useful to get a specific object from an array
const account = accounts.find((x) => x.owner === "Jessica Davis");
console.log(account); // {owner: 'Jessica Davis', movements: Array(8), interestRate: 1.5, pin: 2222, username: 'jd'}

// Some Method - useful to find if there is one or more elements that meet the specified condition. Returns a boolean
const anyDeposits = movements.some((x) => x > 1500);
console.log(anyDeposits); // true
console.log(movements.some((x) => x === -130)); // true

// Every Method - ONLY if EVERY element passes the specified condition it returns true
console.log(movements.every((x) => x > 0)); // false
console.log(account4.movements.every((x) => x > 0)); // true

// Separtate callback
const deposit = (mov) => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

// Flat Method - removes nested arrays and returns a single array with all the elements
const arr4 = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr4.flat()); // [1, 2, 3, 4, 5, 6, 7, 8]

// Flat Method continued... - takes an input to determine the level of depth it will go to. For example, if there are 3 nested arrays then input 3 to flatten the array.
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8]; // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(arrDeep.flat(2));

// use the map method to first get the movements from each account in the accounts array and then the flat method to have all the elements in a single array.
const overallBalance = accounts
  .map((x) => x.movements)
  .flat()
  .reduce((a, b) => a + b);
console.log(overallBalance);

// FlatMap - combines the flat and map methods. Note: this only goes one level of nesting deep so if you need to flatten an array that's more than 1 level deep then you have to use the flat and map methods SEPERATELY
const overallBalance2 = accounts
  .flatMap((x) => x.movements)
  .reduce((a, b) => a + b);
console.log(overallBalance2);

// Fill Method
const x = new Array(7).fill(1, 3); // You can have a second argument to determine the start index
const x2 = new Array(7).fill(1, 3, 5); // You can have a third argument to determine the end index
console.log(x);
console.log(x2);

const test = [2, 4, 5, 6, 7, 8];
test.fill(23, 2, 4);
console.log(test); // [ 2, 4, 23, 23, 7, 8]

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y); // [1, 1, 1, 1, 1, 1, 1]

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

// Array Methods Practice
const bankDepositSum = accounts
  .flatMap((x) => x.movements)
  .filter((x) => x > 0);
//   .reduce((a, b) => a + b);
console.log(bankDepositSum);

// const numDeposits1000 = accounts
//   .flatMap((x) => x.movements)
//   .filter((x) => x >= 1000);
const numDeposits1000 = accounts
  .flatMap((x) => x.movements)
  .reduce((count, curr) => (curr >= 1000 ? ++count : count), 0);

console.log(numDeposits1000); // 6

const { deposits, withdrawals } = accounts
  .flatMap((x) => x.movements)
  .reduce(
    (sums, curr) => {
      //   curr > 0 ? (sums.deposits += curr) : (sums.withdrawals += curr);
      //   return sums;
      sums[curr > 0 ? "deposits" : "withdrawals"] += curr;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals);

//
const convertTitleCase = function (title) {
  const capitalize = (str) => str[0].toUpperCase() + str.slice(1); // This is created to use in the return in order to capitalize an exception word in case it is the first word in the sentence

  const exceptions = ["a", "an", "the", "but", "or", "on", "in", "with", "and"];

  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((x, i) =>
      !exceptions.includes(x) ? x[0].toUpperCase() + x.slice(1) : x
    )
    .join(" ");
  return capitalize(titleCase);
};
console.log(convertTitleCase("This is a nice title")); // This Is a Nice Title
console.log(convertTitleCase("This is a LONG title but not too long")); // This Is a Long Title but Not Too Long
console.log(convertTitleCase("And here is another title with an EXAMPLE")); // This Is a Long Title but Not Too Long

// Coding Challenge
const dogs2 = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

dogs2.forEach(function (dog) {
  dog.recommendedFoodPortion = Math.trunc(dog.weight ** 0.75 * 28);
  if (dog.owners.includes("Sarah")) {
    console.log(
      `Sarah's dog is eating too ${
        dog.curFood > dog.weight * 0.75 * 28 ? "much" : "little"
      }`
    );
  }
});
let ownersEatTooMuch = [];
let ownersEatTooLittle = [];
dogs2.forEach(function (dog) {
  if (dog.curFood > dog.recommendedFoodPortion) {
    ownersEatTooMuch.push(dog.owners);
  } else {
    ownersEatTooLittle.push(dog.owners);
  }
});
console.log(dogs2);
console.log(ownersEatTooMuch.flat(2));

ownersEatTooMuch =
  ownersEatTooMuch.flat(2).join(" and ") + "'s" + " " + "dogs eat too much!";
ownersEatTooLittle =
  ownersEatTooLittle.flat(2).join(" and ") +
  "'s" +
  " " +
  "dogs eat too little!";
console.log(ownersEatTooMuch.replaceAll(",", " and "));
console.log(ownersEatTooLittle.replaceAll(",", " and "));

let okayAmountFood = [];
let arrayDogsEatingOkayAmount = [];

dogs2.forEach(function (dog) {
  if (
    dog.curFood > dog.recommendedFoodPortion * 0.9 &&
    dog.curFood < dog.recommendedFoodPortion * 1.1
  ) {
    okayAmountFood.push(true);
    arrayDogsEatingOkayAmount.push(dog.owners);
  }
});
console.log(dogs2.some((dog) => dog.curFood === dog.recommendedFoodPortion));
console.log(
  dogs2.some(
    (dog) =>
      dog.curFood > dog.recommendedFoodPortion * 0.9 &&
      dog.curFood < dog.recommendedFoodPortion * 1.1
  )
);
console.log(okayAmountFood.includes(true));
console.log(arrayDogsEatingOkayAmount);

// 8.
const dogsCopy = dogs2
  .slice()
  .sort((a, b) => a.recommendedFoodPortion - b.recommendedFoodPortion);
console.log(dogsCopy);

// ParseInt and ParseFloat
console.log(Number.parseInt("30px")); // 30
console.log(Number.parseInt("e23")); // Nan
console.log(Number.parseInt("  2.5rem  ")); // 2
console.log(Number.parseFloat("  2.5rem  ")); // 2.5

// isNaN
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN("20")); // false
console.log(Number.isNaN(+"20X")); // true
console.log(Number.isNaN(23 / 0)); // false

// isFinite is best to find if a value is a number
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite("20")); // false

// isInteger
console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0)); // true
console.log(Number.isInteger(23 / 0)); // false

// Math.max
console.log(Math.max(5, 18, "23", 11, 2)); // 23
console.log(Math.max(5, 18, "23px", 11, 2)); // NaN

// Math.min
console.log(Math.min(5, 18, "23", 11, 2)); // 2

// Math.PI
console.log(Math.PI * Number.parseFloat("10px") ** 2); // 314.1592653589793

console.log(Math.trunc(Math.random() * 6) + 1); //

// Random number between two given numbers
const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20)); // output is a random number between 10 and 20

// Rounding decimals
console.log((2.7).toFixed(0)); // '3'
console.log((2.7).toFixed(3)); // '2.700'
console.log((2.345).toFixed(2)); // '2.35'
console.log(+(2.345).toFixed(2)); // 2.35

// Underscores as numberic separators. Not allowed to be placed at the start or end of a number or before or after a decimal
const diameter = 287_460_000_000;
console.log(diameter); // 287460000000

const price = 345_99;
console.log(price); // 34599

// not allowed
// const p1 = _1234
// const p2 = 1234_
// const p3 = 3_.1234
// const p4 = 3._1234

// BigInt
console.log(483467483943570509537538229422424n);
console.log(BigInt(483467483943570509537538229422424));

console.log(33850509408383853830n * 10000000n);

const huge = 204483843843734343n;
const num = 23;
// console.log(huge * num); not possible to multiply a bigInt by a normal number

console.log(11n / 3n); // Returns the closest number rounded. Output is 3n
console.log(12n / 3n); // 4n

// Create a date
const nowT = new Date();
console.log(nowT);
console.log(new Date("October 31, 2023")); // Tue Oct 31 2023 00:00:00 GMT-0700 (Pacific Daylight Time)

// the months start at 0 so January is 0 February is 1 etc...
console.log(new Date(2037, 10, 19, 15, 23, 5)); // Thu Nov 19 2037 15:23:05 GMT-0800 (Pacific Standard Time)
console.log(new Date(2037, 10, 31)); // Since November 31 doesn't exist, it will output the next day which is: Tue Dec 01 2037 00:00:00 GMT-0800 (Pacific Standard Time)
console.log(new Date(0)); // Wed Dec 31 1969 16:00:00 GMT-0800 (Pacific Standard Time)
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // Sat Jan 03 1970 16:00:00 GMT-0800 (Pacific Standard Time)

// working with dates - date methods
const future = new Date(2037, 10, 19, 15, 23);
console.log(future.getFullYear()); // 2037
console.log(future.getMonth()); // 10
console.log(future.getDate()); // 19
console.log(future.getDay()); // 4
console.log(future.getHours()); // 15
console.log(future.getMinutes()); // 23
console.log(future.getSeconds()); // 0
console.log(future.toISOString()); // 2037-11-19T23:23:00.000Z

future.setFullYear(2040);
console.log(future); // Mon Nov 19 2040 15:23:00 GMT-0800 (Pacific Standard Time)

console.log(Number(future));

// subtracting two dates
const calcDaysPassed = (date1, date2) =>
  Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1); // 10

// Internationalization API Dates
const now2 = new Date();

const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "numeric", // long shows the month so September, there's also 2-digit, numeric
  year: "numeric",
  // weekday: "long",
};

const timeAndDate = new Intl.DateTimeFormat(navigator.language, options).format(
  // navigator.language is the current user's country's format
  now2
);
console.log(timeAndDate); // 9/8/2023, 10:47 AM

// Internationalization Numbers
const num2 = 3884764.23;

const units = {
  style: "unit",
  unit: "mile-per-hour",
};

const temps = {
  style: "unit",
  unit: "celsius",
};

const percent = {
  style: "percent",
};
const currency = {
  style: "currency",
  currency: "EUR",
};

console.log(new Intl.NumberFormat("en-US").format(num2)); // 3,884,764.23
console.log(new Intl.NumberFormat("de-DE").format(num2)); // 3.884.764,23
console.log(new Intl.NumberFormat(navigator.language).format(num2)); // ٣٬٨٨٤٬٧٦٤٫٢٣ // navigator.language is the current user's country's format

// Units
console.log(new Intl.NumberFormat("en-US", units).format(num2)); // 3,884,764.23 mph
console.log(new Intl.NumberFormat("de-DE", units).format(num2)); // 3.884.764,23 mi/h
console.log(new Intl.NumberFormat(navigator.language, units).format(num2)); // 3,884,764.23 mph

// Temps
console.log(new Intl.NumberFormat("en-US", temps).format(num2)); // 3,884,764.23°C
console.log(new Intl.NumberFormat("de-DE", temps).format(num2)); // 3.884.764,23 °C
console.log(new Intl.NumberFormat(navigator.language, temps).format(num2)); // 3,884,764.23°C

// Percent
console.log(new Intl.NumberFormat("en-US", percent).format(num2)); // 388,476,423%
console.log(new Intl.NumberFormat("de-DE", percent).format(num2)); // 388.476.423 %
console.log(new Intl.NumberFormat(navigator.language, percent).format(num2)); // 388,476,423%

// Currency
console.log(new Intl.NumberFormat("en-US", currency).format(num2)); // €3,884,764.23
console.log(new Intl.NumberFormat("de-DE", currency).format(num2)); // 3.884.764,23 €
console.log(new Intl.NumberFormat(navigator.language, currency).format(num2)); // €3,884,764.23
