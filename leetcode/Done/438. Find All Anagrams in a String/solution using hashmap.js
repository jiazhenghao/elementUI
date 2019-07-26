/**
 * @param {string} str
 * @param {string} pattern
 * @return {number[]}
 */
var findAnagrams = function (str, pattern) {
    // Convert pattern string to hash-map.
    const patternMap = wordToMap(pattern);
    // Array that will hold our anagram start indices.
    const patternIndices = [];
    // Clone the pattern string map for further modifications.
    let currentPatternMap = { ...patternMap };
    // We'll be using sliding frame to find anagrams.
    let frameStart = 0;
    let frameLength = 0;
    let wordIndex = 0;

    // Go through all letters in a string.
    while (wordIndex < str.length) {
        // Get current letter.
        const letter = str[wordIndex];
        // Depending on the current letter we may have several cases.
        if (!currentPatternMap.hasOwnProperty(letter)) {
            // No such letter in the pattern.
            // Reset letters counter.
            currentPatternMap = { ...patternMap };
            // Reset and shift the frame to the next letter.
            frameStart = wordIndex + 1;
            frameLength = 0;
        } else if (currentPatternMap[letter] === 0) {
            // There is no unused letter instances left.
            // Add the first letter of the found anagram back to the map.
            const letterToRelease = str[frameStart];
            currentPatternMap[letterToRelease] += 1;
            // Shift frame right and reduce it.
            frameLength -= 1;
            frameStart += 1;
        } else {
            // The letter is in the pattern and we may use it.
            // Reduce the number of used letter instances and expand the frame.
            currentPatternMap[letter] -= 1;
            frameLength += 1;
            // If we've found an anagram...
            if (frameLength === pattern.length) {
                // Remember the start of the anagram.
                patternIndices.push(frameStart);
                // Add the first letter of the found anagram back to the map.
                const letterToRelease = str[frameStart];
                currentPatternMap[letterToRelease] += 1;
                // Shift frame right and reduce it.
                frameLength -= 1;
                frameStart += 1;
            }
        }
        // Go to the next letter.
        wordIndex = frameStart + frameLength;
    }
    // Return anagram indices that we've found.
    return patternIndices;
};

// Function that converts string to string map (counts the number of letters).
function wordToMap(str) {
    return Array.from(str).reduce((stringMap, letter) => {
        if (!stringMap.hasOwnProperty(letter)) {
            stringMap[letter] = 1;
        } else {
            stringMap[letter]++;
        }
        return stringMap;
    }, {});
}

console.log(findAnagrams(
    "cbadddcbaddddddcbaddddddddddcba"
    , "abcdd"
));

