//number conversion

let x=1;
console.log(+x); //no effects on the number

let y=-2;
console.log(+y);

console.log(+'12'); //converts non-numbers into numbers
console.log(+ '');

let apples='2';
let oranges='3';
console.log(apples+oranges); //binary + concatenates strings

//for regular sum i need to convert them adding + before them

//precedence
//special oprator

let num=2;
num++;   //increment = ++/
console.log(num);

let num1=2;
num1--;  //decrement = --/
console.log(num1);

let counter=1;
let a= ++counter;
console.log(a);

let num3=0;
num3 ++;
++num3 ;
console.log(num3);

let num4=0;
console.log(num4++)
console.log(num4);

//string
//case manupulation method
let myString="shrabony";
console.log(myString.toUpperCase());
console.log(myString.toLowerCase()); 
//trim
let name="    howareyou  ";
console.log(name);
//console.log(name.trim()); //remove space from both side
console.log(name.trimStart()); // remove space from start
console.log(name.trimEnd()); //remove space from end

//method:indexof,lastindexof
let greeting="hi,how are you doing?";
//console.log(greeting.indexOf("are"));
console.log(greeting.lastIndexOf("doing"));
console.log(greeting.includes("are you"));  //checks is the string is presents

let fileName="image.jpg";
console.log(fileName.startsWith("image"));
console.log(fileName.endsWith("file"));

let str="hello world";
console.log(str.slice(3));
console.log(str.slice(-3));
console.log(str.substring(3,7));

//replacing substring
let word="learning java is fun";

console.log(word.replace("java","javascript"));

//1.remove the trailing space
let greetings="hello world  ";
console.log(greetings.trimEnd());

//2. the word loves is present in the string.
let sentence1 = "freeCodeCamp loves The Odin Project!";
console.log(sentence1.includes("loves"));

//3  You want to know the index of the last occurrence of the word The in the string.
let sentence2 = "freeCodeCamp loves The Odin Project! The Odin Project is great!";
console.log(sentence2.lastIndexOf("The"));

//template literals
let name1 = "John";
let age = 25;
let greetingg = `Hello, my name is ${name1} and I am ${age} years old.`;
console.log(greetingg);

//conditional statement
let num2=5;
if(num2>3){
    console.log("num2 is greater than 3");
}
else{
    console.log("num2 is less thar or equal to 3");
}

//2
x=5;
y="5";
if(x===y){
    console.log("x is equal to y");
}
else{
    console.log("x is not equal to y");
}

x=5;
if(x>10){
    console.log("x is greater than 10");
}
else if(x>5){
    console.log("x is greter than 5");
}
else{
    console.log("x is less than or equal to 5");
}

x=5;
if(x >10){
    console.log("red");
}
else if(x>5){
    console.log("green");
}
else{
    console.log("blue");
}