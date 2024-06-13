// Changing Guest List
let guestList: string[] = ["Alice", "Bob", "Charlie", "David"];
const cantMakeIt: string = "Charlie";  // Guest who can't make it
const newGuest: string = "Eve";  // New person to invite

// Print the guest who can't make it
console.log(`${cantMakeIt} can't make it to the dinner.`);

// Replace the guest and print new invitations
guestList[guestList.indexOf(cantMakeIt)] = newGuest;
guestList.forEach(guest => console.log(`Dear ${guest}, you are invited to the dinner.`));

// Additional Guests
console.log("\nMore Guests:");
console.log("We found a bigger dinner table!");

guestList.unshift("Frank");

const middleIndex: number = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Grace");

guestList.push("Hannah");

guestList.forEach(guest => console.log(`Dear ${guest}, you are invited to the dinner.`));
