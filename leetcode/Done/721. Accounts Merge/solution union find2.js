class DisjointSet {
    constructor(n) {
        this.arr = Array.from(Array(n), (v, i) => i);
        this.sz = Array(n).fill(1);
    }
    
    union(a, b) {
        let v1 = this.find(a);
        let v2 = this.find(b);
        
        if (this.sz[v1] > this.sz[v2]) {
            this.arr[v2] = v1;
            this.sz[v1] += this.sz[v2];
        } else {
            this.arr[v1] = v2;
            this.sz[v2] += this.sz[v1];
        }
    }
    
    find(v) {
        if (this.arr[v] === v) { return v; }
        
        this.arr[v] = this.find(this.arr[v]);
        return this.arr[v];
    }
}


const accountsMerge = accounts => {
    let res = [], merged = {}, emails = {}, ds = new DisjointSet(accounts.length);
    
    for (let i = 0; i < accounts.length; i++) {
        let acc = accounts[i];
        
        for (let j = 1; j < acc.length; j++) {
            let e = acc[j];
            
            if (!emails[e]) { emails[e] = []; }
            emails[e].push(i);
        }
    }
    
    for (let e in emails) {
        let idxs = emails[e];
        
        for (let i = 1; i < idxs.length; i++) {
            ds.union(idxs[0], idxs[i]);
        }
    }
    
    for (let i = 0; i < accounts.length; i++) {
        let parent = ds.find(i);
        
        if (!merged[parent]) { merged[parent] = new Set(); }
        
        let set = merged[parent];
        for (let j = 1; j < accounts[i].length; j++) {
            set.add(accounts[i][j]);
        }
    }
    
    for (let i in merged) {
        let name = accounts[i][0];
        let arr = [...merged[i]].sort();
        
        res.push([name, ...arr]);
    }
    
    return res;
};