const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 30 }
  ];

//   output
//   {
//     "25": [
//       { name: "Alice", age: 25 }
//     ],
//     "30": [
//       { name: "Bob", age: 30 },
//       { name: "David", age: 30 }
//     ],
//     "35": [
//       { name: "Charlie", age: 35 }
//     ]
//   }

function object(people){
let test={}
for( let items of people){
   let age =items.age
  if(!test[age]){
    test[age]=[]
  }
  test[age].push(items)
   
}
return test
}

console.log(object(people));