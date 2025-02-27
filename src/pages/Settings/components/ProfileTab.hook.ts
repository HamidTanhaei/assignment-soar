import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ProfileFormData, ProfileFormKeys } from './ProfileTab.types';

export function useProfileTab() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ProfileFormData>();

  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const storedData = localStorage.getItem('profileData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      Object.keys(parsedData).forEach((key) => {
        if (parsedData[key]) {
          setValue(key as ProfileFormKeys, parsedData[key]);
        }
      });
    }
  }, [setValue]);

  const onSubmit = (data: ProfileFormData) => {
    console.log('Form data:', data);
    localStorage.setItem('profileData', JSON.stringify(data));
    setSuccessMessage('Profile saved successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return { register, handleSubmit, errors, successMessage, onSubmit };
} 