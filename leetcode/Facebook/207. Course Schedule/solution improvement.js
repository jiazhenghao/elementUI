/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    class Course {
        constructor() {  // If we had an instance of `Course` called X:
            this.numPrerequisites = 0;    // how much prerequisites X has
            this.isPrerequisiteFor = [];  // what courses  have a prerequisite of X
            // whether X has been counted to `finished`
            //if true, this course can be finished 
            this.clear = false;
        }
    }

    if (prerequisites.length == 0) 
        return true;

    // initialize 创建n门课程
    const courses = [];
    for (let i = 0; i < numCourses; i++)
        courses[i] = new Course();
    //我把课程推到数据组里，推这个对象，而不是数字号，这样，我就能等下推出去了，nice
    for (let i = 0; i < prerequisites.length; i++) {
        courses[prerequisites[i][0]].numPrerequisites++;
        courses[prerequisites[i][1]].isPrerequisiteFor.push(courses[prerequisites[i][0]]);
    }

    let finished = 0; // how much courses can be finished (clear=true)
    let prev = -1;    // trace the value of `finished` in previous iteration

    // terminate the loop if we cannot find out any new course able to be finished within one iteration
    while (finished > prev) {
        prev = finished;

        //遍历所有课程，如果这个课程依赖为0，则看是不是读完了，读完=true，就不用管
        //读完等于false，就去读这门课程。
        //我想优化一下，去看courses里面是否还有这个course
        for (let i = 0; i < courses.length; i++) {
            if (courses[i].numPrerequisites === 0 && !courses[i].clear) {
                // courses[i] has no prerequisites or all of its prerequisites has been fulfilled
                // `clear=false` means we have to notify the courses which have prerequisite of course[i]
                courses[i].isPrerequisiteFor.forEach((j) => {
                    // notify courses[j]
                    j.numPrerequisites--;
                });
                courses[i].clear = true;
                finished++;
                courses.splice(i, 1);
            }
        }
        console.log(courses);
    }

    //当跳出循环以后，如果完成的课程和总课程一样。就是true，如果不等于，就是false
    return finished === numCourses;
};

/*
Runtime: 64 ms, faster than 96.03% 
Memory Usage: 38.1 MB, less than 72.57%
 */