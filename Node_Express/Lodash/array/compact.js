
// Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.



const _ = require('lodash');

const res=_.compact([0, 1, false, 2, '', 3]);
console.log(res);