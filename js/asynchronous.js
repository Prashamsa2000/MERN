setTimeout(()=>{
    console.log("of");
},4000)




try{
let fullName=firstName+LastName
}catch(err){
    console.log(err.message);
}




console.log("taks1");


let promise=new Promise((resolve,reject)=>{
setTimeout(()=>{
    resolve({
        data:{
            name:"ram",
            email:"dsjdxb",
        },
    })

    
},2000)
})
promise.then((response)=>{
    console.log(response);
}).catch((err)=>
{
    console.log("err",err);
})

console.log(promise);





