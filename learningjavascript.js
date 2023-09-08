/* Variables */

//Don't start variable names with capital letters
//Don't have a variable called name. Instead use firstName, myName, etc.

//Use const instead of var becuase const is the updated way to declare variables

var x = 5;
var y = 6;
alert(x + y); //comment

var salesTax = 7.25;
var calculatedSalesTax = 1 + (salesTax * 1) / 100;
var netPriceOfPotatoes = 4;
var netPriceOfMilk = 3;

var priceOfPotatoes = netPriceOfPotatoes * calculatedSalesTax; //this is a simplified form of having (1 + salesTax * 1/100)
var priceOfMilk = netPriceOfMilk * (1 + (salesTax * 1) / 100);
alert(priceOfPotatoes);

var name = "Alex";
var lastName = "Ochoa";
alert(name + " " + lastName); //you can display multiple variable at the same time
//" " is used to create a space between name and lastName

//capital letters inside of variables matter so salesTax and SALESTAX are two different variables

/* End of Variables */

/* Operators */

/* Arithmetic Operators
*   +
*   -
*   *
*   /
*   % the remainder of the division (mod operator)
*   = assigning value
*   +=
*   -=
*   /=
*   *=
*   *%

*   ++ incrementation - increase the value by 1
*   -- decrementation - decrease the value by 1

*/

var x = 3;
var y = 2;
alert(x % y); //The percentage sign means that the remainder of 3 divided by 2 will show up. In this case 1.

var x = 3;

x += 2; //this is the same as this but simplified x = x + 2; The output for both is 5
x *= 3; //The output is 9.
x++; //The output is 4.
// you can also type it as ++x; but the order matters when it's in alert
var z = 2;
alert(++z); //Since the + signs are before the b the output shows as 3
alert(z++); //Since the + signs are after the b the output shows as 2

// Relational Operators (comparison operators)
//  == is used to compare things. You can also use three equal signs ===
//  === variables must be the same type too. They must be identical.

//  != This checks whether two things are different.
//  For example: alert(a != b); Since it's asking whether a and b are different the output would be true.
//  alert(a != b); If a = 5 and b = 5, the output would be false since they are not different.

//  > greater than
//  < less than
//  >= greater than or equal to
//  <= less than or equal to

var a = 5;
b = 3;
alert(a === b); //output is false

/* Logical Operators
 *   0 - false, 1 - true
 *
 *   ! - NOT - will return the opposite output.
 *
 *   !(0) - the result to 1
 *   !(1) - the result to 0
 *
 *   && - conjunction - means AND - So an output will only be true if both things happen
 *
 *   expr 1  expr2  result
 *   0       0      0
 *   1       0      0
 *   0       1      0
 *   1       1      1
 *
 *   CONJUNCTION is TRUE only if both expressions are true at the same TIME
 *
 *   password1 == password2 && isTermsChecked == 1   //what this means is that the output would only be true if the passwords are the same AND if the terms are checked
 *
 *
 *   || - disjunction - OR (alternative)
 *
 *   expr 1  expr2  result
 *   0       0      0  //there is no alternative so the results is 0
 *   1       0      1  //there is an alternative
 *   0       1      1  //there is an alternative
 *   1       1      1  //there is an alternative
 *
 *   DISJUNCTION IS FALSE only when both expressions are FALSE at the same time
 */
//Conjunction example:
var d = 7;
var e = 3;

//1         //0
if (d > e && e == 5)
  //Since d is greater than e but e is not equal to 5, the alert would NOT show up.
  alert("test");

//Disjunction example:
var f = 7;
var g = 3;

//1         //0
if (f > g || g == 5)
  //Although g is not equal to 5, since f is greater than g, the alert WOULD show up because the first statement is true. There is an alternative.
  alert("test");

if (!(f > g || g == 5))
  //Since the exclamation mark means NOT, it will return the opposite. So instead of NoTest showing up, it will no longer show up.
  alert("NoTest");
/* End of Operators */

/* CONDITIONAL statements*/
if (5 > 3)
  //Since this is true, it will return the instruction below. If it is false, the instructions will not execute.
  alert("react");

var a = 2;
var b = 3;

if (a > b)
  //since this is false the alert will not display but the one below will.
  alert(
    a + " is bigger than " + b
  ); //If this was true, the alert below WOULDN'T show up even though it's true.
else if (a < b) alert(a + " is lower than " + b);
else alert("a == b"); //this will only be executed if the previous two statements are false.

var x = 5;
var y = 3;
if (x > y)
  //writing two if statements instead of if and else if means that if both statements are true, the one below WILL show up.
  alert(x + " is bigger than " + y);
if (x > y) alert(x + " is lower than " + y);

var m = 6;
var n = 2;

if (m > n) alert(m + " is more than " + n);
else if (m < n) {
  alert(m + " is less than " + n); //Use curly brackets to group more than one instruction
  alert("test");
}

//Shortened Conditional Statements called OPERATOR
var x = 2;
var isEven;

if (x % 2 === 0) isEven = true;
else isEven = false;

alert(isEven);

//Shortened version of what's written above.
var isEven = x % 2 === 0 ? true : false;

//Even more shortened version of the line above.
alert(x % 2 === 0 ? "the value is even" : "the value is not even");

/* End of CONDITIONAL statements*/

/* Switch (toggle) */
var dayOfWeek = 1;

switch (dayOfWeek) {
  case 1:
    alert("Monday");
    break; //without break, all the alerts would execute
  case 2:
    alert("Tuesday");
    break;
  default: //this is what would execute if var dayOfWeek didn't equal 1 or 2.
    alert("This is not a day of the week");
}

var dayOfWeek = 5;

switch (dayOfWeek) {
  case 1:
    alert("OH NOT IT'S MONDAY"); //this would only execute if the dayOfWeek was 1
  case 2:
  case 3:
  case 4:
  case 5:
    alert("Working day"); //this would execute if the dayOfWeek was 1-5
    break; //without break, all the alerts would execute
  case 6:
  case 7:
    alert("It's the weekend");
    break;
  default: //this is what would execute if var dayOfWeek didn't equal 1 or 2.
    alert("This is not a day of the week");
}

/* Functions - Function is a block of code which can be invoked (executed)
               as many times as we want in different places in our code by us or even other people. */

function test() {
  return 5;
}

var a = test();

alert(a); //This will alert 5. Whatever is put in return will be shown.

function add(x, y) {
  return x + y;
}

function divide(x, y) {
  if (y === 0) return "you can't divide by 0";
  //could add else here but it's not needed
  return x / y;
}

var result = divide(3, 0);

alert(result);

// Scope of variables within thin the script / functions
// Scope (range) means where the variable is available

function test() {
  //  a = 3; When written like this, a is a global variable meaning it applies to anywhere on the page where a appears
  var a = 3; //When written like this, the variable a only applies to whatver is inside this
  //  function so the alert below will not execute. Always write it like this.
  alert(a);
}

test();

alert("a: " + a);
