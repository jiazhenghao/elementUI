class Project {
    constructor() {
        console.log(new.target.getDefaultId());
    }
}
class SoftwareProject extends Project {
    static getDefaultId() { return 99; }
}
var p = new SoftwareProject();//99
