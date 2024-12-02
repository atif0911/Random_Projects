import AppName from "./components/AppName";
import AddTodo from "./components/AppTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeletedItem = (todoName) => {
    const newTodoItems=todoItems.filter(item=>item.name!==todoName);
    setTodoItems(newTodoItems);
    console.log(todoName);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems
        todoItems={todoItems}
        onDeletedItem={handleDeletedItem}
      ></TodoItems>
    </center>
  );
}

export default App;
