import { api } from '../api';
import { ApiUrl } from './apis.const';
import { Transaction } from '@/components/RecentTransactions';

export const transactionsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTransactions: builder.query<Transaction[], void>({
      query: () => ApiUrl.transactions,
      providesTags: ['Transaction'],
    }),
  }),
});

export const { 
  useGetTransactionsQuery,
} = transactionsApi;