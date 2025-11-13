import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import EditPanel from "../components/EditPanel/EditPanel";

export default function Layout({children}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  const handleOpenSidebar = () => setSidebarOpen(true)
  const handleCloseSidebar = () => setSidebarOpen(false)
  const handleOpenEdit = () => setEditOpen(true);
  const handleCloseEdit = () => setEditOpen(false);

  return (
    <div className="layout relative">
      <Navbar onOpenSidebar={handleOpenSidebar} onOpenEdit={handleOpenEdit} />
      <div className="main-area">
        <Sidebar isOpen={sidebarOpen} onCloseSidebar={handleCloseSidebar} />
        <EditPanel isOpen={editOpen} onCloseEdit={handleCloseEdit}  />
        <main className="main-content">{children}</main>
      </div>
    </div>
    
  )
}