function one(ok){
    ok()
    console.log("hello");
    //call_two();
}

function two(){
    console.log("dhueh");
}

one(two);