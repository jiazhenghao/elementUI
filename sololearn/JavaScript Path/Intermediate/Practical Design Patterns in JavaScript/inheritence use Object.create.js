var obj = {
    title: 'jiazhenghao',
    description: 'shuaiqi'
};

Object.defineProperty(obj, 'toString', {
    value: function () {
        return this.title + ' ' + this.description;
    },
    writable: false,//可修改value
    enumerable: false,//可枚举
    configurable: false//可更改上面两个配置
});

var newObj = Object.create(obj);

Object.defineProperty(newObj, 'toString', {
    value: function () {
        return this.title + ' is new';
    },
    writable: false,//可修改value
    enumerable: true,//可枚举
    configurable: false//可更改上面两个配置
});
//console.log(newObj.toString());//jiazhenghao is new
console.log(newObj); //  { toString: [Function: value] }
