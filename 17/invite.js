var guests = ["Alice", "Bob", "Charlie", "David", "Eve"];
console.log("You can invite only two people for dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
guests.forEach(function (guest) {
    console.log("".concat(guest, ", you're still invited to dinner."));
});
guests.splice(0, guests.length);
console.log("Empty guest list:", guests);
