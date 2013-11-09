// Joseph Campbell 11-08-2013 Expressions_Personal

// Problem: How much will it cost to travel in your vehicle compared to the average vehicle?

var vehicleMpg = [22, 17, 28, 15, 23];
// This array shows the miles per gallon statistics for five vehicles.

var avgMpg = (vehicleMpg[0] + vehicleMpg[1] + vehicleMpg[2] + vehicleMpg[3] + vehicleMpg[4])/5;
// This calculates the average vehicle miles per gallon of the array on line 5.

var distance = prompt("In order to compare costs, Please enter the distance you need to travel.");
// This asks the user to enter how far they are planning to travel.

var price = prompt("Please enter the price of the fuel you will be using."); 
// This asks the user to enter the price of fuel.
 
var mpg = prompt("Please enter your vehicles miles per gallon statistics."); 
// This asks the user to enter the mpg of their vehicle.

var result = (distance/mpg)*price;
// This calculates how much it would cost the user in fuel to travel.

var avgResult = (distance/avgMpg)*price;
// This calculates how much it would cost for the average vehicle to travel.

alert("It would cost you " + "$" + result + " to travel " + distance + " miles, compared to the " + "$" + avgResult + " it would cost to drive the average vehicle.");
// This shows the user the results in the pop up window.
 
console.log("It will cost you " + "$" + result + " in fuel to travel " + distance + " miles, compared to the " + "$" + avgResult + " it would cost the average vehicle.");
// This prints the result to the console.