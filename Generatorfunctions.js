//Basic usage of Generator Function

function* naturalnumbers() {
    let number = 1
    while(true)
    yield number++
}

var natural = naturalnumbers();
console.log(natural.next().value);
console.log(natural.next().value)
console.log(natural.next().value)
console.log(natural.next().value)

//Calling Generator within a Generator (wooo… inception)

function *anotherGenerator(name)
{
    yield `From Another Generator, ${name}`
}

function *myGenerator(name)
{
    yield `hi! ${name}`
    yield *anotherGenerator(name)
    yield 'Bye!'
}

 let generate = myGenerator('Nandini');
 console.log(generate.next().value);
 console.log(generate.next().value);
 console.log(generate.next().value);

 //Passing arguments into Generators
function *arguments(){
    console.log('Hey!',yield)
    console.log('Are you',yield)

}

let gen = arguments();
gen.next();
gen.next("Nand")
gen.next("nidhi")


//Once returned, no more yields

function *yieldandReturn()
{
    yield 'Y'
    return 'R'
    yield 'unreachable'
}

let y = yieldandReturn();
console.log(y.next())
console.log(y.next())
console.log(y.next())
