import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Main() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleOpenSidebar = () => setSidebarOpen(true)
  const handleCloseSidebar = () => setSidebarOpen(false)

  return (
    <>
      <Navbar onOpenSidebar={handleOpenSidebar} />
      <Sidebar isOpen={sidebarOpen} onCloseSidebar={handleCloseSidebar} />
    </>
    
  )
}