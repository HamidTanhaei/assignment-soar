import { Card } from '@/components/atom';
import { IconArrowRight, IconSend } from '@/components/atom/Icon';
import { SearchInput } from '@/components/molecule';
import {useQuickTransfer} from "@/pages/Home/components/QuickTransfer.hook.ts";

export function QuickTransfer() {
  const {form, carousel, data} = useQuickTransfer();

  return (
    <Card className='sm:h-[276px] flex flex-col justify-around'>
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {form.message}
      </div>
      {data.isContactsLoading && (
        <div className='text-center text-indigo-400 text-sm'>
          Loading Contacts...
        </div>
      )}
      <div className='flex items-center'>
        <div className='overflow-hidden'>
          <div
            className='flex mb-6 transition-transform duration-300 ease-in-out'
            style={{ transform: `translateX(-${carousel.currentSlide * 100}%)` }}
            role="listbox"
          >
            {data.contacts.map((contact) => (
              <div
                key={contact.id}
                className='text-center flex-shrink-0 cursor-pointer'
                onClick={() => carousel.toggleContact(contact.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    carousel.toggleContact(contact.id);
                  }
                }}
                style={{ width: `${100 / carousel.contactsPerSlide}%` }}
                role="option"
                aria-selected={carousel.selectedContact === contact.id}
                tabIndex={0}
              >
                <img
                  src={contact.image}
                  alt={contact.name}
                  className='w-[50px] h-[50px] xl:w-[76px] xl:h-[76px] rounded-full mb-2 mx-auto'
                />
                <p
                  className={`text-xs md:text-sm ${carousel.selectedContact === contact.id ? 'font-bold' : ''}`}
                >
                  {contact.name}
                </p>
                <p
                  className={`text-xs xl:text-sm text-indigo-400 ${carousel.selectedContact === contact.id ? 'font-bold' : ''}`}
                >
                  {contact.role}
                </p>
              </div>
            ))}
          </div>
        </div>
        {data.contacts.length > carousel.contactsPerSlide && (
          <button
            onClick={carousel.showNextSlide}
            className='ml-4 shrink-0 rounded-full p-3 xl:p-4 shadow-lg text-indigo-400'
            tabIndex={-1}
          >
            <IconArrowRight className='w-4 h-4' />
          </button>
        )}
      </div>
      <div className='flex gap-4 items-center'>
        {form.showForm ? (
          <>
            <div className='text-xs xl:text-sm text-indigo-400 text-nowrap'>
              Write Amount
            </div>
            <SearchInput
              error={form.message ||form.errors.amount?.message?.toString()}
              inputProps={{placeholder: 'Enter amount you want to send', ...form.register('amount', {
                pattern: {
                  value: /^\d*\.?\d*$/,
                  message: 'Please enter a valid number',
                },
                required: 'Amount is required',
              })}}
              suffixButton={<>Send <IconSend className='w-4 h-4 xl:w-5 xl:h-5' /></>}
              suffixProps={{
                onClick: form.handleSubmit(form.onSubmit),
                'aria-label': `Send ${form.watch('amount') || ''} dollars to ${data.contacts.find(c => c.id === carousel.selectedContact)?.name || ''}`
              }}
            />
          </>
        ) : (
          <div 
            className='w-full text-center text-green-600 font-medium text-xs xl:text-sm'
          >
            {form.message}
          </div>
        )}
      </div>
    </Card>
  );
}
