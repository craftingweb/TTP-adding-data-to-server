import { AiOutlineEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import Check from "./Check";
import { Link } from "react-router-dom";

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
  return (
    <div className="flex items-center justify-between mb-4 rounded-2xl bg-gray-800 p-5 w-full">
      <button className="flex items-center" onClick={() => changeTodo(todo.id)}>
        <Check isCompleted={todo.isCompleted} />
        <span className={todo.isCompleted ? "line-through" : ""}>
          <div className="font-bold text-xl text-blue-300">{todo.title}</div>

          <div className="italic text-green-300 "> {todo.description}</div>
        </span>
      </button>
      {/* adding Edit Button */}
      <div className="flex gap-5">
        <Link to={`/edit/${todo.id}`}>
          <AiOutlineEdit
            size={22}
            className="text-gray-600 hover:text-blue-700 transition-colors ease-in-out duration-300"
          />
        </Link>

        <button onClick={() => removeTodo(todo.id)}>
          <BsTrash
            size={22}
            className="text-gray-600 hover:text-red-700 transition-colors ease-in-out duration-300"
          />
        </button>
      </div>
    </div>
  );
};
export default TodoItem;
