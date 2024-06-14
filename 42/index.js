var magicians = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller", "Criss Angel", "Dynamo"];
function show_magician(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log("The super dooper magician ".concat(magicians[i]));
    }
}
function make_great(magicians) {
    var modified_magicians = [];
    for (var i = 0; i < magicians.length; i++) {
        modified_magicians.push("The Great ".concat(magicians[i]));
    }
    return modified_magicians;
}
console.log(make_great(magicians));
console.log("\n actual magicians list:\n");
console.log(magicians);
