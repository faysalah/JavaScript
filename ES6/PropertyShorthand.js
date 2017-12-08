//ES5
let first = "john";
let last = "doe";
let obj = {first: first, last: last};

//ES6
let firstName = "Faysal";
let lastLast = "Ahmmad";
let obj1 = {firstName, lastLast};

console.log(obj);
console.log(obj1);

//
function insertStudent(studentId, StudentName, studentAge) {
    return { studentId, StudentName, studentAge};
}

let a = insertStudent("Faysal", "Ahmmad", 23);
console.log(a);
console.log(JSON.stringify(a));