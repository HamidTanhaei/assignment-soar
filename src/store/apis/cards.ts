import { api } from '../api';
import { ApiUrl } from './apis.const';

export interface Card {
  id: string;
  cardNumber: string;
  cardHolder: string;
  validThru: string;
  balance: number;
}

export const cardsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCards: builder.query<Card[], void>({
      query: () => ApiUrl.cards,
      providesTags: ['Card'],
    }),
  }),
});

export const { useGetCardsQuery } = cardsApi;
