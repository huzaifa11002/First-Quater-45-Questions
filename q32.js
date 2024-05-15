/* Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted. */
export {};
// let current_users: string[] = ["taLha" , "huZaifa" , "aDmin" , "haMza" , "mOiz"]
// let new_users: string[] = ["pUshpa" , "huzaiFa" , "Admin" , "fannY" , "bEnny"]
// new_users.forEach(newUser => {
//     let lowerNewUser = newUser.toLowerCase();
//     // let lowerCurrentUser = current_users.toLowerCase(); // why this is problematic in this code?
//     let compareUser = current_users.some(current_users => 
//     current_users.toLowerCase() === lowerNewUser)
//     if(compareUser){
//         console.log(`This username ${newUser} already taken`);
//     }
//     else{
//         console.log(`${newUser}, You can use this username`);
//         current_users.push(newUser)
//     }
// });
// console.log(current_users);
