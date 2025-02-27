import { api } from '../api';
import { ApiUrl } from './apis.const';
import { Card } from '@/types';

export const cardsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCards: builder.query<Card[], void>({
      query: () => ApiUrl.cards,
      providesTags: ['Card'],
    }),
  }),
});

export const { useGetCardsQuery } = cardsApi;
