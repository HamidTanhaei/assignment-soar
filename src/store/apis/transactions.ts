import { api } from '../api';
import { ApiUrl } from './apis.const';
import { Transaction } from '@/components/RecentTransactions';

type Stats = {
  id: string;
  type: "Withdraw" | "Deposit";
  value: number;
  label: "Sat" | "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri";
}[];

type Expenses = {
  type: string;
  value: number;
}[];

export const transactionsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTransactions: builder.query<Transaction[], void>({
      query: () => ApiUrl.transactions,
      providesTags: ['Transaction'],
    }),
    getStatsWeekly: builder.query<Stats, void>({  
      query: () => ApiUrl.statsWeekly,
      providesTags: ['TransactionStatsWeekly'],
    }),
    getStatsExpenses: builder.query<Expenses, void>({  
      query: () => ApiUrl.statsExpenses,
      providesTags: ['TransactionStatsExpenses'],
    }),
  }),
});

export const { 
  useGetTransactionsQuery,
  useGetStatsWeeklyQuery,
  useGetStatsExpensesQuery,
} = transactionsApi;