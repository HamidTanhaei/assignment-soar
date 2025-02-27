import { api } from '../api';
import { ApiUrl } from './apis.const';
import { Transaction } from '@/pages/Home/components/RecentTransactions.tsx';

type WeeklyStats = {
  id: string;
  type: "Withdraw" | "Deposit";
  value: number;
  label: "Sat" | "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri";
}[];

type ExpensesStats = {
  type: string;
  value: number;
}[];

type MonthlyBalanceStats = {
  month: string;
  value: number;
}[];

export const transactionsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTransactions: builder.query<Transaction[], void>({
      query: () => ApiUrl.transactions,
      providesTags: ['Transaction'],
    }),
    getStatsWeekly: builder.query<WeeklyStats, void>({  
      query: () => ApiUrl.statsWeekly,
      providesTags: ['TransactionStatsWeekly'],
    }),
    getStatsExpenses: builder.query<ExpensesStats, void>({  
      query: () => ApiUrl.statsExpenses,
      providesTags: ['TransactionStatsExpenses'],
    }),
    getStatsBalanceHistory: builder.query<MonthlyBalanceStats, void>({  
      query: () => ApiUrl.statsBalanceHistory,
      providesTags: ['TransactionStatsBalanceHistory'],
    }),
  }),
});

export const { 
  useGetTransactionsQuery,
  useGetStatsWeeklyQuery,
  useGetStatsExpensesQuery,
  useGetStatsBalanceHistoryQuery,
} = transactionsApi;