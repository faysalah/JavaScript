// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     sayHi(){
//         console.log(`Hi, My name is ${this.name}!`);
//     }
// }

// class has same behavior that function prototype has

// we can achive class bind with reciver object two way
class Person{

    sayHi = () => {
        console.log(`Hi, My name is ${this.name}!`);
        
    };// this class sytex not support node
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }  
}
// OR
class Person{
    
     constructor(name, age) {
         this.name = name;
         this.age = age;
         this.sayHi = this.sayHi.bind(this);
     }
     sayHi() {
          console.log(`Hi, My name is ${this.name}!`);
     };
    
 }
const person = new Person("Faysal","Ahmmad");
const greet = person.sayHi;
greet();