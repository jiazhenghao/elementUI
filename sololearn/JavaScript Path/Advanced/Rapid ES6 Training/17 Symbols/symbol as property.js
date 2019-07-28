let article = {
    title: 'Whiteface Mountain',
    [Symbol.for('article')]: 'My art'
};
let value = article[Symbol.for('article')];
console.log(value);//My art