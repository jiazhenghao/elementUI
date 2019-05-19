First In Last Out

const slowAdd = (a, b) => {
    setTimeout(()=>{
        console.log(a + b);
    },0);
}
slowAdd(3, 3);
slowAdd(4, 4);

Call Stack                  Node           Event  Queue
console.log(8)
14.cb2   in                                14.cb2 out
console.log(6)
13.cb1   in                                13.cb1 out       
12.anonymous()out
11.slowAdd(4,4)out
10.setTimeout(cb2,d)out
                                            9.cb2
                            Timer()
8.setTimeout(cb2,d)in
7.slowAdd(4,4)in        
6.setTimeout(cb1,d)out
5.setTimeout(cb1,d)out                       
                                            4.cb1
                            Timer()
3.setTimeout(cb1,d)in     
2.slowAdd(3,3)in
1.anonymous()in                                 

setTimeout with delay 0 
setImmediate    always use it if you want to execute in next tick
process.nextTick    

process.nextTick()，效率最高，消费资源小，但会阻塞CPU的后续调用； 
setTimeout()，精确度不高，可能有延迟执行的情况发生，且因为动用了红黑树，所以消耗资源大； 
setImmediate()，消耗的资源小，也不会造成阻塞，但效率也是最低的。

