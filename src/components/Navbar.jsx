import { useState, useEffect, useRef } from "react";
import { AiOutlineMenu, AiOutlinePlusSquare, AiFillFilter, AiOutlineQuestionCircle } from "react-icons/ai";
import Modal from "./Modal/Modal";
import Filter from "./Filter";

export default function Navbar({ onOpenSidebar, onOpenEdit }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const filterRef = useRef(null);

  const handleOpenModal = () => setIsOpenModal(true);
  const handleCloseModal = () => setIsOpenModal(false);
  const handleToggleFilter = () => setShowFilter(prev => !prev)

  //點擊空白處關閉 Filter
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setShowFilter(false);
      }
    };

    if (showFilter) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [showFilter])

  return (
    <div className="bg-base-100">
      <div className="h-16 flex justify-between items-center px-3 border-b border-base-content">
        <div className="w-1/5 h-full flex items-center">
          <button onClick={onOpenSidebar} >
            <AiOutlineMenu className="text-base-content hover:text-primary" size={25} />
          </button>
        </div>
        
        <div className="w-3/5 flex justify-center">
          <h1 className="text-base-content text-2xl font-bold">TRACKER</h1>
        </div>

        <div className="w-1/5 h-full flex justify-evenly items-center">
          <div className="h-full flex items-center">
            <button onClick={onOpenEdit}>
              <AiOutlinePlusSquare className="text-base-content hover:text-primary" size={25} />
            </button>
            
          </div>

          <div ref={filterRef} className="relative h-full flex items-center">
            <button onClick={handleToggleFilter}>
              <AiFillFilter className="text-base-content hover:text-primary" size={25} />
            </button>
            { showFilter && <Filter onClose={() => setShowFilter(false)} /> }
          </div>
          
          <div className="h-full flex items-center">
            <button onClick={handleOpenModal}>
              <AiOutlineQuestionCircle className="text-base-content hover:text-primary" size={25} />
            </button>
          </div>
          
        </div>
      </div>

      <Modal isOpen={isOpenModal} onClose={handleCloseModal} />
    </div>
  )
}