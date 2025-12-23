import { useState } from "react";

function ListForm({ onAdd }) {
  const [task, setTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    onAdd({ task });
    setTask("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p className="text-white font-bold text-2xl my-3"> Add Task</p>
        <input
          className="bg-gray-800 text-white border border-gray-600 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
  placeholder="Add task"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button 
        className=" text-white text-lg ml-2 p-2 rounded-xl  bg-blue-700 hover:bg-blue-500"
        type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ListForm;
