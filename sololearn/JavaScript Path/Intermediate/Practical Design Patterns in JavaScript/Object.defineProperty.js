var obj = {
    title: 'jiazhenghao',
    description: 'shuaiqi'
};

Object.defineProperty(obj, 'toString', {
    value: function () {
        return this.title + ' ' + this.description;
    },
    writable: true,//可修改value
    enumerable: true,//可枚举
    configurable: true//可更改上面两个配置
});

console.log(obj.toString());//jiazhenghao shuaiqi
