process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function(chunk) {
  input += chunk;
});
process.stdin.on("end", function() {
  // now we can read/parse input
  var inputs = input.split(" ");
  var min = inputs[0] * 1;
  var max = inputs[1] * 1;
  console.log(min, max);
  for (let i = min; i <= max; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
      process.stdout.write("SpicyChicken!");
    } else if (i % 5 == 0 && i % 3 != 0) {
      process.stdout.write("Chicken");
    } else if (i % 5 != 0 && i % 3 == 0) {
      process.stdout.write("Spicy");
    }
    if (i != max) {
      process.stdout.write("\r\n");
    }
  }
});
