const nepalinames=["aarav","aarya","aasha", "anisha"]

let db_users=[]
    

for(let index=0;index<nepalinames.length;index++){
    let element=nepalinames[index]
        db_users.push({
            name:element,
            email:element.toLowerCase()+"@gmail.com",
            password:element.toLowerCase()+index
        })

}
console.log(db_users);

