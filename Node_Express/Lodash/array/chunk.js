const _ = require('lodash');
const array=[1,2,3,4,5,7,6,5,3]
const res =_.chunk(array, [size=2])
console.log(res);