let eventSymbol = Symbol('resize event');
console.log(typeof eventSymbol);        //symbol
console.log(eventSymbol.toString());    //Symbol(resize event)
const CALCULATE_EVENT_SYMBOL = Symbol('calculate event');
console.log(CALCULATE_EVENT_SYMBOL.toString());//Symbol(calculate event)
let s1 = Symbol('string');
let s2 = Symbol('string');
console.log(s1 == s2);//false
let s = Symbol.for('event');
console.log(s.toString());//Symbol(event)
let s3 = Symbol.for('event');
console.log(s === s3);//true
let s4 = Symbol.for('s4');
let descrption = Symbol.keyFor(s4);
console.log(descrption);//s4


