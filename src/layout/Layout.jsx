import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Layout({children}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleOpenSidebar = () => setSidebarOpen(true)
  const handleCloseSidebar = () => setSidebarOpen(false)

  return (
    <div className="layout">
      <Navbar onOpenSidebar={handleOpenSidebar} />
      <div className="main-area">
        <Sidebar isOpen={sidebarOpen} onCloseSidebar={handleCloseSidebar} />
        <main className="main-content">{children}</main>
      </div>
    </div>
    
  )
}