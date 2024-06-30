function flat(array) {
  let newarray = array.reduce(
    (acc, curr) =>
      Array.isArray(curr) ? acc.concat(flat(curr)) : acc.concat(curr),
    []
  );

  return newarray;
}

console.log(flat([1, 2, [3, 4, [5]]]));

function flat (arr){
    let r=[]
    for( let item of arr){
        if(Array.isArray(item)){
            return r.concat(flat(item))
        }else{
            r.push(item)
        }
    }
    return r
}
  console.log(flat([1,2,[3,6,[6,9]]]))
