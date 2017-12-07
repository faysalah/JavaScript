const Person = {
    firstName : "Faysal",
    sayHi(){
        return `Hi, My name is ${this.firstName}!`;
    }   
}

//console.log(Person.sayHi());

// const greet = Person.sayHi; 
//console.log(greet()); >_Hi, My name is undefined!

// const greet = Person.sayHi.bind(Person);
// console.log(greet()); >_Hi, My name is Faysal!

/* setTimeout(Person.sayHi, 1000); 
In this call back  method cant find firstName 
we can use plain function */
setTimeout(function () {
   console.log(Person.sayHi());
}, 1000);

setTimeout(() => {
   console.log(Person.sayHi());
}, 1000);

//OR
// comment the sayHi method in Person object and uncomment sayHi function 
// function sayHi(){
//     return `Hi, My name is ${this.firstName}!`;
// }
// Person.sayHi = sayHi;
// setTimeout(Person.sayHi.bind(Person), 1000);
// this type of bind called hard binding.
// hard bind parmanently bind to assinged variable,  if we bind with new object it won't changed 