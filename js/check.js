let user = {
    name: "ram",
    email: "ram@ram.com",
    password: "ram-password"
}


/* OUTPUT */
 //  user logged in 
//checkPassword("ram-wrong-password")  //  Invalid Credentials
function checkPassword(email, password){
if(user.email==email && user.password==password){
    console.log(`User logged in`);
}
else{
    console.log(`Invalid credentials`);
}
}

checkPassword("ram@ram.com","ram-password")
checkPassword("ram@ram.com","ram-wrong-password")
checkPassword("shayam@shyam.com","ram-password")
/* 
    TODO: 
    create a function checkPassword  
    and 
    if the password matches for above user, print user logged in else print invalid credentials


    as self research check for Logical operators too AND(&&) , OR(||) , NOT(!)
    THEN , 
    MUTATE/UPDATE THE FUNCTION  checkPassword

    checkPassword("ram@ram.com","ram-password")   // user logged in 
    checkPassword("ram@ram.com","ram-wrong-password")   // Invalid Credentails
    checkPassword("shayam@shyam.com","ram-password")   // Invalid Credentails


*/



