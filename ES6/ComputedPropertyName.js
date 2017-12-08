//-----
let firstName = "";
let Person = {
    firstName: "Faysal",
    ["last"+"Name"]:"Ahmmad"
};
console.log(Person.firstName);
console.log(Person.lastName);

//---------
let i = 0;
let tray ={
    ["item" + ++i] : i * 100,
    ["item" + ++i] : i * 100,
    ["item" + ++i] : i * 100,
    ["item" + ++i] : i * 100
}
console.log(tray.item1);
console.log(tray.item2);
console.log(tray.item3);
console.log(tray.item4);

//-----------------
function GetNamePropertyTitle(params) {
    return "firstName";
}
let Student = {
    StudentId: "142-35-725",
    [GetNamePropertyTitle()]: "Faysal"
}
console.log(JSON.stringify(Student));