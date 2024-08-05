/* let number1 = 100
let number2 = 2
let sum = number1 + number2
console.log(number1, "+", number2, "=", number1 + number2)


number1 = 50
number2 = 50
sum = number1 + number2
console.log(number1, "+", number2, "=", number1 + number2)
console.log("the sum of ", number1, " and", number2, "is", sum)

number1 = 150
number2 = 50
sum = number1 + number2
console.log(number1, "+", number2, "=", number1 + number2)
console.log("the sum of ", number1, " and", number2, "is", sum)

 */

function calculateSum(a,b) {
  
  console.log(`${a} + ${b} = ${a + b}`);
}


calculateSum(100,2)
calculateSum(4,5)
calculateSum(10,5)

function double(input){
    console.log(`2* ${input} = ${input*2}`);
    
}
double(2)
double(5)


 function price(name, price){
    console.log(`The price of ${name} is ${price}`)
    
}

price("kiwi",100)
price("orange", 50)
price("apple", 50) 



let fruitsData = [
    {
      name: "kiwi",
      scientificName: "k-wrong-xyz",
      price: 100,
    },
    {
      name: "orange",
      scientificName: "k-xyz",
      price: 50,
    },
    {
      name: "apple",
      scientificName: "k-xyz",
      price: 150,
    },
  ]
  
  function priceprint(index){
    console.log(`The price of ${fruitsData[index].name} is ${fruitsData[index].price}`);
 
  }
  
priceprint(0)
priceprint(1)
priceprint(2)



  
  function priceprints(fruit){
let {name, price}=fruit
    console.log(`The price of ${name} is ${price}`);
 
  }
  
priceprints(fruitsData[0])
priceprints(fruitsData[1])
priceprints(fruitsData[2])





