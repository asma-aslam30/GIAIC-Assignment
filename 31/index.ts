let userName = ["Asma", "Saba", "Ali", "Admin", "kainat", "farzana", "kamran"];
// let userName=[]


if (userName.length === 0) {
  console.log("Your erroe is empty, We need to find some users");
} 
else
 {
  userName.forEach((oneUser) => {
    if (oneUser == "Admin") {
      console.log(`Hello ${oneUser} ,would you like to see a staatus report?`);
    } else {
      console.log(`Hello ${oneUser},Thankyou for loggin in again`);
    }
  });
}
