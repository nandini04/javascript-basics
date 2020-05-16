//JS Objects

// js Objects initialisation

let student = {
    usn: "123",
    Firstname: "Nandini",
    Lastname: "Rajdev",
    Greet : function(){
        return "Hello Guys"
    },
    subjects:["blockchain","AI","WEB DEV"]
    
}

console.log(student.Firstname);
console.log(student.Greet());
console.log(student.subjects[2]);