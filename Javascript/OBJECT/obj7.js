// // Remove Properties
// let obj = { a: 1, b: 2, c: 3, d: 4 };
// let keysToRemove = ['b', 'd'];
// // Expected output: { a: 1, c: 3 }




const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 30 }
  ];

 
//   {
//     "25": [
//       { name: "Alice", age: 25 }
//     ],
//     "30": [
//       { name: "Bob", age: 30 },
//       { name: "David", age: 30 }
//     ],
//     "35": [
//       { name: "Charlie", age: 35 }
//     ]
//   }

  let obj={};
  for(let item of people){
      obj[item.age]=[item]
  }
  console.log(obj)


