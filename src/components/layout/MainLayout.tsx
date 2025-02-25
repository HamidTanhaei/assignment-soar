import { type ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: LayoutProps) {
  return (
    <main className="min-h-screen container mx-auto">
      {children}
    </main>
  )
}
