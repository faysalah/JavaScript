console.log(this === global);
console.log(this === module.exports);
// node ThisInGlobalContext.js give false and true
// In node command line is this === global gives ture  
// In Browser console this === window gives ture