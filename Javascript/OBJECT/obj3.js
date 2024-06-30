// Flatten an Object: Write a function to flatten a nested object. 
// Output: { "a.b.c": 1, "d": 2, "e.f.g": 3 }

let obj = { a: { b: { c: 1 } }, d: 2, e: { f: { g: 3 } } };


function flattenObject(obj, path = '') {
    let result = {};

    for (let key in obj) {
        // if (obj.hasOwnProperty(key)) {
            let newKey = path ? `${path}.${key}` : `${key}`;

            if (typeof obj[key] === 'object' ) {
                // Recursively call for nested objects
                Object.assign(result, flattenObject(obj[key], newKey));
            } else {
                result[newKey] = obj[key];
            }   
        // }
    }

    return result;
}


console.log(flattenObject(obj));


// function isBigger(element,index,array){
//     return element > 10
// }
// [2,5,8,1,10].some(isBigger)
