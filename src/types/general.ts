export interface Transaction {
    id: string;
    title: string;
    date: string;
    amount: number;
    type: 'card' | 'paypal' | 'money';
}