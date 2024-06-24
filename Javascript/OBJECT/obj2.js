let obj = [{ name: "Ann" }, { name: "Bob" }, { name: "Charlie" }];

//  {3: [{name: "Ann"}, {name: "Bob"}], 7: [{name: "Charlie"}]}

function testing(obj) {
    let test={}
    for(let item of obj){
        // console.log(item);
        let length=item.name.length
        if(!test[length]){
            test[length]=[]
        }
        test[length].push(item)
    }
    return test
}
console.log(testing(obj))
