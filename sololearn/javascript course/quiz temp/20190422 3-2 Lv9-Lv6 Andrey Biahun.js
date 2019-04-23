/**
 * Q2
 * In which order the values will be alerted?
 */
var x = 3;
var foo = {
    x: 2,
    baz: {
        x: 1,
        bar: function () {
            return this.x;
        }
    }
};
var go = foo.baz.bar;
console.log(go());//3
console.log(foo.baz.bar());//1

/**
 * Q5
 * choose the correct option to get elements from a certain class.
 * document.getElementsByClassName
 */
var el = document.getElementsByClassName('dd');
console.log(el[0].innerHTML);


