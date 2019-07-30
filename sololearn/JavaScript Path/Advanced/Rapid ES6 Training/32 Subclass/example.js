class Perks extends Array {
    sum() {
        let total = 0;
        this.map(v => total += v);
        return total;
    }
}

let a = Perks.from([4, 10, 15]);
let newArray = a.reverse();

console.log(newArray instanceof Perks);//true
console.log(newArray instanceof Array);//true
console.log(a.sum());//29
