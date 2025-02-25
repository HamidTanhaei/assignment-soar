import { Button } from "@/components/ui/button"
import { CreditCard } from "./CreditCard/CreditCard"
import { WeeklyActivity } from "./WeeklyActivity"
import { QuickTransfer } from "./QuickTransfer"
import { BalanceHistory } from "./BalanceHistory"
import { ExpenseStatistics } from "./ExpenseStatistics"
import { Link } from "react-router"
import { RecentTransactions } from "./RecentTransactions"

export function Home() {
  return (
    <div className="grid grid-cols-12 gap-6">
          <div className="col-span-8">
            <div className="flex items-center justify-between mb-4 text-blue-900">
              <h2 className="text-lg font-semibold">My Cards</h2>
              <Link to="/credit-cards" className="text-blue-900 hover:underline">
                See All
              </Link>
            </div>
            <div className="flex gap-8">
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

          <div className="col-span-4">
            <h2 className="text-lg font-semibold text-blue-900 mb-4">Recent Transactions</h2>
            <RecentTransactions className="h-[235px] flex flex-col justify-between" />
          </div>

          <div className="col-span-8">
            <h2 className="text-lg font-semibold text-blue-900 mb-4">Weekly Activity</h2>
            <WeeklyActivity />
          </div>

          <div className="col-span-4">
            <h2 className="text-lg font-semibold text-blue-900 mb-4">Expense Statistics</h2>
            <ExpenseStatistics />
          </div>

          <div className="col-span-6">
            <h2 className="text-lg font-semibold text-blue-900 mb-4">Quick Transfer</h2>
            <QuickTransfer />
          </div>

          <div className="col-span-6">
            <h2 className="text-lg font-semibold text-blue-900 mb-4">Balance History</h2>
            <BalanceHistory />
          </div>
        </div>
  )
} 