import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";
import { useHabits } from "../context/HabitContext";
import EditPanel from "../components/EditPanel/EditPanel";

export default function Habit () {
  const { habits, setHabits, deleteHabit } = useHabits();

  const [editOpen, setEditOpen] = useState(false);
  const [editingHabit, setEditingHabit] = useState(null);

  const handleHabitClick = (id) => {
    setHabits((prev) =>
      prev.map((habit) => {
        if (habit.id !== id) return habit;
        const newProgress = Math.min(habit.progress + 1, habit.numberTime);

        return {
          ...habit,
          progress: newProgress
        }
      }
      )
    )
  };

  const handleEditClick = (habit) => {
    setEditingHabit(habit);
    setEditOpen(true);
  }

  const handleEditClose = () => {
    setEditOpen(false);
    setEditingHabit(null);
  }
  

  return (
    <div className="h-dvh">
      <div className="flex flex-wrap gap-5 p-8">
        {habits.map((item) => (
          <div 
            key={item.id} 
            className={`relative w-30 h-30 p-3 border  rounded-xl cursor-pointer transition-colors duration-200
              ${
                item.progress === item.numberTime
                ? "bg-gray-100 text-gray-400 line-through" 
                : "border-secondary hover:bg-cyan-50"
              }  
            `}
          >
            <AiOutlineDelete 
              className="absolute top-2 left-3 text-base-content" 
              size={20} 
              onClick={() => deleteHabit(item.id)}  
            />
            <AiOutlineEdit 
              className="absolute top-2 right-3 text-base-content" 
              size={20} 
              onClick={() => handleEditClick(item)}  
            />

            <div 
              className="flex flex-col justify-center items-center h-full" 
              onClick={() => handleHabitClick(item.id)}>
              <p className="my-3 pt-3 text-center">{item.title}</p>
              <p className="text-sm text-center">本{item.frequency}：{item.progress} / {item.numberTime}</p>

              {/* 進度條 */}
              <div className="w-full h-2 mt-3 bg-success-content rounded-full ">
                <div 
                  className="h-full rounded-full"
                  style={{
                    width: `${(item.progress/item.numberTime) * 100}%`,
                    backgroundColor:
                      item.progress === item.numberTime ? "var(--color-success)" : "var(--color-accent)"
                  }}  
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>    

      <EditPanel isOpen={editOpen} onCloseEdit={handleEditClose} editingHabit={editingHabit} />
    </div>
  )
}