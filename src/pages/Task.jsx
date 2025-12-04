import { AiOutlineEdit, AiOutlineDelete, AiFillStar } from "react-icons/ai";
import { useState } from "react";
import { useTasks } from "../context/TaskContext";
import EditPanel from "../components/EditPanel/EditPanel";

const PriorityStar = ({ priority }) => {
  const starCount = { low: 1, middle: 2, high: 3 };
  const stars = Array.from({length: starCount[priority] || 0})

  return (
    <div className="flex justify-center">
      {stars.map((__, index) => (
        <AiFillStar key={index} className="text-amber-300" />
      ))}
    </div>
  )
}

export default function Task() {
  const { tasks, toggleTask, deleteTask } = useTasks();

  const [editOpen, setEditOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const handleEditClick = (task) => {
    setEditingTask(task);
    setEditOpen(true);
  }

  const handleEditClose = () => {
    setEditOpen(false);
    setEditingTask(null);
  }

  return (
    <div className="h-dvh">
      <div className="flex flex-wrap gap-5 p-8">
        {tasks.map((item) => (
          <div
            key={item.id}
            className={`relative w-30 h-30 p-3 border rounded-xl cursor-pointer transition-colors duration-200
              ${item.completed
                ? "bg-gray-100 text-gray-400 line-through"
                : "border-amber-400 bg-white text-black hover:bg-amber-50"
              }
            `}
          >
            <AiOutlineDelete
              className="absolute top-2 left-3"
              size={20}
              onClick={() => deleteTask(item.id)}
            />
            <AiOutlineEdit
              className="absolute top-2 right-3"
              size={20}
              onClick={() => handleEditClick(item)}
            />

            <div
              className="flex flex-col justify-evenly h-full mt-4"
              onClick={() => toggleTask(item.id)}
            >
              <p className="text-center">{item.title}</p>
              <PriorityStar priority={item.priority} />
              <p className="text-center text-xs text-warning">{item.deadline}</p>
            </div>
          </div>
        ))}
      </div>

      <EditPanel isOpen={editOpen} onCloseEdit={handleEditClose} editingTask={editingTask} />

    </div>
  )
}