// "use strict";
// function func() {
//     console.log(this === undefined);
// }

// func();
function person(fname, lname){
    "use strict";
    this.fname = fname;
    this.lname = lname;
}
let Person =  person("Faysal","Ahmmad");
console.log(Person);

// Without a new keywokd person() we can accidently create global variable
// use strict mode thow error when we accidently create global variable 
console.log(global.fname);
console.log(global.lname);

