//console.log(Math.pow(2,31) - 1);//2147483647
var reverse = function(x) {
    let str='';
    if (x == 0) {
        return 0;
    }
    else if (x > 0) {
        while(x != 0) {
            temp = x % 10;
            if (str == '' && temp == 0) {
                x = (x - x % 10) / 10;
                continue;
            } 
            x = (x - x % 10) / 10;
            str = str + temp; 
        }
        return str * 1 > 2147483647 ? 0 : str * 1;
    }
    else {
        x *= (-1);
        while(x != 0) {
            temp = x % 10;
            if (str == '' && temp == 0) {
                x = (x - x % 10) / 10;
                continue;
            } 
            x = (x - x % 10) / 10;
            str = str + temp; 
        }
        return str * (-1) < -2147483648 ? 0 : str * (-1);
    }
};
/*
Runtime: 68 ms, faster than 96.63%
Memory Usage: 35.8 MB, less than 80.74%
*/