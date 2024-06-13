// Define the guest list
var guests = ["Asma Aslam", "Zainab Lakhoo", "Tasbiha Naz"];
// Print invitation messages
console.log("Before  change the guest");
console.log("Dear ".concat(guests[0], ",\n\nIt would be an honor to have you join us for dinner. Your presence would make the evening truly special."));
console.log("Dear ".concat(guests[1], ",\n\nIt would be an honor to have you join us for dinner. Your presence would make the evening truly special."));
console.log("Dear ".concat(guests[2], ",\n\nIt would be an honor to have you join us for dinner. Your presence would make the evening truly special. "));
// chnage the guest
guests[1] = "Misbah Aslam";
// print message 
console.log("After change the guest");
console.log("Dear ".concat(guests[0], ",\n\nIt would be an honor to have you join us for dinner. Your presence would make the evening truly special."));
console.log("Dear ".concat(guests[1], ",\n\nIt would be an honor to have you join us for dinner. Your presence would make the evening truly special."));
console.log("Dear ".concat(guests[2], ",\n\nIt would be an honor to have you join us for dinner. Your presence would make the evening truly special. "));
