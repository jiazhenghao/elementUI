/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    var arr1 = num1.split('').reverse();
    var arr2 = num2.split('').reverse();

    var arrRes = [];
    var n = Math.max(arr1.length, arr2.length);

    for (let i = 0; i < n; i++) {
        if (arr1[i] == undefined) {
            if (arrRes[i] == undefined) {
                arrRes[i] = arr2[i] * 1;
            }
            else {
                arrRes[i] += arr2[i] * 1;
                if (arrRes[i] >= 10) {
                    arrRes[i] -= 10;
                    arrRes[i + 1] = 1;
                }
            }
            continue;
        }
        if (arr2[i] == undefined) {
            if (arrRes[i] == undefined) {
                arrRes[i] = arr1[i] * 1;
            }
            else {
                arrRes[i] += arr1[i] * 1;
                if (arrRes[i] >= 10) {
                    arrRes[i] -= 10;
                    arrRes[i + 1] = 1;
                }
            }
            continue;
        }
        if (arrRes[i] == undefined) {
            arrRes[i] = arr1[i] * 1 + arr2[i] * 1;
        }
        else {
            arrRes[i] += arr1[i] * 1 + arr2[i] * 1;
        }

        if (arrRes[i] >= 10) {
            arrRes[i] -= 10;
            arrRes[i + 1] = 1;
        }
    }

    console.log(arrRes);
    return arrRes.reverse().join('');
};

console.log(addStrings('6994', '36'));