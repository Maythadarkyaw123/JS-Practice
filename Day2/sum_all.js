let myarr = [1,3,5,5,2];
let ans = myarr.reduce( //reduce function has two parameters
    (accumulator, currentvalue) => {  
        return accumulator + currentvalue
    }

, 0); //0 is initial value;

console.log(ans);