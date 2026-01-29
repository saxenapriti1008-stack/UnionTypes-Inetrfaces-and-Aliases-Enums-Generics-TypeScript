
/*classlesson:example.

type PasswordFieldType = number | string;

const password = (code :  PasswordFieldType) => {
  console.log ("password" + code);
};

password("123");


/*1. Union Types ( | means OR ) 

Exercise 1: 
Create a type called IDType that can be either a number OR a string. 
Write a function showID that prints "Your ID is: ...". 
Call the function with both a number and a string.*/

type IDType = number | string;

const showID = (id: IDType) => {
  console.log("Your ID is: " + id);
};

showID(101);
showID("A12");

/*Exercise 2: 
Make a type Fruit that can be "apple" OR "banana" OR "orange". 
Write a function eatFruit that prints "You ate an ...". 
Test with "apple" and "orange". */

type Fruit = "apple" | "banana" | "orange";

const eatFruit = (fruit: Fruit) => {
  console.log("You ate an " + fruit);
};

eatFruit("apple");
eatFruit("orange");


/*Exercise 3: 
Create a type Result that can be either true OR false. 
Write a function printResult that prints "Pass" if true, and "Fail" if false. 
Test with both values. */

type Result = true | false;

const printResult = (result: Result) => {
  if (result) {
    console.log("Pass");
  } else {
    console.log("Fail");
  }
};

printResult(true);
printResult(false);


