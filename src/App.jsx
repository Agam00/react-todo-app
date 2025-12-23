import { useState, useEffect } from "react";
import "./App.css";
import ListForm from "./component/ListForm";
import ListDisplay from "./component/ListDisplay";

function App() {
  const [taskList, setTaskList] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTaskList(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  const onAdd = (task) => {
    setTaskList([...taskList, { ...task, id: Date.now(), isDone: false }]);
  };

  const onMark = (id) => {
    setTaskList(
      taskList.map((item) =>
        item.id === id ? { ...item, isDone: true } : item
      )
    );
  };
  const onRemove = (id) => {
    setTaskList(taskList.filter((item) => item.id !== id));
  };

  const totalTasks = taskList.length;
  const completedTasks = taskList.filter((item) => item.isDone).length;
  const pendingTasks=totalTasks-completedTasks

  return (
    <>
      <div className="min-h-screen flex flex-col items-center pt-16">
        <section className="w-full max-w-md">
          <span className="text-white font-semibold">
            Total Tasks: {totalTasks}
          </span>
          <div className="flex flex-col mt-4">
            <span className="text-green-400 font-semibold  ">
              Completed: {completedTasks}
            </span>
            <span className="text-red-400 font-semibold  ">
              Pending Tasks: {pendingTasks}
            </span>
          </div>
          <ListForm onAdd={onAdd} />

          <div className="mt-4">
            <ListDisplay tasks={taskList} onRemove={onRemove} onMark={onMark} />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
