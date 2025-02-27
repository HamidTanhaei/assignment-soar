export interface Transaction {
    id: string;
    title: string;
    date: string;
    amount: number;
    type: 'card' | 'paypal' | 'money';
}

export interface Card {
    id: string;
    cardNumber: string;
    cardHolder: string;
    validThru: string;
    balance: number;
  }