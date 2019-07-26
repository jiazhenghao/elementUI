/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function(ages) {
    var count = new Array(121);
    count.fill(0);
    ages.forEach(age => count[age]++);

    var ans = 0;
    for (let ageA = 15; ageA <= 120; ageA++) {
        let countA = count[ageA];
        for (let ageB = 15; ageB <= 120; ageB++) {
            let countB = count[ageB];
            if (ageA * 0.5 + 7 >= ageB) continue;
            if (ageA < ageB) continue;
            //if (ageA < 100 && 100 < ageB) continue;
            ans += countA * countB;
            if (ageA == ageB)
                ans -= countA;
        }
    }
    return ans;
};

/*
Runtime: 60 ms, faster than 100.00% 
Memory Usage: 37.2 MB, less than 100.00% 
*/
