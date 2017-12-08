//ES5
let myMath = {
    add : function (val1, val2) {
        return val1 + val2;
    },
    subtract: function (val1, val2) {
        return val1 - val2;
    },
    multiply : function (val1, val2) {
        return val1 * val2;
    },
    divide: function (val1, val2) {
        return val1 / val2;
    }

}
//ES6
let Calc = {
    add(val1, val2) { return val1 + val2 },
    subtract(val1, val2) { return val1 - val2 },
    multiply(val1, val2) { return val1 * val2 },
    divide(val1, val2) { return val1/val2 },
}
