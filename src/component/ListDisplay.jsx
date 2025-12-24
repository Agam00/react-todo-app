import { useState } from "react";
import { MdDelete, MdEdit, MdCheck } from "react-icons/md";

function ListDisplay({ tasks, onMark, onRemove, onUpdate }) {
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (item) => {
    setEditId(item.id);
    setEditText(item.task);
  };
  const handleSave = (id) => {
    onUpdate(id, editText);
    setEditId(null);
  };
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

          {editId === item.id ? (
            <input
              className="px-2 py-1 rounded bg-gray-800 text-white"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
          ) : (
            <span
              className={
                item.isDone ? "text-gray-400 line-through" : "text-white"
              }
            >
              {item.task}
            </span>
          )}

          {editId === item.id ? (
            <button
              onClick={() => handleSave(item.id)}
              className="text-green-500"
            >
              <MdCheck />
            </button>
          ) : (
            !item.isDone && (
              <button
                onClick={() => handleEdit(item)}
                className="text-blue-500"
              >
                <MdEdit />
              </button>
            )
          )}

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
