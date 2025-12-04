import { useState, useEffect } from "react";
import { useHabits } from "../../context/HabitContext";

export default function HabitForm({ handleCloseEdit, editingHabit }) {
  const [title, setTitle] = useState("");
  const [numberTime, setNumberTime] = useState(1);
  const [frequency, setFrequency] = useState("日");
  const { addHabit, editHabit } = useHabits();

  useEffect(() => {
    if (editingHabit) {
      setTitle(editingHabit.title || "");
      setNumberTime(editingHabit.numberTime || 1);
      setFrequency(editingHabit.frequency || "日")
    }
  }, [editingHabit])

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editingHabit) {
      editHabit( editingHabit.id, title, numberTime,  frequency );
      handleCloseEdit();
    } else {
      addHabit({
        title,
        numberTime,
        frequency,
        progress: 0
      });
      setTitle("");
      setNumberTime(1);
      setFrequency("日");
      handleCloseEdit();
    }

    console.log({ title, numberTime, frequency })
  };

  const handleCancel = () => {
    setTitle("");
    setNumberTime(1);
    setFrequency("日");
    handleCloseEdit();
  };

  const handleNumberTimeChange = (e) => {
    const value = Number(e.target.value);
    setNumberTime(value < 1 ? 1 : value)
  }

  return (
    <div className="h-screen mx-auto px-10">
      <div className="h-full w-[80%] m-auto sm:w-[70%]">
        <h2 className="mb-6 text-xl font-bold text-base-content">編輯習慣</h2>
        <form onSubmit={handleSubmit} className="h-full flex flex-col">
          <div className="grow-6">
            <div className="habit-name mb-6">
              <label htmlFor="title" className="mr-3" >習慣名稱</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-50 p-2 bg-base-200 border border-base-content"
              />
            </div>

            <div className="number-time mb-6">
              <label htmlFor="numberTime" className="mr-3">執行次數</label>
              <input
                type="number"
                id="numberTime"
                value={numberTime}
                onChange={(e) => handleNumberTimeChange(e)}
                min={1}
                className="w-50 p-2 bg-base-200 border border-base-content"
              />
            </div>

            <div className="frequency mb-6">
              <label htmlFor="frequency" className="mr-3">執行頻率</label>
              <select
                name="frequency"
                id="frequency"
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                className="w-50 p-2 bg-base-200 border border-base-content"
              >
                <option value="日">日</option>
                <option value="週">週</option>
                <option value="月">月</option>
              </select>
            </div>
          </div>

          <div className="button-group flex justify-between grow-5">
            <button
              type="button"
              onClick={handleCancel}
              className="w-20 sm:w-30 h-10 bg-base-200 text-base-content border rounded-(--radius-field) cursor-pointer hover:bg-base-content hover:text-base-200"
            >
              取消
            </button>
            <button
              type="submit"
              className="w-20 sm:w-30 h-10 bg-success text-base-200 border rounded-(--radius-field) cursor-pointer hover:bg-success-content hover:text-success"
            >
              儲存
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}