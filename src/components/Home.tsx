import { Button } from "@/components/ui/button"
import { CreditCard } from "./CreditCard"
import { WeeklyActivity } from "./WeeklyActivity"
import { QuickTransfer } from "./QuickTransfer"
import { BalanceHistory } from "./BalanceHistory"
import { ExpenseStatistics } from "./ExpenseStatistics"

export function Home() {
  return (
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
  )
} 