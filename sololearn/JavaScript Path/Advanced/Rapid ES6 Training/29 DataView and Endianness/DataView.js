let buffer = new ArrayBuffer(1024);
let dv = new DataView(buffer);
console.log(dv.byteLength);//1024
dv.setUint8(0, 1);
console.log(dv.getUint8(0));//1
console.log(dv.getUint16(0));//256
//Big-endian：将高序字节存储在起始地址（高位编址）
console.log(dv.getUint16(0, true));//1 改回little-endian


