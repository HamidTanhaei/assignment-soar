import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useGetContactsQuery } from '@/store/apis/contacts.ts';

export const useQuickTransfer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedContact, setSelectedContact] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    defaultValues: {
      amount: '',
    },
  });

  const { data: contacts = [], isLoading: isContactsLoading } = useGetContactsQuery();

  const contactsPerSlide = 3;
  const totalSlides = Math.ceil((contacts?.length || 0) / contactsPerSlide);

  const showNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const toggleContact = (contactId: string) => {
    setSelectedContact((prev) => (prev === contactId ? null : contactId));
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
    }, 3500);
  };

  return {
    // Form-related values
    form: {
      register,
      handleSubmit,
      errors,
      reset,
      watch,
      onSubmit,
      showForm,
      message,
    },
    // Carousel-related values
    carousel: {
      currentSlide,
      showNextSlide,
      toggleContact,
      selectedContact,
      contactsPerSlide,
    },
    // Data-related values
    data: {
      isContactsLoading,
      contacts,
    },
  };
}; 