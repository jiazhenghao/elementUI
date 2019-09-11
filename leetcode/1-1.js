process.stdin.setEncoding("utf8");

var input = "";
process.stdin.on("readable", () => {
  let chunk;
  // 使用循环确保我们读取所有的可用数据。
  while ((chunk = process.stdin.read()) !== null) {
    input += chunk;
  }
  process.stdin.emit("end");
});

process.stdin.on("end", () => {
  var inputs = input.split(" ");
  var min = inputs[0] * 1;
  var max = inputs[1] * 1;
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
