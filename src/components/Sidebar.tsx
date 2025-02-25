import { Home, Receipt, Users, LineChart, CreditCard, Wallet, Settings, Power } from "lucide-react"
import { Button } from "./ui/button"

export function Sidebar() {
  const menuItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: Receipt, label: "Transactions" },
    { icon: Users, label: "Accounts" },
    { icon: LineChart, label: "Investments" },
    { icon: CreditCard, label: "Credit Cards" },
    { icon: Wallet, label: "Loans" },
    { icon: Settings, label: "Services" },
  ]

  return (
    <aside className="w-[250px] border-r p-6">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 rounded bg-primary" />
        <span className="font-semibold text-xl">Soar Task</span>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Button
            key={item.label}
            variant={item.active ? "secondary" : "ghost"}
            className="w-full justify-start"
          >
            <item.icon className="mr-2 h-4 w-4" />
            {item.label}
          </Button>
        ))}
      </nav>

      <Button variant="ghost" className="w-full justify-start mt-auto">
        <Power className="mr-2 h-4 w-4" />
        Logout
      </Button>
    </aside>
  )
} 