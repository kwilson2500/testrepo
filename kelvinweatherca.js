// Kelvin Weather - code academy

// create a variable name kelvin and assign it 293
var kelvin = 0;
// create a variable celsius that subtracts kelvin by 273
var celsius = kelvin - 273;
// create a variable fahrenheit 
var fahrenheit = celsius * (9 / 5) + 32;
// make the number round to the nearest whole number for fahrenheit
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);