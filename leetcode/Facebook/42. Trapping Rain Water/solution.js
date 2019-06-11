/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    //从左边节点到最右边，逐一进行比较，算法的时间维度就是O(N)
    var left = 0, right = height.length - 1;
    var ans = 0;
    var left_max = 0, right_max = 0;
    //当左边小于右边的时候，可以循环继续
    while (left < right) {
        //如果左边的高度小于右边，则左边那一侧可以做循环，
        if (height[left] < height[right]) {
            //如果左边的当前高度大于最大高度，则替换最大高度。否则就能盛水了
            height[left] >= left_max ? (left_max = height[left]) : ans += (left_max - height[left]);
            left++;
        }
        //反之，如果右边的高度小于左边，则右边可以做循环
        else {
            height[right] >= right_max ? (right_max = height[right]) : ans += (right_max - height[right]);
            right--;
        }
    }

    return ans;

};