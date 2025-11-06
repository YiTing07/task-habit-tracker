import { AiFillLeftSquare, AiOutlineUnorderedList, AiOutlineCalendar } from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function Sidebar  ({ isOpen, onCloseSidebar }) {
  return (
    <div className={`fixed top-0 left-0 h-full w-full bg-base-100 ease-in-out duration-200 z-50 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
      <div>
        <div className="flex items-center h-16 m-3 border-b border-gray-200">
          <button onClick={onCloseSidebar}>
            <AiFillLeftSquare className="text-base-content hover:text-primary" size={30} />
          </button>
          <h2 className="ml-3 text-2xl font-bold text-base-content">側邊選單</h2>
        </div>

        <ul className="p-3 ">
          <li 
            className="flex items-center text-xl p-4 rounded-2xl hover:bg-base-content hover:text-base-100"
            onClick={onCloseSidebar}
          >
            <AiOutlineUnorderedList className="mr-3" size={30} />
            <Link to="/">代辦清單</Link>
          </li>
          <li 
            className="flex items-center text-xl p-4 rounded-2xl hover:bg-base-content hover:text-base-100"
            onClick={onCloseSidebar}
          >
            <AiOutlineCalendar className="mr-3" size={30} />
            <Link to="/habit">習慣計畫</Link>
          </li>
        </ul>
      </div>

    </div>
  );
};
