var ladderLength = function(beginWord, endWord, wordList) {
    //把wordList搞成Set
    let dict = wordList.reduce((set, word) => {
      set.add(word);
      return set;
    }, new Set());
    
    if (!dict.has(endWord)) {
      return 0;
    }
  
    let final = 0, step = 0;
    let l = beginWord.length;
    let s1 = new Set([beginWord]),
      s2 = new Set([endWord]);
  
    let done = false;
    while (s1.size > 0 && s2.size > 0 && !done) {
      ++step;
  
      if (s1.size > s2.size) {
        [s1, s2] = [s2, s1];
      }
  
      let s = new Set();
  
      s1.forEach(word => {
        for (let i = 0; i < l; i++) {
          for (let j = 0; j < 26; j++) {
            let tryword =
              word.slice(0, i) + String.fromCharCode(97 + j) + word.slice(i + 1);
            if (s2.has(tryword)) {
              final = step + 1;
              done = true;
            }
            if (!dict.has(tryword)) {
              continue;
            }
            dict.delete(tryword);
            s.add(tryword);
          }
        }
      });
      [s, s1] = [s1, s];
    }
    return final;
  };
  