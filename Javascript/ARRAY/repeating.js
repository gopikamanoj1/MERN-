// most repeating element

let array=[1,2,3,4,9,2,4,7,3,7,1,4]


function repeat(arr) {
    let MaxCout = 0;
    let num = 0;

    for (let i = 0; i < arr.length; i++) {
        let count = 1; 
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        if (count > MaxCout) {
            MaxCout = count;
            num = arr[i];
        }
    }

    return num;
}

console.log(repeat(array));

