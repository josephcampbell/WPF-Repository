// Joseph Campbell 11-08-2013 Expressions_Personal

// Problem: Does it cost more or less to travel in your vehicle compared to the average vehicle?

var vehicleMpg = [22, 17, 28, 15, 23]

var distance = prompt("Please enter the distance you need to travel.");
// This asks the user to enter how far they are planning to travel.

var price = prompt("Please enter the price of the fuel you will be using."); 
// This asks the user to enter the price of fuel.
 
var mpg = prompt("Please enter your vehicles miles per gallon."); 
// This asks the user to enter the mpg of their vehicle.

var result = (distance/mpg)*price;
// This calculates how much it would cost the user in fuel to travel.

alert("You will need " + "$" + result + " for fuel to travel this distance.");
// This shows the user the results in the pop up window.
 
console.log("It will cost you " + "$" + result + " in fuel to travel " + distance + " miles.");
// This prints the result to the console.