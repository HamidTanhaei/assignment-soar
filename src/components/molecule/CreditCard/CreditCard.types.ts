export interface CreditCardProps {
  variant: 'dark' | 'light';
  balance: number;
  cardHolder: string;
  cardNumber: string;
  validThru: string;
} 