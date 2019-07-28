class Project {
    constructor() {
        console.log('123');
    }
    getCount() {
        return 50;
    }
}
class SoftwareProject extends Project {
    constructor() {
        super();
        console.log('456');
    }
    getCount() {
        return super.getCount() + 20;
    }
}
let p = new SoftwareProject();//123 456
console.log(p.getCount());//70

