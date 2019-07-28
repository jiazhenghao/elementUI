var title = "Surfer's \u{1f3c4} Blog";
console.log(title);//Surfer's � Blog
var surfer = '\u{1f3c4}'; 
console.log(surfer.length);//2
var surfer2 = "\u{1f30a}\u{1f3c4}\u{1f40b}";
console.log(Array.from(surfer2).length);//3
console.log(surfer2);
console.log(surfer2.normalize().length); //6
var t = 'Mazatla\u0301n';
console.log(t + ' ' + t.normalize().length);//Mazatlán 8
