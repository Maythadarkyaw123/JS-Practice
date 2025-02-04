let myinput = prompt("Enter your age: ");
age = Number(myinput);

if(isNaN(age) || age < 0){
    console.log("Invalid input!");
}
else if(age >= 18){
    console.log("Yes, You are eligible to vote.");
}
else{
    console.log("Sorry! You are not eligible to vote.");
}