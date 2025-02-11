let a = [1,2,3,4]
function largest(a){
    let max = a[0];
    for(let i = 1; i < a.length; i++)
        if(a[i] > max)
            max = a[i];
    return max;
}

console.log(largest(a));