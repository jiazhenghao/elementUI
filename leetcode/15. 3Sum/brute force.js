var threeSum = function(nums) {
    if (nums.length < 3) {
        return [];
    }

    var arrRes = [];
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    let min = Math.min(nums[i], nums[j], nums[k]);
                    let max = Math.max(nums[i], nums[j], nums[k]);
                    let medium = 0 - min - max;
                    let add = true;
                    for (let index = 0; index < arrRes.length; index++) {
                        if (min == arrRes[index][0] && medium == arrRes[index][1] && max == arrRes[index][2]) {
                            add = false;
                            break;
                        } 
                    }
                    if (add) {
                        arrRes.push([min, medium, max]);
                    }
                }
            }
        }

    }

    return arrRes;

};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([-1, 0, 1, 2, -4]));

/**
 * 
 * O(n^3)
 * 
 * 
 */