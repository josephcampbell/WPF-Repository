// Joseph Campbell 11-08-2013 Expressions_Personal

// Problem: Calculate how much it would cost in fuel traveling by car.

var distance = prompt("Please enter the distance you need to travel.");
// This asks the user to enter how far they are planning to travel.

var price = prompt("Please enter the price of the fuel you will be using."); 
// This asks the user to enter the price of fuel.
 
var mpg = prompt("Please enter your vehicles miles per gallon."); 
// This asks the user to enter the mpg of their vehicle.

var result = (distance/mpg)*price;
// This calculates how much it would cost the user in fuel to travel.
 
console.log("It will cost you " + "$" + result + " in fuel to travel " + distance + " miles.");
// This prints the result to the console.