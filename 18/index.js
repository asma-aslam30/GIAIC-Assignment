var countriesToVisit = ["US", "Canada", "Afghanistan", "Brazil", "Iran", "Bangladesh"];
console.log("Original Order", countriesToVisit);
var alphabeticalOrder = countriesToVisit.slice().sort();
console.log("Alphabetical Order", alphabeticalOrder);
console.log("Still in Original Order", countriesToVisit);
var reverseOrder = alphabeticalOrder.slice().reverse();
console.log("Reverse Alphabetical Order", reverseOrder);
console.log("Still in Original Order", countriesToVisit);
console.log("Original Order Reversed", countriesToVisit.reverse());
console.log("Back to Original Order ", countriesToVisit.reverse());
console.log("Sort the Original Order", countriesToVisit.sort());
console.log("Reversed the original Order", countriesToVisit.reverse());