// Creates a new array concatenating array with any additional arrays and/or values.



const _ = require('lodash');
const array = [1];
const other = _.concat(array, 2, [3], [[4]]);
 
console.log(other);