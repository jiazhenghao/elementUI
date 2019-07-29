function* process() {
    let newArray = [yield, yield, yield];
    console.log(newArray[2]);
}
let it = process();
it.next();
it.next(3);
it.next(4);
it.next(34);//34

