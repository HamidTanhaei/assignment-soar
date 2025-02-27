import { useMemo } from 'react';
import { Link } from 'react-router';

import { CreditCard } from '@/components/molecule/CreditCard/CreditCard.tsx';
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

export function Home() {
  const {
    data: cards,
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

  const displayCards =
    !isLoadingCards && cards
      ? cards
      : [
          {
            id: 'loading1',
            balance: 0,
            cardHolder: 'Loading...',
            cardNumber: 'Loading...',
            validThru: 'Loading...',
          },
          {
            id: 'loading2',
            balance: 0,
            cardHolder: 'Loading...',
            cardNumber: 'Loading...',
            validThru: 'Loading...',
          },
          {
            id: 'loading3',
            balance: 0,
            cardHolder: 'Loading...',
            cardNumber: 'Loading...',
            validThru: 'Loading...',
          },
        ];

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
        <div className='flex items-center justify-between mb-4 text-blue-900'>
          <h2 className='text-sm md:text-lg font-semibold' id="credit-cards">My Cards</h2>
          <Link
            to={browserRoutes['credit-cards']}
            className='text-sm md:text-sm text-blue-900 hover:underline font-semibold'
            aria-label="See all credit cards"
          >
            See All
          </Link>
        </div>
        <div className='w-full flex flex-row gap-8 overflow-x-scroll no-scrollbar' role="listbox">
          {cardsError ? (
            <div>Error loading cards</div>
          ) : !cards && !isLoadingCards ? (
            <div>No cards found</div>
          ) : (
            displayCards
              .slice(0, 4)
              .map((card, index) => (
                <CreditCard
                  key={card.id}
                  variant={index === 0 ? 'dark' : 'light'}
                  balance={card.balance}
                  cardHolder={card.cardHolder}
                  cardNumber={card.cardNumber}
                  validThru={card.validThru}
                />
              ))
          )}
        </div>
      </div>

      <div className='col-span-12 xl:col-span-4' aria-labelledby="recent-transactions">
        <h2 className='text-sm md:text-lg font-semibold text-blue-900 mb-4' id="recent-transactions">
          Recent Transactions
        </h2>
        <RecentTransactions
          transactions={transactions || []}
          isLoading={isLoadingTransactions}
        />
      </div>

      <div className='col-span-12 md:col-span-8' aria-labelledby="weekly-activity">
        <h2 className='text-sm md:text-lg font-semibold text-blue-900 mb-4' id="weekly-activity">
          Weekly Activity
        </h2>
        <WeeklyActivity
          data={weeklyStats || []}
          isLoading={isLoadingWeeklyStats}
        />
      </div>

      <div className='col-span-12 md:col-span-4' aria-labelledby="expense-statistics">
        <h2 className='text-sm md:text-lg font-semibold text-blue-900 mb-4' id="expense-statistics">
          Expense Statistics
        </h2>
        <ExpenseStatistics
          data={formattedExpenseStats}
          isLoading={isLoadingExpenseStats}
        />
      </div>

      <div className='col-span-12 sm:col-span-6 lg:col-span-5' aria-labelledby="quick-transfer">
        <h2 className='text-sm md:text-lg font-semibold text-blue-900 mb-4' id="quick-transfer">
          Quick Transfer
        </h2>
        <QuickTransfer />
      </div>

      <div className='col-span-12 sm:col-span-6 lg:col-span-7' aria-labelledby="balance-history">
        <h2 className='text-sm md:text-lg font-semibold text-blue-900 mb-4' id="balance-history">
          Balance History
        </h2>
        <BalanceHistory
          data={formattedBalanceHistory}
          isLoading={isLoadingBalanceHistory}
        />
      </div>
    </div>
  );
}
