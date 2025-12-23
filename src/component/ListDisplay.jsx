import { MdDelete } from "react-icons/md";

function ListDisplay({ tasks, onMark, onRemove }) {
  return (
    <div className="space-y-2">
      {tasks.map((item) => (
        <div key={item.id} className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={item.isDone}
            onChange={() => onMark(item.id)}
            className="w-4 h-4 accent-green-600"
          />

          <span
            className={
              item.isDone ? "text-gray-400 line-through" : "text-white"
            }
          >
            {item.task}
          </span>

          <button
            onClick={() => onRemove(item.id)}
            className="text-red-500 hover:text-red-700"
          >
            <MdDelete />
          </button>
        </div>
      ))}
    </div>
  );
}

export default ListDisplay;
