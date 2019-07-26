let updateFunctions = [];
for (let i = 0; i < 10; i++) {
    updateFunctions.push(function() {return i;});
}
console.log(updateFunctions[0]()); // 0

let updateFunctions2 = [];
for (var i = 0; i < 10; i++) {
    updateFunctions2.push(function() {return i;});
}
console.log(updateFunctions2[0]()); // 10