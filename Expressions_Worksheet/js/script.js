// Joseph Campbell 11-07-2013 Expression Worksheet

// Problem: Calculate sparky's age in dog years given it's actual age.

// Sparky's age.
var sparkyAge = 3
// Sparky's age in dog years.
var result = sparkyAge * 7

// Result to print.
console.log("Sparky is" + " " + sparkyAge + " " + "human years old which is" + " " + result + " " + "in dog years.");

// Problem: How much pizza will each partygoer get?

// Slices per pizza.
var perPizza = 8
// Number of people at the party.
var people = 12
// Number of pizzas ordered.
var numPizza = 3
// Number of slices per person.
var perPerson = numPizza*perPizza/people

// Result to print.
console.log("Each person ate" + " " + perPerson + " " + "slices of pizza at the party.")

// Problem: How many slices will Sparky get?

// Total number of slices.
var totalSlices = numPizza*perPizza
// Total number of slices eaten by partygoers.
var eaten = people*perPerson
// Number of slices left for Sparky.
var forSparky = totalSlices-eaten

// Result to print.

console.log("Sparky got" + " " + forSparky + " " + "slices of pizza.")

// Problem: Total and average spent on groceries for the past five weeks.

// Total spent each week.
var weeklyTotals = [214, 107, 194, 228, 139]
// Total amount spent on groceries.
var total = weeklyTotals[0] + weeklyTotals[1] + weeklyTotals[2] + weeklyTotals[3] + weeklyTotals[4]
// Average weekly grocery spending.
var average = total/5

// Result to print.

console.log("You have spent a total of" + " " + "$" + total + " " + "on groceries over 5 weeks. That is an average of" + " " + "$" + average + " " + "per week.")

