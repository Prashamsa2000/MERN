let todos = [
  {
    title: "html",
    status: true,
  },

  {
    title: "js",
    status: false,
  },
  {
    title: "css",
    status: true,
  },
  {
    title: "react",
    status: false,
  },
];

let completedTodos = [];
let incompleteTodos = [];

todos.forEach((todo) => {
  if (todo.status) {
    completedTodos.push(todo);
  } else {
    incompleteTodos.push(todo);
  }
});

console.log(completedTodos);
console.log(incompleteTodos);

todos.filter;

for (let index = 0; index < todos.length; index++) {
  console.log(
    `${todos[index].title} is ${
      todos[index].status ? "completed" : "not completed"
    }`
  );
}

todos.forEach((ok) => {
  if (ok.status) {
    console.log(`${ok.title} is completed`);
  } else {
    console.log(`${ok.title} is incompleted`);
  }
});

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let odd = [];
let even = [];

even = numbers.filter((number) => {
  if (number % 2 == 0) {
    return true;
  }
});

console.log(even);

let cartItems = [
  {
    name: "ram",
    products: [
      { title: "watch", price: 1000 },
      { title: "mouse", price: 500 },
    ],
  },
  {
    name: "hari",
    products: [
      { title: "watch", price: 1000 },
      { title: "mouse", price: 1000 },
      { title: "keyboard", price: 500 },
    ],
  },
  {
    name: "sita",
    products: [{ title: "watch", price: 10000 }],
  },
];

/* for (let index = 0; index < cartItems.length; index++) {
totalOrder=cartItems[index].products[index].price+cartItems[index].products[index].price+cartItems[index].products[index].price
    console.log(`${cartItems[index].name} has ordered of Rs ${totalOrder}`);
  }
 */

cartItems.forEach((cartItem) => {
  let total=0;
  cartItem.products.forEach((product)=>{
    total=total+product.price
  })
  console.log(`${cartItem.name} has ordered of Rs ${total}`);
});

/* cartItems.forEach((cartItem) => {
    let total=0
    for(let index=0;index<cartItem.products.length;index++){
      totalOrder=total+cartItem.products.price[index]
    }
    console.log(`${cartItem.name} has ordered of Rs ${totalOrder}`);
  });
 */
//ram has ordered of rs 1500
//hari has ordered of rs 1500
//sita has ordered of rs 1500
/* 
    html is completed
    css is completed
    js is incompleted
*/
