// let buffer = new ArrayBuffer(1024);
// let a = new Uint8Array(buffer);
// a[0] = 0xff;
// console.log(a[0]);//255

let buffer = new ArrayBuffer(1024);
let a = new Uint8Array(buffer);
let b = new Uint16Array(buffer);
// a[1] = 1;
// console.log(b[0]);//256
a[0] = 1;
console.log(b[0]);//1
//Little-endian：将低序字节存储在起始地址（低位编址）