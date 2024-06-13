let userName:string[]=["Admin","Asma","Aslam","Ali","Saba","kainat","Huzaifa"]

userName.forEach(oneUser=> {
    if(oneUser == "Admin"){
        console.log(`Hello ${oneUser} ,would you like to see a staatus report?`);
        
    }
    else{
        console.log(`Hello ${oneUser},Thankyou for loggin in again`);
        
    }
});
