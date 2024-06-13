// let userName = ["Asma", "Saba", "Ali", "Admin", "kainat", "farzana", "kamran"];
var userName = [];
if (userName.length === 0) {
    console.log("Your erroe is empty, We need to find some users");
}
else {
    userName.forEach(function (oneUser) {
        if (oneUser == "Admin") {
            console.log("Hello ".concat(oneUser, " ,would you like to see a staatus report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ",Thankyou for loggin in again"));
        }
    });
}
