import { CreditCard } from "@/components/CreditCard/CreditCard"
import { WeeklyActivity } from "@/components/WeeklyActivity"
import { QuickTransfer } from "@/components/QuickTransfer"
import { BalanceHistory } from "@/components/BalanceHistory"
import { ExpenseStatistics } from "@/components/ExpenseStatistics"
import { Link } from "react-router"
import { RecentTransactions } from "@/components/RecentTransactions"
import { useGetCardsQuery } from "@/store/apis/cards"
import { useGetTransactionsQuery, useGetStatsWeeklyQuery, useGetStatsExpensesQuery } from "@/store/apis/transactions"
import { useMemo } from "react"

export function Home() {
  const { data: cards, isLoading: isLoadingCards, error: cardsError } = useGetCardsQuery();
  const { data: transactions, isLoading: isLoadingTransactions } = useGetTransactionsQuery();
  const { data: weeklyStats, isLoading: isLoadingWeeklyStats } = useGetStatsWeeklyQuery();
  const { data: expenseStats, isLoading: isLoadingExpenseStats } = useGetStatsExpensesQuery();
  
  const displayCards = !isLoadingCards && cards ? cards : [
    { id: 'loading1', balance: 0, cardHolder: 'Loading...', cardNumber: 'Loading...', validThru: 'Loading...' },
    { id: 'loading2', balance: 0, cardHolder: 'Loading...', cardNumber: 'Loading...', validThru: 'Loading...' }
  ];
  
  const formattedExpenseStats = expenseStats ? expenseStats.map(item => ({
    category: item.type,
    amount: item.value
  })) : [];

  // Calculate balance history data from weekly stats
  const balanceHistoryData = useMemo((): Array<{ date: string; balance: number }> => {
    if (!weeklyStats || weeklyStats.length === 0) return [];
    
    let cumulativeBalance = 0;
    
    // Group transactions by date and calculate net change
    const balanceByDate = weeklyStats.reduce((acc: Record<string, number>, transaction) => {
      const { label, type, value } = transaction;
      
      if (!acc[label]) {
        acc[label] = 0;
      }
      
      // Add to balance if deposit, subtract if withdraw
      if (type === "Deposit") {
        acc[label] += value;
      } else if (type === "Withdraw") {
        acc[label] -= value;
      }
      
      return acc;
    }, {});
    
    // Convert to array format needed for chart
    return Object.entries(balanceByDate).map(([date, change]) => {
      cumulativeBalance += change;
      return {
        date,
        balance: cumulativeBalance
      };
    });
  }, [weeklyStats]);

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
              {cardsError ? (
                <div>Error loading cards</div>
              ) : !cards && !isLoadingCards ? (
                <div>No cards found</div>
              ) : (
                displayCards.slice(0, 2).map((card, index) => (
                  <CreditCard 
                    key={card.id}
                    variant={index === 0 ? "dark" : "light"}
                    balance={card.balance}
                    cardHolder={card.cardHolder}
                    cardNumber={card.cardNumber}
                    validThru={card.validThru}
                  />
                ))
              )}
            </div>
          </div>

          <div className="col-span-4">
            <h2 className="text-lg font-semibold text-blue-900 mb-4">Recent Transactions</h2>
            <RecentTransactions 
              className="h-[235px] flex flex-col gap-3 overflow-y-scroll no-scrollbar" 
              transactions={transactions || []}
              isLoading={isLoadingTransactions}
            />
          </div>

          <div className="col-span-8">
            <h2 className="text-lg font-semibold text-blue-900 mb-4">Weekly Activity</h2>
            <WeeklyActivity 
              data={weeklyStats || []} 
              isLoading={isLoadingWeeklyStats}
            />
          </div>

          <div className="col-span-4">
            <h2 className="text-lg font-semibold text-blue-900 mb-4">Expense Statistics</h2>
            <ExpenseStatistics 
              data={formattedExpenseStats}
              isLoading={isLoadingExpenseStats}
            />
          </div>

          <div className="col-span-6">
            <h2 className="text-lg font-semibold text-blue-900 mb-4">Quick Transfer</h2>
            <QuickTransfer />
          </div>

          <div className="col-span-6">
            <h2 className="text-lg font-semibold text-blue-900 mb-4">Balance History</h2>
            <BalanceHistory 
              data={balanceHistoryData}
              isLoading={isLoadingWeeklyStats}
            />
          </div>
        </div>
  )
} 