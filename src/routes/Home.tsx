import { useMemo } from "react"
import { Link } from "react-router"
import { CreditCard } from "@/components/CreditCard/CreditCard"
import { WeeklyActivity } from "@/components/WeeklyActivity"
import { QuickTransfer } from "@/components/QuickTransfer"
import { BalanceHistory } from "@/components/BalanceHistory"
import { ExpenseStatistics } from "@/components/ExpenseStatistics"
import { RecentTransactions } from "@/components/RecentTransactions"
import { useGetCardsQuery } from "@/store/apis/cards"
import { useGetTransactionsQuery, useGetStatsWeeklyQuery, useGetStatsExpensesQuery, useGetStatsBalanceHistoryQuery } from "@/store/apis/transactions"

export function Home() {
  const { data: cards, isLoading: isLoadingCards, error: cardsError } = useGetCardsQuery();
  const { data: transactions, isLoading: isLoadingTransactions } = useGetTransactionsQuery();
  const { data: weeklyStats, isLoading: isLoadingWeeklyStats } = useGetStatsWeeklyQuery();
  const { data: expenseStats, isLoading: isLoadingExpenseStats } = useGetStatsExpensesQuery();
  const { data: balanceHistory, isLoading: isLoadingBalanceHistory } = useGetStatsBalanceHistoryQuery();
  
  const displayCards = !isLoadingCards && cards ? cards : [
    { id: 'loading1', balance: 0, cardHolder: 'Loading...', cardNumber: 'Loading...', validThru: 'Loading...' },
    { id: 'loading2', balance: 0, cardHolder: 'Loading...', cardNumber: 'Loading...', validThru: 'Loading...' }
  ];
  
  const formattedExpenseStats = expenseStats ? expenseStats.map(item => ({
    category: item.type,
    amount: item.value
  })) : [];

  // Transform the balance history data to match the expected format
  const formattedBalanceHistory = useMemo(() => {
    if (!balanceHistory) return [];
    
    return balanceHistory.map(item => ({
      month: item.month,
      balance: item.value
    }));
  }, [balanceHistory]);

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

          <div className="col-span-5">
            <h2 className="text-lg font-semibold text-blue-900 mb-4">Quick Transfer</h2>
            <QuickTransfer />
          </div>

          <div className="col-span-7">
            <h2 className="text-lg font-semibold text-blue-900 mb-4">Balance History</h2>
            <BalanceHistory 
              data={formattedBalanceHistory}
              isLoading={isLoadingBalanceHistory}
            />
          </div>
        </div>
  )
} 