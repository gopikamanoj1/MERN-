// // Invert an Object
let obj = { a: 1, b: 2, c: 3 };
// // Expected output: { 1: 'a', 2: 'b', 3: 'c' }

function invertObj(obj) {
  let res = {};
  for(let item in obj){
    if(obj.hasOwnProperty(item)){
        res[obj[item]]=item
        // console.log(res[obj[item]],item,"kkkkkkkkkkkkkkkkkkkkkkkkk");
    }

  }
  return res

}

console.log(invertObj(obj));


// function invertObject(obj) {
//     return Object.fromEntries(
//       Object.entries(obj).map(([key, value]) => [value, key ? [key] : []])
//       .reduce((acc, [value, key]) => {
//         acc[value] = (acc[value] || []).concat(key);
//         return acc;
//       }, {})
//     );
//   }

  
//   console.log(invertObject(obj));
