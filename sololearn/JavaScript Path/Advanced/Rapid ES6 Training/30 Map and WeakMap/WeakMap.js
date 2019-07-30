let employee1 = {name: 'jack'};
let employee2 = {name: 'peter'};
let employees = new WeakMap([
    [employee1, 'ABC'],
    [employee2, 'DEF'],
]);
/* no.1
employee1 = null;
console.log(employees.size);//undefined
*/
/* no.2 
console.log(employees.size);//undefined
*/
console.log(employees);//WeakMap { [items unknown] }

let map = new Map([
    [employee1, 'ABC'],
    [employee2, 'DEF'],
]);
console.log(map);//Map { { name: 'jack' } => 'ABC', { name: 'peter' } => 'DEF' }

//no.1
// employee1 = {name: 'Dick'};
// console.log(map);//Map { { name: 'jack' } => 'ABC', { name: 'peter' } => 'DEF' }
//no.2
// employee1.name = 'Dick';
// console.log(map);
//Map { { name: 'Dick' } => 'ABC', { name: 'peter' } => 'DEF' }
//no.3
// employee1 = { name: 'Dick' };
// employee1.name = 'Sick';
// console.log(map);
//Map { { name: 'jack' } => 'ABC', { name: 'peter' } => 'DEF' }
//no.4
// employee1 = null;
// console.log(map);
//Map { { name: 'jack' } => 'ABC', { name: 'peter' } => 'DEF' }
