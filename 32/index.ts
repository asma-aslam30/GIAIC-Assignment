let current_usersName = ["Asma", "Saba", "Ali", "Admin", "kainat", "farzana", "kamran"];
let new_users = ["Razi","romi","Ayesha","Asma" ,"joyal"]

new_users.forEach(new_one_users =>{
    let ourCondition =current_usersName.some(current_one_usersName => current_one_usersName.toLocaleLowerCase() === new_one_users.toLocaleLowerCase())
    if(ourCondition){
        console.log(`Sorry! ${new_one_users} is already taken..`);
        

    }
    else{
        console.log(`This username ${new_one_users} is available`);
        
    }
});