import { useState } from "react";
import { TbCaretLeftFilled, TbCaretRightFilled } from "react-icons/tb";
import { AiOutlinePlusSquare, AiFillFilter } from "react-icons/ai";

const ProgressPage = () => {
  const progress = [
    '點擊 "+"', 
    '選擇【代辦事項】或【習慣計畫】',
    '輸入要做的事情',
    '點擊 "保存"',
    '就可以看到要完成的事項囉！'
  ]

  return (
    <div className="p-1 rounded-2xl text-base-content">
      <h4 className="mb-2 font-extrabold">怎麼操作？</h4>
      <ol className="list-decimal list-inside">
        {progress.map((item, index) => (
          <li key={index} className="pb-1">{item}</li>
        ))}
        
      </ol>
    </div>
  )
  
}

const IconInstructPage = () => (
  <div className="p-1 rounded-2xl text-base-content">
    <h4 className="mb-2 font-extrabold">圖示說明</h4>
    <div>
      <div className="icon-add">
        <div className="flex items-center font-bold">
          <p>新增</p>
          <AiOutlinePlusSquare size={30} className="ml-1 text-warning" />
        </div>
        <p>點擊後，可以新增想要完成的事項，及其他相關設定。</p>
      </div>

      <div className="mt-2">
        <div className="flex items-center font-bold">
          <p>篩選</p>
          <AiFillFilter size={30} className="ml-1 text-warning" />
        </div>
        <p>點擊後，選擇想呈現哪些事項，如已完成、未完成，或全部。</p>
      </div>
    </div>
  </div>
)

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const pages = [<ProgressPage />, <IconInstructPage />]

  const handlePrev = () => {
    setCurrentIndex((prev) => prev === 0 ? pages.length - 1 : prev - 1)
  }
  const handleNext = () => {
    setCurrentIndex((prev) => prev === pages.length - 1 ? 0 : prev + 1)
  }

  return (
    <div className="flex flex-col p-5">
      <div className="h-50">
        {pages[currentIndex]}
      </div>
      

      {/* 控制頁數 */}
      <div className="flex justify-around items-center mt-2">
        <button onClick={handlePrev}>
          <TbCaretLeftFilled size={20} />
        </button>

        <div className="flex justify-evenly w-1/3">
          {pages.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-primary" : "bg-slate-200"}`} />
          ))}
        </div>

        <button onClick={handleNext}>
          <TbCaretRightFilled size={20} />
        </button>
      </div>
    </div>
  )
}