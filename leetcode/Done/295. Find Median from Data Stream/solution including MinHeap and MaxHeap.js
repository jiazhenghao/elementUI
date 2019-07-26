class MedianFinder {
    constructor() {
        this.greater = new MinHeap()
        this.lesser = new MaxHeap()
    }
    addNum(num) {
        const median = this.findMedian()
        if (num > median) {
            this.greater.add(num)
        } else {
            this.lesser.add(num)
        }
        if (this.lesser.length > this.greater.length + 1) {
            this.greater.add(this.lesser.extract())
        }
        if (this.greater.length > this.lesser.length + 1) {
            this.lesser.add(this.greater.extract())
        }
    }
    findMedian() {
        if (this.greater.length == 0 && this.lesser.length == 0) {
            // is this necessary?
            return undefined
        }
        if (this.greater.length > this.lesser.length) {
            return this.greater.get()
        }
        if (this.greater.length < this.lesser.length) {
            return this.lesser.get()
        }
        return (this.greater.get() + this.lesser.get()) / 2
    }
}

class Heap {
    constructor() {
        this.array = []
    }

    get length() {
        return this.array.length
    }

    leftChildIndex(index) {
        return 2 * index + 1
    }

    rightChildIndex(index) {
        return 2 * index + 2
    }

    parentIndex(index) {
        return Math.floor((index - 1) / 2)
    }

    swapValuesAtIndices(first, second) {
        const tmp = this.array[first]
        this.array[first] = this.array[second]
        this.array[second] = tmp
    }

    add(num) {
        let currentIndex = this.array.length
        let parentIndex = this.parentIndex(currentIndex)
        this.array.push(num)
        while (
            currentIndex !== 0 &&
            this.secondIsHigher(this.array[parentIndex], this.array[currentIndex])
        ) {
            this.swapValuesAtIndices(currentIndex, parentIndex)
            currentIndex = parentIndex
            parentIndex = this.parentIndex(currentIndex)
        }
    }

    get() {
        return this.array[0]
    }

    heapify(index) {
        let indexWithHighestValue = index
        const leftIndex = this.leftChildIndex(index)
        const rightIndex = this.rightChildIndex(index)

        if (
            this.secondIsHigher(
                this.array[indexWithHighestValue],
                this.array[leftIndex],
            )
        ) {
            indexWithHighestValue = leftIndex
        }
        if (
            this.secondIsHigher(
                this.array[indexWithHighestValue],
                this.array[rightIndex],
            )
        ) {
            indexWithHighestValue = rightIndex
        }
        if (indexWithHighestValue !== index) {
            this.swapValuesAtIndices(indexWithHighestValue, index)
            this.heapify(indexWithHighestValue)
        }
    }

    extract() {
        if (this.array.length === 0) {
            return undefined
        }
        if (this.array.length === 1) {
            return this.array.pop()
        }
        const retval = this.array[0]
        this.array[0] = this.array.pop()
        this.heapify(0)
        return retval
    }
}

class MinHeap extends Heap {
    secondIsHigher(first, second) {
        return second < first
    }
}

class MaxHeap extends Heap {
    secondIsHigher(first, second) {
        return second > first
    }
}
/*
Runtime: 228 ms, faster than 92.33% 
of JavaScript online submissions for Find Median from Data Stream.
Memory Usage: 64.5 MB, less than 31.37% 
*/