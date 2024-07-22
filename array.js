let cars = ["sj", "uhsu", "du"];
console.log(cars);

let numbers = [1, 2, 3, 4, "dh"];

numbers[4] = 5;
console.log(numbers);

/* let users=[["ram","hari","sita"],
[2983,3983,383]]; */

// console.log(users);

let a = "dj";
let b = "bdj";
let c = "dh";

let projector = { brand: "acer", color: "white", price: 7000 };

console.log(projector);
/*
let projecto=["brand:acer",
   "color:white", "price=7000",

]console.log(projecto);
*/
let users = [
  {
    name: "ram",
    contact: 981829982,
    add: {
      per_add: {
        district: "abc",
        ward: -1,
        tole: "wrongtole",
      },
    },
  },
  {
    name: "shyam",
    contact: 387387,
    add: {
      per_add: {
        district: "abc",
        ward: 10,
        tole: "abctole",
      },
    },
  },
  {
    name: "hari",
    contact: 98338,
    add: {
      per_add: {
        district: "abc",
        ward: 10,
        tole: "abctole",
      },
    },
  },
];
users[0].add.per_add.ward = 1;
users[0].add.per_add.tole = "righttole";

console.log(users);

/* let fruits = [

  {
    name: "kiwi",
    
    prices: [
      {
        country:"nepal",
        rate:100,
      },
      {
        country:"us",
        rate:1,
      },
      {
        country:"bhutan",
        rate:10,
      },
    ]
  }
]; */
fruit1 = {
  name: "kiwi",
  scientificName: "k-wrong-xyz",
  prices: [
    {
      country: "nepal",
      rate: 1, // change this to 100
    },
    {
      country: "us",
      rate: 1,
    },
    {
      country: "au",
      rate: 1.5,
    },
  ],
};

fruit1.prices[0].rate = 100;

console.log(fruit1);

let backendResponse = {
  msg: "success",
  result: {
    total: 2,
    data: [
      {
        name: "kiwi",
        scientificName: "k-wrong-xyz",
        prices: [
          {
            country: "us",
            price: 1,
          },
          {
            country: "nepal",
            price: 1, // change this to 100
          },
        ],
      },
      {
        name: "orange",
        scientificName: "k-xyz",
        prices: [
          {
            country: "us",
            price: 2,
          },
          {
            country: "nepal",
            price: 200,
          },
          {
            country: "cad",
            price: 200,
          },
        ],
      },
    ],
  },
};

backendResponse.result.data[0].prices[1].price = 100;

console.log(backendResponse);

backendResponse.result.data[0].prices[2] = {
  country: "cand",
  price: 200,
};

console.log(backendResponse);

let firstno = 1;
let secondno=2;
let thirdno = 11;
let forthno=21;
let fifthno = 12;
let sixthno=28;
let seventhno = 18;
let eightno=20;


console.log(firstno+"", "+"+"", secondno, "=", firstno+secondno);
console.log(thirdno+"", "+"+"", forthno, "=", thirdno+forthno);
console.log(fifthno+"", "+"+"", sixthno, "=", fifthno+sixthno);
console.log(seventhno+"", "+"+"", eightno, "=", seventhno+eightno);


console.log("The sum of",firstno+"", "and"+"", secondno, "is", firstno+secondno);
console.log("The sum of",thirdno+"", "and"+"", forthno, "is", thirdno+forthno);
console.log("The sum of",fifthno+"", "and"+"", sixthno, "is", fifthno+sixthno);
console.log("The sum of",seventhno+"", "and"+"", eightno, "is", seventhno+eightno);



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


console.log(`The price of ${fruitsData[0].name} is ${fruitsData[0].price}`);
console.log(`The price of ${fruitsData[1].name} is ${fruitsData[1].price}`);
console.log(`The price of ${fruitsData[2].name} is ${fruitsData[2].price}`);
