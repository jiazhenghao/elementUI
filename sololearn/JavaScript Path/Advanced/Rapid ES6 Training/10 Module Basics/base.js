// import { projectId } from './module1.js';
// console.log(projectId);//99

// import { projectId as id, projectName} from './module1.js';
// console.log(`${projectName} has id: ${id}`);// BuildIt has id: 99

// import someValue from './module1.js';// {default as xxx}
// console.log(someValue);//Five weeks

import * as values from './module1.js';
console.log(values);// { projectId: 99, projectName: 'BuildIt', default: 'Five weeks' }