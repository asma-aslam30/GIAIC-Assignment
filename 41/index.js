function show_magician(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The great ".concat(name); });
}
var magician_names = ["asma", "harry", "ali", "usama"];
var great_magician = make_great(magician_names);
console.log(great_magician);
show_magician(great_magician);
