import { AiOutlineMenu, AiOutlinePlusSquare, AiFillFilter, AiOutlineQuestionCircle } from "react-icons/ai";


export default function Navbar() {
  

  return (
    <div className="bg-base-100">
      <div className="h-16 flex justify-between items-center px-3 border-b border-base-content">
        <div className="w-1/5 h-full flex items-center">
          <button>
            <AiOutlineMenu className="text-base-content hover:text-primary" size={25} />
          </button>
        </div>
        
        <div className="w-3/5 flex justify-center">
          <h1 className="text-base-content text-2xl font-bold">TRACKER</h1>
        </div>

        <div className="w-1/5 h-full flex justify-evenly items-center">
          <div className="h-full flex items-center">
            <button>
              <AiOutlinePlusSquare className="text-base-content hover:text-primary" size={25} />
            </button>
          </div>

          <div className="relative h-full flex items-center">
            <button>
              <AiFillFilter className="text-base-content hover:text-primary" size={25} />
            </button>
            
          </div>
          
          <div className="h-full flex items-center">
            <button>
              <AiOutlineQuestionCircle className="text-base-content hover:text-primary" size={25} />
            </button>
          </div>
          
        </div>
      </div>

    
    </div>
  )
}