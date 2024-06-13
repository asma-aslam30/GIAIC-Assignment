var current_usersName = ["Asma", "Saba", "Ali", "Admin", "kainat", "farzana", "kamran"];
var new_users = ["Razi", "romi", "Ayesha", "Asma", "joyal"];
new_users.forEach(function (new_one_users) {
    var ourCondition = current_usersName.some(function (current_one_usersName) { return current_one_usersName.toLocaleLowerCase() === new_one_users.toLocaleLowerCase(); });
    if (ourCondition) {
        console.log("Sorry! ".concat(new_one_users, " is already taken.."));
    }
    else {
        console.log("This username ".concat(new_one_users, " is available"));
    }
});
