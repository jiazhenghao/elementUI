//Object.setPrototypeOf(obj, prototype)
let project = {
    getTaskCount() {
        return 50;
    }
};
let softwareProject = {
    getTaskCount() {
        return super.getTaskCount() + 6;
    }
};
Object.setPrototypeOf(softwareProject, project);
console.log(softwareProject.getTaskCount());//56