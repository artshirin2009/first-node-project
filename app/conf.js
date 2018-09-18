// /**
//  * Async by Promises
//  */
// const fs = require('fs');
// function stats(file) {
//     return new Promise((resolve, reject) => {
//         fs.stat(file, (err, data) => {
//             if (err) {
//                 return reject(err)
//             }
//             resolve(data)
//         })
//     })
// }
// function readFile(file) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(file, (err, data) => {
//             if (err) {
//                 return reject(err)
//             }
//             resolve(data.toString())
//         })
//     })
// }
// module.exports.stats = stats;
// module.exports.readFile = readFile;