var findDuplicate = function(nums) {
    var set = new Set();
    var dump;
    var count = 1;
    var temp;
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i]) == false) {
            set.add(nums[i]);
        }
        else {
            dump = nums[i];
            temp = i;
            count++;
            break;
        }
    }
};