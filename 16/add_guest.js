// Changing Guest List
var guestList = ["Alice", "Bob", "Charlie", "David"];
var cantMakeIt = "Charlie"; // Guest who can't make it
var newGuest = "Eve"; // New person to invite
// Print the guest who can't make it
console.log("".concat(cantMakeIt, " can't make it to the dinner."));
// Replace the guest and print new invitations
guestList[guestList.indexOf(cantMakeIt)] = newGuest;
guestList.forEach(function (guest) { return console.log("Dear ".concat(guest, ", you are invited to the dinner.")); });
// Additional Guests
console.log("\nMore Guests:");
console.log("We found a bigger dinner table!");
guestList.unshift("Frank");
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Grace");
guestList.push("Hannah");
guestList.forEach(function (guest) { return console.log("Dear ".concat(guest, ", you are invited to the dinner.")); });
