var test = function () {
    var arr = [1,2,3];
    test2(arr);
    //arr = test2(arr);
    console.log(arr);
};

function test2(arr) {
    arr = [3,2,1];
    //return [3,2,1];
}

test();

/*
上述例子证明了
JavaScript中，数组是作为值传递的，不是引用传递
*/
