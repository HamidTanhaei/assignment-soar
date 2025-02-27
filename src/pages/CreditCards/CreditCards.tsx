import { CreditCard } from '@/components/molecule/CreditCard/CreditCard.tsx';
import { useGetCardsQuery } from '@/store/apis/cards.ts';

export function CreditCards() {
  const { data: cards, isLoading, error } = useGetCardsQuery();

  if (isLoading) return <div>Loading cards...</div>;
  if (error) return <div>Error loading cards</div>;
  if (!cards || cards.length === 0) return <div>No cards found</div>;

  return (
    <div className='max-w-6xl'>
      <h1 className='text-sm md:text-lg font-semibold text-blue-900 mb-4'>
        My Credit Cards
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 justify-center'>
        {cards.map((card, index) => (
          <CreditCard
            key={card.id}
            variant={index === 0 ? 'dark' : 'light'}
            balance={card.balance}
            cardHolder={card.cardHolder}
            cardNumber={card.cardNumber}
            validThru={card.validThru}
          />
        ))}
      </div>
    </div>
  );
}
