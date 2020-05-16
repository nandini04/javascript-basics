//looping statements 

//definite loop

//FOR loop

var x = 3;
var factorial = 1;

for(let i = x;i>=1;i--)
{
    if(i==2){
        continue;
       }
    factorial *= i;  
}

console.log(factorial);

//for In

var x = {'name' : 'Nandini' , 'age' : '20'}
for (let prop in x)
{
    console.log(x[prop])
}

//for of - used for arrays

for(item of [10,20,30])
{
 console.log(item);
}


// indefinite loop

//while

var y = 7 
factorial = 1
while(y>=1)
{
    factorial*=y
    y--
}
console.log(factorial);

//do-while loop

var y = 5
factorial = 1
do{
    factorial*=y
    y-- 
}
while(y>=1)
console.log(factorial)


//break 
//continue