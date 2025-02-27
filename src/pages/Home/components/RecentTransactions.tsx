import { Card } from '@/components/atom';
import { IconCardMulti, IconPaypal, IconCoin } from '@/components/atom/Icon';

export type Transaction = {
  id: string;
  title: string;
  date: string;
  amount: number;
  type: 'card' | 'paypal' | 'money';
};

const icons = {
  card: <IconCardMulti className='w-6 h-6 text-amber-400' />,
  paypal: <IconPaypal className='w-6 h-6 text-blue-500' />,
  money: <IconCoin className='w-6 h-6 text-emerald-400' />,
};

const backgroundColors = {
  card: 'bg-amber-50',
  paypal: 'bg-blue-50',
  money: 'bg-emerald-50',
};

function TransactionItem({ transaction }: { transaction: Transaction }) {
  const { title, date, amount, type } = transaction;

  return (
    <div className='flex items-center justify-between' role="option" tabIndex={0}>
      <div className='flex items-center gap-4'>
        <div className={`p-4 ${backgroundColors[type]} rounded-full`} aria-label={`${type}`}>
          {icons[type]}
        </div>
        <div>
          <h3 className='font-medium text-zinc-700'>{title}</h3>
          <p className='text-sm text-slate-400'>{date}</p>
        </div>
      </div>
      <span className={amount < 0 ? 'text-red-500' : 'text-emerald-400'} aria-label={`${amount < 0 ? 'Withdrawal' : 'Deposit'} ${Math.abs(amount).toLocaleString()}`}>
        {amount < 0 ? '-' : '+'}${Math.abs(amount).toLocaleString()}
      </span>
    </div>
  );
}

interface RecentTransactionsProps {
  transactions: Transaction[];
  isLoading?: boolean;
}

export function RecentTransactions({
  transactions,
  isLoading,
}: RecentTransactionsProps) {
  return (
    <Card
      disablePadding={true}
      className='h-[214px] md:h-[235px] flex flex-col gap-3 overflow-y-scroll no-scrollbar p-6'
      role="listbox"
    >
      {isLoading ? (
        <div className='flex justify-center items-center h-full'>
          <p>Loading transactions...</p>
        </div>
      ) : !transactions || transactions.length === 0 ? (
        <div className='flex justify-center items-center h-full'>
          <p>No recent transactions</p>
        </div>
      ) : (
        transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))
      )}
    </Card>
  );
}
