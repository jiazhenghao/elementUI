let idx = [1,2,3,4,5];
idx.copyWithin(2, 0, 5); //target, start, end
console.log(idx);//[ 1, 2, 1, 2, 3 ]