var isPalindrome = function (s) {
    //get rid of all characters beside alphabetical ones
    let temp = s.replace(/[^A-Za-z0-9]+/g, "");
    //convert to lowercase
    temp = temp.toLowerCase();

    //compare last character and first character and beyond
    let startIndex = 0;
    for (let i = temp.length - 1; i >= temp.length / 2; i--) {
        if (temp[startIndex++] !== temp[i]) {
            return false;
        }
    }
    return true
};

/*
not fast,though clear codes
*/