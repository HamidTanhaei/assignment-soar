import { Transaction } from '@/types/general'

export interface RecentTransactionsProps {
  transactions: Transaction[];
  isLoading?: boolean;
}