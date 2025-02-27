import { useState } from 'react';
import { IconEdit } from '../../../components/atom/Icon';

interface ProfilePictureProps {
  defaultImage?: string;
  onImageChange?: (file: File) => void;
}

export function ProfilePicture({
  defaultImage = '/images/user-photo.png',
  onImageChange,
}: ProfilePictureProps) {
  const [imageUrl, setImageUrl] = useState(defaultImage);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const newImageUrl = URL.createObjectURL(file);
      setImageUrl(newImageUrl);
      onImageChange?.(file);
      return () => URL.revokeObjectURL(newImageUrl);
    }
  };

  return (
    <div className='flex flex-col items-center'>
      <div className='w-24 h-24 rounded-full bg-gray-200 relative mb-4'>
        <img
          className='w-full h-full rounded-full object-cover'
          src={imageUrl}
          alt='Profile'
        />
        <label className='absolute bottom-0 right-0 p-2 rounded-full cursor-pointer bg-black'>
          <input
            type='file'
            className='hidden'
            accept='image/*'
            onChange={handleImageChange}
          />
          <div className='w-4 h-4'>
            <IconEdit className='text-white' />
          </div>
        </label>
      </div>
    </div>
  );
}
