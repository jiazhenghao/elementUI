var searchRange = function (nums, target) {
    if (nums.length == 0 || target < nums[0] || target > nums[nums.length - 1])
        return [-1, -1];
    if (nums.length == 1 && target == nums[0])
        return [0, 0];
    let start = 0;
    let end = nums.length - 1;
    let answer = [];

    findout(nums, 0, nums.length - 1, target, answer);

    if (answer[0] != undefined && answer[1] == undefined) {
        return [answer[0], answer[0]];
    }
    if (answer[1] != undefined && answer[0] == undefined) {
        return [answer[1], answer[1]];
    }

    return answer;
};

function findout(nums, start, end, target, answer) {
    let median = Math.floor((start + end) / 2);

    if (target == nums[start]) 
        answer[0] != undefined ? answer[0] = Math.min(start, answer[0]) : answer[0] = start;
    if (target < nums[start]) 
        answer[0] = -1;
    if (target == nums[end]) 
        answer[1] != undefined ? answer[1] = Math.max(end, answer[1]) : answer[1] = end; 
    if (target > nums[end]) 
        answer[1] = -1;

    if (end - start == 1 || end - start == 0) {
        if (target != nums[start] && target != nums[end]) {
            answer[0] = -1;
            answer[1] = -1;
            return;
        }
        return;
    }

    if (target > nums[median]) {
        start = median + 1;
        findout(nums, start, end, target, answer);
    }

    if (target < nums[median]) {
        end = median - 1;
        findout(nums, start, end, target, answer);
    }

    if (target == nums[median]) {
        answer[0] != undefined ? answer[0] = Math.min(median, answer[0]) : answer[0] = median;
        answer[1] != undefined ? answer[1] = Math.max(median, answer[1]) : answer[1] = median;

        findout(nums, start, median, target, answer);
        findout(nums, median, end, target, answer);
    }
}
console.log(searchRange([5,7,7,8,8,10], 8));//[3,4]
console.log(searchRange([5,7,7,8,8,10], 6));//[-1,-1]
console.log(searchRange([1,3], 1));//[0, 0]
console.log(searchRange([0,0,1,1,1,4,5,5], 2));//[-1,-1]
console.log(searchRange([0,0,1,1,1,2,2,3,3,3,4,4,4,4,5,5,6,6,6,8,10,10], 4));//[10,13]