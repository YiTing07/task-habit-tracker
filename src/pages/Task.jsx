import { AiOutlineEdit } from "react-icons/ai";
import { useState } from "react";

// 臨時的 task data
const initialTasks = [
  {
  "id": "task-001",
  "title": "準備期中報告",
  "completed": false,
},
{
  "id": "task-002",
  "title": "買牛奶",
  "completed": false,
},
{
  "id": "task-003",
  "title": "線上聽課14：00",
  "completed": false,
},
{
  "id": "task-004",
  "title": "搜尋旅行相關資料",
  "completed": false,
},
]

export default function Task() {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTask = (id) => {
    setTasks(prev => 
      prev.map(task =>
        task.id === id ? {...task, completed:!task.completed} : task
      )
    )
  }

  return (
    <div className="h-dvh">
      <div className="flex flex-wrap gap-5 p-8">
        {tasks.map((item) => (
          <div 
            key={item.id} 
            className={`relative w-40 h-40 p-3 border rounded-xl cursor-pointer transition-colors duration-200
              ${
                item.completed 
                ? "bg-gray-100 text-gray-400 line-through"
                : "border-amber-400 bg-white text-black hover:bg-amber-50"
              }
            `}
            
          >
            <AiOutlineEdit className="absolute top-2 right-3" size={20} />

            <div 
              className="flex justify-center items-center h-full" 
              onClick={() => toggleTask(item.id)}
            >
              <p className="text-center">{item.title}</p>
            </div>
          </div>
        ))}
      </div>    
    </div>
  )
}