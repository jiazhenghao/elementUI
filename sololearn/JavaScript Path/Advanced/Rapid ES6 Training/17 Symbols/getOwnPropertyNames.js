/*
cannot use this to get symbol
*/
let article = {
    title: 'Whiteface Mountain',
    [Symbol.for('article')]: 'My art'
};
console.log(Object.getOwnPropertyNames(article));//[ 'title' ]
console.log(Object.getOwnPropertySymbols(article));//[ Symbol(article) ]
