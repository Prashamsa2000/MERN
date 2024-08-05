
let names=["ram","shyam","hari"]
let ages=[10,20,30,40,50]
let religions=["hindu","buddhist"]
let ethnicities=["bhramin","newar"]

function randomindex(data){
    return Math.floor(Math.random()*data.length)
}

let fakeuser=[]

for(let index=0;index<names.length;index++){

fakeuser.push({
    name:names[index],
    age:randomindex(ages),
    religion:randomindex(religions),
    ethnicity:randomindex(ethnicities)
});
}
console.log(fakeuser)












