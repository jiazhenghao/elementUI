class Project {
    constructor() { this.location = 'Shanghai'; }
}
class Software extends Project {
    constructor() {
        super();
        this.location = this.location + ' beach';
    }
}
let p = new Software();
console.log(p.location);//Shanghai beach