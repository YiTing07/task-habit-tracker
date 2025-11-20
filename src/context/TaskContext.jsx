import { createContext, useContext, useState, useEffect } from "react";


const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

export const TaskProvider = ({children}) => {
  // TaskList
  const [tasks, setTasks] = useState([]);

  // 初始化時，從 localStorage 載入 tasks
  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) setTasks(JSON.parse(saved));
  }, [])

  // 每次 tasks 改變時自動儲存
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])
  
  // CRUD 操作
  const addTask = (task) => {
    setTasks((prev) => [
      ...prev, 
      {...task, id: Date.now(), completed: false}
    ])   
    console.log("🟢 新增任務", task);
  }

  const editTask = (id, newTitle, newDeadline, newPriority) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
            ...task,
            title: newTitle ?? task.title,
            deadline: newDeadline ?? task.deadline,
            priority: newPriority ?? task.priority
            }
          : task
      )
    );
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) => 
        task.id === id ? {...task, completed: !task.completed} : task
      )
    )
  }
  
  const deleteTask = (id) => setTasks((prev) => prev.filter((task) => task.id !== id))

  return (
    <TaskContext.Provider value={{tasks, addTask, editTask, toggleTask, deleteTask}}>
      {children}
    </TaskContext.Provider>
  )
}