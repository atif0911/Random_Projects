import { useState } from "react";

function AddTodo({onNewItem}) {

  let [todoName,setTodoName]=useState("");
  let [dueDate,setDueDate]=useState("");

  const handleNameChange=(event)=>{
    setTodoName(event.target.value);
  }

  const handleDateChange=(event)=>{
    setDueDate(event.target.value);
  }

  const handleAddButtonClicked=()=>{
    onNewItem(todoName,dueDate);
    setDueDate("");
    setTodoName("");
  }


  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here"    value={todoName} onChange={handleNameChange}/>
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDateChange} value={dueDate}/>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button" onClick={handleAddButtonClicked}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
