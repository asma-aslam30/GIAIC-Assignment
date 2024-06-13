let string:string="Asma";

//test for equality and unequality in string

console.log("Is Asma is equal to string?");
console.log(string == "Asma");

console.log("Is Asma is not equal to string?");
console.log(string != "Asma");

//test using tolowercase function

console.log("IS asma is equal to Asma after converting to lowercase?");
console.log(string.toLocaleLowerCase()== "asma");

console.log("IS asma is equal to Asma after converting to lowercase?");
console.log(string.toLocaleLowerCase()== "Asma");

// numeric test involving equality and inequality ,greater than and less than ,greater than or equal to and less than or equal to 

let five=5;
let ten=10;


console.log("Test 1: Five is equal to 5?");
console.log(five==5);

console.log("Test 2: Ten is equal to 10?");
console.log(ten==10);

console.log("Test 3: Ten is equal to 5?");
console.log(ten==5);

console.log("Test 4: Five is equal to 10?");
console.log(five==10);

console.log("Test 5: Five is not equal to 5?");
console.log(five!=5);

console.log("Test 6: Ten is not equal to 10?");
console.log(ten!=10);

console.log("Test 7: Ten is not equal to 5?");
console.log(ten!=5);

console.log("Test 8: Five is not equal to 10?");
console.log(five!=10);

console.log("Test 9: Ten is greater than  5?");
console.log(ten>5);

console.log("Test 10: Five is greater than 10?");
console.log(five>10);

console.log("Test 11: Ten is lesser than  5?");
console.log(ten<5);

console.log("Test 12: Five is lesser than 10?");
console.log(five<=10);

console.log("Test 10: Five is greater than 10?");
console.log(five>=10);

console.log("Test 11: Ten is lesser than  5?");
console.log(ten<=5);

console.log("Test 12: Five is lesser than 10?");
console.log(five<=10);

//test using "and" and "or" operators

console.log("ten is not equals to 5 and ten is greater than 5");
console.log(ten !=5 && ten> 5);

console.log("ten is  equals to 5 and ten is  greater than 5");
console.log(ten == 5 && ten> 5);

console.log("ten is not equals to 5 and ten is greater than 5");
console.log(ten !=5 || ten> 5);

console.log("ten is  equals to 5 and ten is lesser than 5");
console.log(ten == 5 || ten< 5);


let programmingLanguage:string[]=["java","typescript","javascript","html","css","bootstrap"]
// test wheather the item is in a array

console.log("Is typescript include in my programmingLanguage array?");
console.log(programmingLanguage.includes("typescript"));

// test wheather the item is not in array

console.log("Is python include in my programmingLanguage array?");
console.log(programmingLanguage.includes("python"));

console.log("Is python not include in my programmingLanguage array?");
console.log(!programmingLanguage.includes("python"));

