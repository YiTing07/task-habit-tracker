

export default function HabitForm() {
  return (
    <div className="h-screen mx-auto px-10">
      <div className="h-full w-[80%] m-auto sm:w-[70%]">
        <h2 className="mb-6 text-xl font-bold text-base-content">編輯習慣</h2>
        <form className="h-full flex flex-col">
          <div className="grow-6">
            <div className="task-name mb-6">
              <label htmlFor="" className="mr-3" >習慣名稱</label>
              <input type="text" className="w-50 p-2 bg-base-200 border border-base-content" />
            </div>

            <div className="due-date mb-6">
              <label htmlFor="" className="mr-3">每日次數</label>
              <input type="number" className="w-50 p-2 bg-base-200 border border-base-content" />
            </div>

            <div className="priority mb-6">
              <label htmlFor="" className="mr-3">執行頻率</label>
              <select name="" id="" className="w-50 p-2 bg-base-200 border border-base-content">
                <option value="low">日</option>
                <option value="middle">週</option>
                <option value="high">月</option>
              </select>
            </div>
          </div>
          
          <div className="button-group flex justify-between grow-5">
            <button type="submit" className="w-20 sm:w-30 h-10 bg-base-200 text-base-content border rounded-(--radius-field) cursor-pointer hover:bg-base-content hover:text-base-200" >
              取消
            </button>
            <button type="submit" className="w-20 sm:w-30 h-10 bg-success text-base-200 border rounded-(--radius-field) cursor-pointer hover:bg-success-content hover:text-success" >
              儲存
            </button>
          </div>
          
        </form>
      </div>
    </div>
  )
}