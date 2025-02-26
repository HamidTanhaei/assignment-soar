import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    credentials: 'include',
    baseUrl: 'https://apimocha.com/soar/',
  }),
  tagTypes: [
    'Card',
    'Transaction',
    'TransactionStatsWeekly',
    'TransactionStatsExpenses',
    'TransactionStatsBalanceHistory',
  ],
  endpoints: () => ({})
});
