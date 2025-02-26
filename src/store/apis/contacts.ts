import { api } from '../api';
import { ApiUrl } from './apis.const';

export interface Contact {
  id: string;
  name: string;
  role: string;
  image: string;
}

export const contactsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getContacts: builder.query<Contact[], void>({
      query: () => ApiUrl.contacts,
      providesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
} = contactsApi; 