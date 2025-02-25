import { Header } from "./Header"
import { Sidebar } from "./Sidebar"

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen container mx-auto bg-slate-100 flex">
      <Sidebar />
      <div className="flex-1">
          <Header />
          <main>
          {children}
          </main>
      </div>
    </div>
  )
}
