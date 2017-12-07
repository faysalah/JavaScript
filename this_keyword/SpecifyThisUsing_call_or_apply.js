const Person = {
    firstName : "Faysal"  
}
function sayHi(){
    console.log(`Hi, My name is ${this.firstName}!`);
}  
// sayHi function invoke without touching Person first
sayHi.call(Person);
sayHi.apply(Person);

// call() vs apply()

const numbers = [10,20,30,40,50];

const slice1 = numbers.slice(2, 4);
const slice2 = numbers.slice.call(numbers, 2, 4);
const slice3 = numbers.slice.apply(numbers, [2, 4]);

console.log(slice1);
console.log(slice2);
console.log(slice3);

// In non-strict mode all answer are true
// In strict mode all answer are false

function func() {
    console.log(this === global);
}
func.call(null);
func.call(undefined);
func.apply(null);
func.apply(undefined);


