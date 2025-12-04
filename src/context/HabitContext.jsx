import { createContext, useContext, useState, useEffect } from "react";

const HabitContext = createContext();

export const useHabits = () => useContext(HabitContext);

export const HabitProvider = ({children}) => {
  //HabitList
  const [habits, setHabits] = useState([]);

  //初始化時，從 localStorage 載入 habits
  useEffect(() => {
    const saved = localStorage.getItem("habits");
    if (saved) {
      setHabits(JSON.parse(saved))
    }
  }, [])

  //每次 habits 改變時自動存入 localStorage
  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits))
  }, [habits])

  //CRUD 操作
  const addHabit = (habit) => {
    setHabits((prev) =>
      [
        ...prev,
        { ...habit, id: Date.now() }
      ]
    )
  }

  const editHabit = ( id, newTitle, newNumberTime, newFrequency ) => {
    setHabits((prev) =>
      prev.map((habit) =>
        habit.id === id
          ? {
              ...habit,
              title: newTitle ?? habit.title,
              numberTime: newNumberTime ?? habit.numberTime,
              frequency: newFrequency ?? habit.frequency
            }
          : habit
      )
    )
  };

  const deleteHabit = (id) => {
    setHabits((prev) => 
      prev.filter((habit) => habit.id !== id))
  };

  return (
    <HabitContext.Provider value={{habits, setHabits, addHabit, editHabit, deleteHabit}}>
      {children}
    </HabitContext.Provider>
  )  
}