var userName = ["Admin", "Asma", "Aslam", "Ali", "Saba", "kainat", "Huzaifa"];
userName.forEach(function (oneUser) {
    if (oneUser == "Admin") {
        console.log("Hello ".concat(oneUser, " ,would you like to see a staatus report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ",Thankyou for loggin in again"));
    }
});
