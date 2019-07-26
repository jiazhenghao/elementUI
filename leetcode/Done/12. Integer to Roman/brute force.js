var intToRoman = function(num) {
    var map = new Map();
    map.set(1, 'I').set(5, 'V').set(10, 'X').set(50, 'L').set(100, 'C').set(500, 'D').set(1000, 'M');
    map.set(4, 'IV').set(9, 'IX').set(40, 'XL').set(90, 'XC').set(400, 'CD').set(900, 'CM');
    var divider = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4 ,1];
    var str = '';
    
    for (let i = 0; i < divider.length; i++) {
        if (num < divider[i]) {
            continue;
        }
        let temp = (num - num % divider[i]) / divider[i];
        num = num % divider[i];
        while(temp != 0) {
            str += map.get(divider[i]);
            temp--;
        }
    }
    return str;
};
console.log(intToRoman(3));
console.log(intToRoman(4));
console.log(intToRoman(9));
console.log(intToRoman(58));
console.log(intToRoman(1994));
/*
Runtime: 132 ms, faster than 95.60% 
Memory Usage: 41.4 MB, less than 40.42%


*/