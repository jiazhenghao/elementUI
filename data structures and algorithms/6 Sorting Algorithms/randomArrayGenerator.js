var randomArrayGenerator = function(nums) {
    let array = [];
    for(let i = 0; i < nums; i++) {
        const result = Math.ceil(Math.random() * nums);
        array.push(result);
    }
    return array;
};

module.exports = randomArrayGenerator;
