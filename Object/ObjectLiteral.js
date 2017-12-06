 // Object Literal
var person = {
    firstName: 'Brad',
    lastName:'Traversy',
    age: 34,
    children:['Brianna', 'Nicholas'],
    address:{
        street:'555 something st',
        city: 'Boston',
        state: 'MA'
    } ,
    fullName: function(){
        return this.firstName + " "+ this.lastName;
    }

}
console.log(person.fullName());