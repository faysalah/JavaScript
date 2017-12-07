// How constructor create a object in js
// function person(fname, lname) {
//     console.log(this);
//     this.fname = fname;
//     console.log(this);
//     this.lname = lname;
//     console.log(this);    
// }
// const Person = new person("Faysal","Ahmmad");

function person(fname, lname) {

        this.fname = fname;
        this.lname = lname; 
        //return this;
        return {
            name1 : fname,
            name2 : lname
        };
}
const Person = new person("Faysal", "Ahmmad");
console.log(Person);