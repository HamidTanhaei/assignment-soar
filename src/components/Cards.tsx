import { CreditCard } from '@/components/molecule/CreditCard/CreditCard.tsx';
import { Card } from '@/types';

const Cards = ({ cards, isLoadingCards, cardsError }: { cards: Card[]; isLoadingCards: boolean; cardsError: boolean }) => {
  const displayCards =
    !isLoadingCards && cards
      ? cards
      : Array.from({ length: 3 }, (_, index) => ({
          id: `loading${index + 1}`,
          balance: 0,
          cardHolder: 'Loading...',
          cardNumber: 'Loading...',
          validThru: 'Loading...',
        }));

  return (
    <div className='w-full flex flex-row gap-8 overflow-x-scroll no-scrollbar' role="listbox">
      {cardsError ? (
        <div>Error loading cards</div>
      ) : !cards && !isLoadingCards ? (
        <div>No cards found</div>
      ) : (
        displayCards
          .slice(0, 4)
          .map((card: Card, index: number) => (
            <CreditCard
              key={card.id}
              variant={index === 0 ? 'dark' : 'light'}
              balance={card.balance}
              cardHolder={card.cardHolder}
              cardNumber={card.cardNumber}
              validThru={card.validThru}
            />
          ))
      )}
    </div>
  );
};

export default Cards; 