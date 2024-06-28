import PropTypes from "prop-types";

function TodoItem({ todo, onRemove, onToggleCompleted }) {
  const handleRemove = () => {
    onRemove(todo.id);
  };

  const handleToggleCompleted = () => {
    onToggleCompleted(todo.id);
  };

  return (
    <li className="flex items-center justify-between mb-2">
      <span
        className={`text-lg ${todo.completed ? "line-through text-gray-500" : ""}`}
      >
        {todo.text}
      </span>
      <div className="flex space-x-2">
        <button
          onClick={handleToggleCompleted}
          className="text-blue-500 hover:text-blue-700"
        >
          {todo.completed ? "Mark Incomplete" : "Mark Complete"}
        </button>
        <button
          onClick={handleRemove}
          className="text-red-500 hover:text-red-700"
        >
          Remove
        </button>
      </div>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
  onToggleCompleted: PropTypes.func.isRequired,
};

export default TodoItem;
