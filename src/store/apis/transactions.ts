import { api } from '../api';
import { ApiUrl } from './apis.const';
import { Transaction } from '@/components/RecentTransactions';

type Stats = {
  id: string;
  type: "Withdraw" | "Deposit";
  value: number;
  label: "Sat" | "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri";
}[]

export const transactionsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTransactions: builder.query<Transaction[], void>({
      query: () => ApiUrl.transactions,
      providesTags: ['Transaction'],
    }),
    getStatsWeekly: builder.query<Stats, void>({  
      query: () => ApiUrl.stats,
      providesTags: ['TransactionStatsWeekly'],
    }),
  }),
});

export const { 
  useGetTransactionsQuery,
  useGetStatsWeeklyQuery,
} = transactionsApi;