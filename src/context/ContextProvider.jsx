import { TaskProvider } from "./TaskContext";
import { HabitProvider } from "./HabitContext";

export default function ContextProvider ({ children }) {
  return (
    <TaskProvider>
      <HabitProvider>
        {children}
      </HabitProvider>
    </TaskProvider>
  )
}