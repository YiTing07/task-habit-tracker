import { AiOutlineClose } from "react-icons/ai";
import Carousel from "./Carousel";

export default function Modal ({isOpen, onClose}) {
  if(!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50" >
      <div onClick={handleBackdropClick} className="absolute inset-0 bg-base-300 opacity-20"></div>

      {/* Modal 本身 */}
      <div className="w-80 rounded-2xl bg-base-100 border border-base-300 z-60" >
        <div className="flex items-center p-2 border-b-1 border-dotted border-base-300 rounded-t-2xl">
          <h3 className="w-full text-center text-base-content font-bold">操作小提示</h3>
          <button onClick={onClose}>
            <AiOutlineClose className="mx-1 text-base-content hover:text-primary"/>
          </button>
        </div>
        
        <Carousel />
      </div>

    </div>
  )
}