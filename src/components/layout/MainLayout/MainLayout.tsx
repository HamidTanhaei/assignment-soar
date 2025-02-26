import { Header } from "./Header"
import { Sidebar } from "./Sidebar"
import { useState } from "react"

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen container mx-auto bg-slate-100 md:flex relative">
      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 lg:hidden z-20"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar with mobile drawer behavior */}
      <div className={`
        fixed lg:relative
        inset-y-0 left-0
        transform transition-transform duration-300 ease-in-out
        lg:transform-none
        z-30
        flex
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <Sidebar />
      </div>

      <div className="md:flex-1">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="px-6 md:px-10 py-6">
          {children}
        </main>
      </div>
    </div>
  )
}
