import { useMemo } from 'react';
import { Link } from 'react-router';

import {
  WeeklyActivity,
  QuickTransfer,
  BalanceHistory,
  ExpenseStatistics,
  RecentTransactions,
} from './components';
import {
  useGetTransactionsQuery,
  useGetStatsWeeklyQuery,
  useGetStatsExpensesQuery,
  useGetStatsBalanceHistoryQuery,
} from '@/store/apis/transactions.ts';
import { useGetCardsQuery } from '@/store/apis/cards.ts';
import { browserRoutes } from '@/consts';
import Cards from '@/components/Cards';

const Header = ({title, id}: {title: string, id: string}) => {
  return (
    <h2 className='text-sm md:text-[22px] font-semibold text-blue-900 mb-4' id={id}>{title}</h2>
  );
};

export function Home() {
  const {
    data: cards = [],
    isLoading: isLoadingCards,
    error: cardsError,
  } = useGetCardsQuery();
  const { data: transactions, isLoading: isLoadingTransactions } =
    useGetTransactionsQuery();
  const { data: weeklyStats, isLoading: isLoadingWeeklyStats } =
    useGetStatsWeeklyQuery();
  const { data: expenseStats, isLoading: isLoadingExpenseStats } =
    useGetStatsExpensesQuery();
  const { data: balanceHistory, isLoading: isLoadingBalanceHistory } =
    useGetStatsBalanceHistoryQuery();

  const formattedExpenseStats = expenseStats
    ? expenseStats.map((item) => ({
        category: item.type,
        amount: item.value,
      }))
    : [];

  // Transform the balance history data to match the expected format
  const formattedBalanceHistory = useMemo(() => {
    if (!balanceHistory) return [];

    return balanceHistory.map((item) => ({
      month: item.month,
      balance: item.value,
    }));
  }, [balanceHistory]);

  return (
    <div className='grid grid-cols-12 gap-6'>
      <div className='col-span-12 xl:col-span-8' role="group" aria-labelledby="credit-cards">
        <div className='flex items-center justify-between text-blue-900'>
          <Header title="My Cards" id="credit-cards" />
          <Link
            to={browserRoutes['credit-cards']}
            className='text-sm md:text-[17px] text-blue-900 hover:underline font-semibold'
            aria-label="See all credit cards"
          >
            See All
          </Link>
        </div>
        <Cards cards={cards} isLoadingCards={isLoadingCards} cardsError={!!cardsError} />
      </div>

      <div className='col-span-12 xl:col-span-4' aria-labelledby="recent-transactions">
        <Header title="Recent Transactions" id="recent-transactions" />
        <RecentTransactions
          transactions={transactions || []}
          isLoading={isLoadingTransactions}
        />
      </div>

      <div className='col-span-12 md:col-span-8' aria-labelledby="weekly-activity">
        <Header title="Weekly Activity" id="weekly-activity" />
        <WeeklyActivity
          data={weeklyStats || []}
          isLoading={isLoadingWeeklyStats}
        />
      </div>

      <div className='col-span-12 md:col-span-4' aria-labelledby="expense-statistics">
        <Header title="Expense Statistics" id="expense-statistics" />
        <ExpenseStatistics
          data={formattedExpenseStats}
          isLoading={isLoadingExpenseStats}
        />
      </div>

      <div className='col-span-12 sm:col-span-6 lg:col-span-5' aria-labelledby="quick-transfer">
        <Header title="Quick Transfer" id="quick-transfer" />
        <QuickTransfer />
      </div>

      <div className='col-span-12 sm:col-span-6 lg:col-span-7' aria-labelledby="balance-history">
        <Header title="Balance History" id="balance-history" />
        <BalanceHistory
          data={formattedBalanceHistory}
          isLoading={isLoadingBalanceHistory}
        />
      </div>
    </div>
  );
}
