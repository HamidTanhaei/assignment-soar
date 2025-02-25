import { Card } from '@/components/ui/card';
import { IconCardMulti } from './ui/Icon/IconCardMulti';
import { IconPaypal } from './ui/Icon/IconPaypal';
import { IconCoin } from './ui/Icon/IconCoin';

type Transaction = {
  id: string;
  title: string;
  date: string;
  amount: number;
  type: 'card' | 'paypal' | 'money';
};

const transactions: Transaction[] = [
  {
    id: '1',
    title: 'Deposit from my Card',
    date: '28 January 2021',
    amount: -850,
    type: 'card',
  },
  {
    id: '2',
    title: 'Deposit Paypal',
    date: '25 January 2021',
    amount: 2500,
    type: 'paypal',
  },
  {
    id: '3',
    title: 'Jemi Wilson',
    date: '21 January 2021',
    amount: 5400,
    type: 'money',
  },
];

const icons = {
  card: <IconCardMulti className="w-6 h-6 text-amber-400" />,
  paypal: <IconPaypal className="w-6 h-6 text-blue-500" />,
  money: <IconCoin className="w-6 h-6 text-emerald-400" />,
};

const backgroundColors = {
  card: 'bg-amber-50',
  paypal: 'bg-blue-50',
  money: 'bg-emerald-50',
};

function TransactionItem({ transaction }: { transaction: Transaction }) {
  const { title, date, amount, type } = transaction;
  
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className={`p-4 ${backgroundColors[type]} rounded-full`}>
          {icons[type]}
        </div>
        <div>
          <h3 className="font-medium text-zinc-700">{title}</h3>
          <p className="text-sm text-slate-400">{date}</p>
        </div>
      </div>
      <span className={amount < 0 ? 'text-red-500' : 'text-emerald-400'}>
        {amount < 0 ? '-' : '+'}${Math.abs(amount).toLocaleString()}
      </span>
    </div>
  );
}

interface RecentTransactionsProps {
  className?: string;
}

export function RecentTransactions({ className }: RecentTransactionsProps) {
  return (
    <Card className={`p-6 ${className || ''}`}>
      {transactions.map((transaction) => (
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
    </Card>
  );
} 