
let todos = [
    {
        "userId": 1,
        "id": 1,
        "title": "task one",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "task two",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "task three",
        "completed": true
    }
]



        for(let index=0;index<todos.length;index++){
        if(todos[index].completed==true){
            
            console.log(`Task ${todos[index].id} is complete`);
            
        }  
        else{
            console.log(`Task ${todos[index].id} is incomplete`);
        }  
        
        }

/* 
    there may be hundred of tasks.. 
    ternary operator. 
*/

/* 
    TODO:
    output
    task one is incomplete
    task two is incomplete
    task three is completed

*/
