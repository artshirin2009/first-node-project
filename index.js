// /**module.exports -> require 
//  * There : const addedFile = require('./app/calc.js');
//  * In calc.js :
//  * function sayHi(a, b) {
//     return a * b;
// }
// module.exports.sayHi = sayHi;
// */
// const addedFile = require('./app/calc.js');
// console.log(addedFile.sayHi(2, 3));
// console.log(addedFile.array)


// /**Import lodash */
// const _ = require('lodash');
// const assign = require('lodash/assign');
// console.log(_.assign({ a: 1 }, { b: 2 }, { c: 3 }));
// console.log(assign({ a: 1 }, { b: 2 }, { c: 3 }));

// const add = require('lodash/add');
// console.log(add(6, 4));



/**
 * Sync mode
 */
// let content;
// console.log('--start--');
// try {
//     content = fs.readFileSync('readme-3.md', 'utf-8')
//     console.log(content)
// } catch (e) {
//     console.log(e.code)
// }
// console.log('--stop--');

/**
 * Async mode
 */
// console.log('--start--');
// fs.readFile('readme-1.md', 'utf-8', function(err, content) {
//     if (err) {
//         return console.log(err.message)
//     }

//     console.log(content)
// });
// console.log('--stop--');

/**
 * Async by Promises
 */
// const conf = require('./app/conf.js');
// Promise.all([
//         conf.stats('readme-1.md'),
//         conf.stats('readme-2.md')
//     ])
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err.message))
// Promise.all([
//         conf.readFile('readme-1.md'),
//         conf.readFile('readme-2.md')
//     ])
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err.message))


// /**
//  * Async by Promisify
//  */
// const fs = require('fs');
// const util = require('util');
// const read = util.promisify(fs.readFile);
// async function getStats() {
//     return await read('readme-1.md', 'utf-8')
// }
// getStats().then((data) => console.log(data))

/**
 * Async by Promisify some files
 */
const fs = require('fs');
const util = require('util');
const read = util.promisify(fs.readFile);
async function getStats(file) {
    return await read(file, 'utf-8')
}
let newData = [];
let da = 'da';
['readme-1.md', 'readme-2.md'].map(file => getStats(file)
    .then((data) => newData.push(typeof(data)))
    .then((da) => newData.push('hi'))
    .then((newData) => console.log(newData)))

/**fhgvghh fghjgj */


/**Commit from branch new function*/

/**Commit form branch master final */

/**2-nd merging */