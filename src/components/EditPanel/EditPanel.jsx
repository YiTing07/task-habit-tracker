import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TaskForm from "./TaskForm";
import HabitForm from "./HabitForm";

const tabs = [
  {
    label: "任務清單",
    component: TaskForm
  },
  {
    label: "習慣計畫",
    component: HabitForm
  }
]

export default function EditPanel({ isOpen, onCloseEdit }) {
  const [activeTab, setActiveTab] = useState(0);
  const ActiveComponent = tabs[activeTab].component

  return (
    <div
      className={`fixed top-0 h-screen w-screen bg-base-100 ease-in-out duration-200 z-10 
      ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="w-full sm:w-[60%] max-w-[900px] mx-auto">
        <div className="flex justify-around m-10 text-2xl font-bold ">
          {tabs.map((tab, index) => {
            return (
              <button
                key={tab.label}
                onClick={() => setActiveTab(index)}
                className={`text-xl transition-colors duration-300 ${index === activeTab ? "text-warning underline underline-offset-8" : "text-success-content"}`}
              >
                {tab.label}
              </button>
            )
          })}


        </div>
        <div className="relative h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={tabs[activeTab].label}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <ActiveComponent handleCloseEdit={onCloseEdit} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

    </div>
  )
}