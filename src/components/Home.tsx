import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Settings, Bell } from "lucide-react"
import { Sidebar } from "./Sidebar"
import { CreditCard } from "./CreditCard"
import { WeeklyActivity } from "./WeeklyActivity"
import { QuickTransfer } from "./QuickTransfer"
import { BalanceHistory } from "./BalanceHistory"
import { ExpenseStatistics } from "./ExpenseStatistics"

export function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold">Overview</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                className="pl-10 w-[300px] bg-white" 
                placeholder="Search for something" 
              />
            </div>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <img 
              src="https://placekitten.com/40/40" 
              alt="Profile" 
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">My Cards</h2>
              <Button variant="link">See All</Button>
            </div>
            <div className="flex gap-4">
              <CreditCard 
                variant="dark"
                balance={5756}
                cardHolder="Eddy Cusuma"
                cardNumber="3778 **** **** 1234"
                validThru="12/22"
              />
              <CreditCard 
                variant="light"
                balance={5756}
                cardHolder="Eddy Cusuma"
                cardNumber="3778 **** **** 1234"
                validThru="12/22"
              />
            </div>
          </div>

          <div className="col-span-8">
            <WeeklyActivity />
          </div>

          <div className="col-span-4">
            <ExpenseStatistics />
          </div>

          <div className="col-span-6">
            <QuickTransfer />
          </div>

          <div className="col-span-6">
            <BalanceHistory />
          </div>
        </div>
      </main>
    </div>
  )
} 