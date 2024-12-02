import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems , onDeletedItem}) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem key = {item.name} todoDate={item.dueDate} todoName={item.name} onDeletedItem={onDeletedItem}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
