let tem = prompt("Enter the temperature in Celcius: ");
function welther(tem){
    let cel = (tem * (9/5)) + 32;
    return cel;
}
console.log(`Temperature of ${tem} Celsius in Fahrenheit is: ${welther(tem)}`);
