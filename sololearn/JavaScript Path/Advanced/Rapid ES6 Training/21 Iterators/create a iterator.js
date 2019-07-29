let idMaker = {
    [Symbol.iterator]() {
        let nextId = 8080;
        return {
            next() {
                let value = nextId > 8084 ? undefined : nextId++;
                let done = !value;
                return {
                    value,
                    done
                };
            }
        }
    }
};

let it = idMaker[Symbol.iterator]();
console.log(it.next().value);//8080
console.log(it.next().value);//8081
console.log(it.next().value);//8082
console.log(it.next().value);//8083

for (let v of idMaker) {
    console.log(v);
}
// 8080
// 8081
// 8082
// 8083
// 8084