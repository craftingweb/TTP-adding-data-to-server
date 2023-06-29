// TodoItem will recieve todo's title in Home componentnt
import { BsTrash } from "react-icons/bs";
import Check from "./Check";

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
  return (
    <div className="flex items-center justify-between mb-4 rounded-2xl bg-gray-800 p-5 w-full">
      {/* here flex make icon and title on same ine, then with items-center to center them; w-full will expend it in full width for button*/}
      <button
        className="flex items-center"
        onClick={() => changeTodo(todo._id)}
      >
        <Check isCompleted={todo.isCompleted} />
        <span className={todo.isCompleted ? "line-through" : ""}>
          <div className="font-bold text-xl">{todo.title}</div>

          <div className="italic"> {todo.description}</div>
        </span>
      </button>
      <button onClick={() => removeTodo(todo._id)}>
        <BsTrash
          size={22}
          className="text-gray-600 hover:text-red-700 transition-colors ease-in-out duration-300"
        />
      </button>
      {/* hover effect syntax hover: property */}
    </div>
  );
};
export default TodoItem;
