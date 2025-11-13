import { AiOutlineEdit } from "react-icons/ai";
import { useState } from "react";

const initialHabits = [
  {
    id: "habit-001",
    title: "運動",
    progress: 0,
    totalTime: 2
  },
  {
    id: "habit-002",
    title: "喝水",
    progress: 0,
    totalTime: 10
  }
]

export default function Habit () {
  const [habits, setHabits] = useState(initialHabits)

  const handleClick = (id) => {
    setHabits((prev) =>
      prev.map((habit) => {
        if (habit.id !== id) return habit;
        const newProgress = Math.min(habit.progress + 1, habit.totalTime);

        return {
          ...habit,
          progress: newProgress
        }
      }
      )
    )
  }

  return (
    <div className="h-dvh">
      <div className="flex flex-wrap gap-5 p-8">
        {habits.map((item) => (
          <div 
            key={item.id} 
            className={`relative w-40 h-40 p-3 border  rounded-xl cursor-pointer transition-colors duration-200
              ${
                item.progress === item.totalTime 
                ? "bg-gray-100 text-gray-400 line-through" 
                : "border-secondary hover:bg-cyan-50"
              }  
            `}
          >
            <AiOutlineEdit className="absolute top-2 right-3 text-base-content" size={20} />

            <div 
              className="flex flex-col justify-center items-center h-full" 
              onClick={() => handleClick(item.id)}>
              <p className="my-3 pt-3 text-center">{item.title}</p>
              <p className="text-sm text-center">今天：{item.progress} / {item.totalTime}</p>

              {/* 進度條 */}
              <div className="w-full h-2 mt-3 bg-success-content rounded-full ">
                <div 
                  className="h-full rounded-full"
                  style={{
                    width: `${(item.progress/item.totalTime) * 100}%`,
                    backgroundColor:
                      item.progress === item.totalTime ? "var(--color-success)" : "var(--color-accent)"
                  }}  
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>    
    </div>
  )
}