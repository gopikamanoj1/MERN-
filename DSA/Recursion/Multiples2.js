let num = 100;

function sample(num, count = 1) {
    if (num <= 0) {
        return;
    }

    let mul = count * 2;

    console.log(num);

    count++;
    
    return sample(num - mul, count);
}

sample(num);
