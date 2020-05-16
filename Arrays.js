//Arrays

let arr = [1,2,3,4]

//console.log(arr[0])

let arr1 = new Array(4);
arr1[0] = 10
arr1[1] = 20 
arr1[2] = 30
arr1[3] = 40

//console.log(arr1)

let arr2 = new Array("Neha","Khushi","Meet",2,3)
//console.log(arr2)

//Array methods
//concatenation

let arr3 = arr.concat(arr1)
//console.log(arr3);

//poping and pushing

let res = arr3.pop();
arr3.pop();

console.log(res)
console.log(arr3)

console.log(arr3.push(100))
console.log(arr3)

//reverse

console.log(arr3.reverse())


//conversion of array to string

let str = arr3.toString();
console.log(str)