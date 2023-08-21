let userInput = prompt("Enter your command");

const todoList = ["Eat your Dinner", "Play a game"];

while (userInput !== "quit" && userInput !== "q") {

    if (userInput === "list" || userInput === "l") {
        console.log("*****");
        for (let index = 0; index < todoList.length; index++) {
            console.log(`${index}: ${todoList[index]}`);
        }
        console.log("*****");
    }
    else if (userInput === "new" || userInput === "n") {
        const newTodo = prompt("Enter a new ToDo item");
        todoList.push(newTodo);
        console.log(`${newTodo} added to the list`);
    }
    else if (userInput === "delete" || userInput === "d") {
        const index = parseInt(prompt("Enter the index to delete"));
        if (!Number.isNaN(index) && (index <= (todoList.length - 1))) {
            console.log(`${todoList[index]} deleted`);
            todoList.splice(index, 1);
        }
        else {
            console.log("Invalid Index");
        }
    }

    userInput = prompt("Enter your command");
}

console.log("Quitting the app");