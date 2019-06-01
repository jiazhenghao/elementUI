'use strict'严格模式下
Object.defineProperty(cat, 'name', {writable: false});

1.必须在严格模式下，才会报错
2.即使把cat的name定义为只读，但如果name是一个对象，则不行了
3.需要使用Object.freeze，把整个name冷冻起来

