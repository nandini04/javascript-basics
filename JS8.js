// functions

function hello()
{
    console.log("HELLO")
}

hello();

// returning functions

function returnMe()
{
    console.log("returning")
    return 5;
}

var x = returnMe();
console.log(x);


//parametrized functions

function add(x,y){
    return x+y
}

console.log(add(5,10));


//default function parameters

function add(x=9, y=10){
    return x+y;
}

console.log(add(5,10));

//Rest parameters

function lengthOfMe(...params)  //params are kind of array or list
{
    console.log(params)
    return params.length;
}

console.log(lengthOfMe(5,10,19));


//function constructor

let func = new Function('x','y', 'return x*y')
console.log(func(4,5))


//recursion

function factorial(num)
{
    if (num<=0){
    return 1
    }
    else{
        return num*factorial(num-1)
    }
}

console.log(factorial(5));


//anonymous function

(function(){
    console.log("I am anonymous")
})();


//lambda functions or arrow functions

//parameters
//fat arrow notations
//statements

var food = (x,y,z) => {
    return x+y+z;
}

console.log("Food:"+ food(3,4,5))

//VARIATION 1

var food = (x,y,z) => x+y+z
console.log("Food:"+ food(3,4,5))

//variation 2

var food = (x) => x+100
console.log("Food:"+ food(30))


//generator function


function* query() {
    const name = yield"What's your name ?"
    const sport = yield"What's your favorite sport?"
    return `${name}'s fav sport is '${sport}`;

}

const instance = query();
console.log(instance.next())
console.log(instance.next("Nandini"))
console.log(instance.next("BasketBall"))




    

