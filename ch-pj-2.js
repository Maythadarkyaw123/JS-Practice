// Set values for height in inches and weight in pounds
let heightInInches = 70; //70 inches
let weightInPounds = 150; //150 pounds

// Convert values to centimeters and kilos
let heightInCm = heightInInches * 2.54;
let weightInKilos = weightInPounds / 2.2046;

// Output the results to the console
console.log(`Height in centimeters: ${heightInCm.toFixed(2)} cm`);
console.log(`Weight in kilos: ${weightInKilos.toFixed(2)} kg`);

// Calculate and log the BMI
let heightInMeters = heightInCm / 100;
let bmi = weightInKilos / (heightInMeters ** 2);

// Output the results to the console
console.log(`BMI: ${bmi.toFixed(2)}`);
