//parameters and arguments
function tvshow(serial){
    return serial+"is what i am currently watching"
}
console.log(tvshow("janzeern"));

function sum(num1,num2){
    return num1+num2
}
console.log(sum(1,2));

//scope:local,global
let x=19;
function myfunc(){
    console.log(x);
}
myfunc();

// if there is no argumnet then parameter will be undefined
function favAnimal(animal){
    return animal+"is my fav current animal"
}
console.log(favAnimal());

function favfruit(fruit="apple"){
    return fruit +"is my fav fruit"
}
console.log(favfruit());

//return state
function add(a,b){
    return a+b
}
console.log(add(5,5));

//if we use retun before the end of the function
function add(a,b){
    if(a>3){
        return b;
    }
    return a+b;
}
console.log(add(2,5));

//exmple
function add(a,b=12){
    if(b>11){
        return b*2;
    }
    else if (a>3){
        return b;
    
    }
    return a +b;
}
console.log(add(3));

//function exercise
//ex-1

function addOrSubtract(int){
    if(int<10){
        return int+7;
    }
    else{
        return int -3;
    }
    return int
}
console.log(addOrSubtract(11))

//ex-2
function multiply(a,b){
    return a*b;
}
console.log(multiply(5,5));

//using arrow
//const mul(a,b) => a*b;
//console.log(mul(3,3));
  
//ex-3
function capitalize(str){
    return str[0].toUpperCase() + str.slice(1);
}
console.log(capitalize("shrabony"));

//ex-4
function lastLetter(string){
    return string[string.length -1];
}
console.log(lastLetter("string"))