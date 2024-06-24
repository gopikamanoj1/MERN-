// let a = [1, 2, 3, 4, 6, 4, 8, 77, 78, 79, 80, 10, 20, 30, 40];

// // const print = (a) => {
// //   let temp = [];
// //   let result = [];

// //   for (let i = 0; i < a.length; i++) {
// //     if (a[i + 1] - a[i] == 1) {
// //       if (!temp.includes(a[i])) {
// //         temp.push(a[i]);
// //       }
// //       temp.push(a[i + 1]);
// //     } else {
// //       if (temp.length > 0) {
// //         result.push(temp);
// //         temp = [];
// //       }
// //     }
// //   }
// //   return result;
// // };
// // console.log(print(a));


// const print = (a) => {
//     let result = [];
//     let diff=0
    
//     for (let i = 0; i < a.length; i++) {
//         let temp = [a[i]];
//        diff= a[i+1] - a[i]
//         for (let j = i + 1; j < a.length; j++) {
//             if (a[j] - a[j - 1] === diff) {
//                 temp.push(a[j]);
//             } else {
//                 break;
//             }
//         }
//         if (temp.length > 1) {
//             result.push(temp);
//         }
//         i += temp.length - 1;
//     }
    
//     return result;
// };

// console.log(print(a));


console.log('Before setImmediate and setTimeout');

setImmediate(() => {
    console.log('Inside setImmediate');
});

setTimeout(() => {
    console.log('Inside setTimeout');
},0);

console.log('After setImmediate and setTimeout');



// // Print the process ID
// console.log(`Process ID: ${process.pid}`);

// // Print the current working directory
// console.log(`Current Directory: ${process.cwd()}`);

// // Print the Node.js version
// console.log(`Node.js Version: ${process.version}`);

// // Print the platform (e.g., 'linux', 'darwin', 'win32')
// console.log(`Platform: ${process.platform}`);

// // Exit the process with a specific code
// process.exit(0); // 0 indicates a successful exit




// function test() {
//     x = 10; // No error, x becomes a global variable
//   }

  
//   "use strict";
// function test() {
//   x = 10; // Error: x is not defined
// }


// test()