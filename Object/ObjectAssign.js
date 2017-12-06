let o1 = { a: 1, a1 : 11, a2 : 22 };
let o2 = { b: 2 };
let o3 = { c: 3 };

let combined = Object.assign({},o1, o2, o3);
console.log(o1);
console.log(combined);
//-------
let obj = {
    Name: "Faysal",
    Dob: 1995,
    get Age() {
    return 2017 - this.Dob;
    }
    };
let copy = Object.assign({}, obj);
console.log(copy);
