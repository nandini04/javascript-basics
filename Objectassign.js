//JS Objects

//Object.assign()

//cloning

// let student = {
//     name: "Nandini",
//     age : 20
// }

// let tutor = {}

// tutor =     Object.assign({}, student)

// console.log(tutor)
// console.log(student)

// //appending
// let student = {
//       name: "tharun",
//       age: 21
//     };
//     let skills = {
//         Languages :"Java, Javascript",
//         experience : 0
//     };
    
//     student = Object.assign({}, student, skills);
    
//     console.log("Student: ", student);
//     console.log("Skills: ", skills);


    //merging

    let student = {
      name: "tharun",
      age: 21
    };
    let skills = {
        Languages :"Java, Javascript",
        experience : 0
    };

    let hobbies = {
        Hobby1 :"Dance",
        Hobby2 : "Reading"
    };
    
   // student = Object.assign({}, student, skills,hobbies);
    Object.assign(student,student,skills,hobbies);
    console.log("Student: ", student);
    