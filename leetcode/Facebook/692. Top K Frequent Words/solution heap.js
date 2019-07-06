/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */

class Node {
    constructor(word) {
        this.word = word;
        this.left = this.right = null;
    }
}

class SkewHeap {
    constructor() {
        this.root = null;
    }

    __swapChildren(node) {
        let t = node.left;
        node.left = node.right;
        node.right = t;
    }

    __merge(a, b) {
        if (!a) { return b; }
        if (!b) { return a; }

        if (a.word < b.word) {
            a.right = this.__merge(a.right, b);
            this.__swapChildren(a);
            return a;
        }

        return this.__merge(b, a);
    }

    popMin() {
        let min = this.root;
        this.root = this.__merge(this.root.left, this.root.right);
        return min.word;
    }

    add(word) {
        this.root = this.__merge(this.root, new Node(word));
    }

    isEmpty() {
        return !this.root;
    }
}

const topKFrequent = (words, k) => {
    let wToFreq = {}, freqToW = {}, maxFreq = 0, res = [];

    for (let w of words) {
        wToFreq[w] = wToFreq[w] ? wToFreq[w] + 1 : 1;
    }

    for (let w in wToFreq) {
        let freq = wToFreq[w];
        maxFreq = Math.max(freq, maxFreq);

        if (!freqToW[freq]) { freqToW[freq] = new SkewHeap(); }
        freqToW[freq].add(w);
    }

    while (res.length < k && maxFreq > 0) {
        let heap = freqToW[maxFreq--];

        if (heap) {
            while (!heap.isEmpty()) {
                res.push(heap.popMin());
                if (res.length === k) { break; }
            }
        }
    }

    return res;
};
/*
Runtime: 60 ms, faster than 98.73% 
of JavaScript online submissions for Top K Frequent Words.
Memory Usage: 37.7 MB, less than 50.39% 
*/