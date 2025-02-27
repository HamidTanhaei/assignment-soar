import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    credentials: 'include',
  }),
  tagTypes: [
    'Card',
    'Transaction',
    'TransactionStatsWeekly',
    'TransactionStatsExpenses',
    'TransactionStatsBalanceHistory',
    'Contacts',
  ],
  endpoints: () => ({}),
});
