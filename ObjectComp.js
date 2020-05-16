//Comparing objects


//comparing variables
let a= 1
let b = 1

console.log("a==b",a==b)
console.log("a===b",a===b)

//comparing objects

let obj1 = new Object()
obj1.name = "Nandini"

let obj2 = new Object()
obj2.name = "Nandini"

console.log("obj1==obj2",obj1 == obj2)
console.log("obj1===obj2",obj1 === obj2)
console.log("object.is()",Object.is(obj1,obj2)) // ideal way to do comparison

// true case

let obj3 = new Object()
obj3.name = "Nandini"

let obj4 = obj3

console.log("obj3==obj4",obj3 == obj4)
console.log("obj3===obj4",obj3 === obj4)
console.log("object.is()",Object.is(obj3,obj4))

obj3.name = "Shiv"

console.log("obj3==obj4",obj3 == obj4)
console.log("obj3===obj4",obj3 === obj4)
console.log("object.is()",Object.is(obj3,obj4))


