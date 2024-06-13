let guests: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];
console.log("You can invite only two people for dinner.");

while (guests.length > 2) {
    const removedGuest: string = guests.pop()!;
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

guests.forEach(guest => {
    console.log(`${guest}, you're still invited to dinner.`);
});

guests.splice(0, guests.length);
console.log("Empty guest list:", guests);
