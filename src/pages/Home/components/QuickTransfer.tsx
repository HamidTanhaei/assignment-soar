import { Card } from '../../../components/atom/card.tsx';
import { IconArrowRight, IconSend } from '../../../components/atom/Icon';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useGetContactsQuery } from '@/store/apis/contacts.ts';

export function QuickTransfer() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedContact, setSelectedContact] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      amount: '',
    },
  });

  const { data: contacts = [], isLoading: isContactsLoading } =
    useGetContactsQuery();

  const contactsPerSlide = 3;
  const totalSlides = Math.ceil((contacts?.length || 0) / contactsPerSlide);

  const showNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const onSubmit = (data: { amount: string }) => {
    if (!selectedContact) {
      setMessage('Please select a contact first');
      return;
    }

    setMessage(
      `Successfully sent $${data.amount} to ${contacts.find((contact) => contact.id === selectedContact)?.name}`
    );
    setShowForm(false);
    setSelectedContact(null);
    reset({ amount: '' });

    setTimeout(() => {
      setShowForm(true);
      setMessage(null);
    }, 3000);
  };

  return (
    <Card className='sm:h-[276px] flex flex-col justify-around'>
      {isContactsLoading && (
        <div className='text-center text-indigo-400 text-sm'>
          Loading Contacts...
        </div>
      )}
      <div className='flex items-center'>
        <div className='overflow-hidden'>
          <div
            className='flex mb-6 transition-transform duration-300 ease-in-out'
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className='text-center flex-shrink-0 cursor-pointer'
                onClick={() =>
                  setSelectedContact((prev) =>
                    prev === contact.id ? null : contact.id
                  )
                }
                style={{ width: `${100 / contactsPerSlide}%` }}
              >
                <img
                  src={contact.image}
                  alt={contact.name}
                  className='w-[50px] h-[50px] xl:w-[76px] xl:h-[76px] rounded-full mb-2 mx-auto'
                />
                <p
                  className={`text-xs md:text-md ${selectedContact === contact.id ? 'font-bold' : ''}`}
                >
                  {contact.name}
                </p>
                <p
                  className={`text-xs xl:text-sm text-indigo-400 ${selectedContact === contact.id ? 'font-bold' : ''}`}
                >
                  {contact.role}
                </p>
              </div>
            ))}
          </div>
        </div>
        {contacts.length > contactsPerSlide && (
          <button
            onClick={showNextSlide}
            className='ml-4 shrink-0 rounded-full p-3 xl:p-4 shadow-lg text-indigo-400'
          >
            <IconArrowRight className='w-4 h-4' />
          </button>
        )}
      </div>
      <div className='flex gap-4 items-center'>
        {showForm ? (
          <>
            <div className='text-xs xl:text-sm text-indigo-400 text-nowrap'>
              Write Amount
            </div>
            <div className='md:w-auto w-full order-last md:order-none bg-accent hover:bg-gray-200 cursor-pointer text-slate-400 rounded-full flex items-center gap-2 xl:gap-4 relative'>
              <input
                {...register('amount', {
                  pattern: {
                    value: /^\d*\.?\d*$/,
                    message: 'Please enter a valid number',
                  },
                  required: 'Amount is required',
                })}
                placeholder='Enter amount'
                className='w-full py-2 xl:py-4 px-3 xl:px-6 border-none outline-none bg-transparent text-sm placeholder:text-slate-400'
              />
              {(errors.amount || message) && (
                <span className='text-red-500 text-xs absolute -bottom-5'>
                  {message || errors.amount?.message?.toString()}
                </span>
              )}
              <button
                onClick={handleSubmit(onSubmit)}
                className='flex gap-3 py-2 xl:py-3 px-6 bg-zinc-700 text-white rounded-full text-sm xl:text-md text-meduim hover:bg-zinc-600 transition-colors align-center'
              >
                Send <IconSend className='w-4 h-4 xl:w-5 xl:h-5' />
              </button>
            </div>
          </>
        ) : (
          <div className='w-full text-center text-green-600 font-medium text-xs xl:text-sm'>
            {message}
          </div>
        )}
      </div>
    </Card>
  );
}
