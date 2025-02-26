import { useForm } from 'react-hook-form';
import { ProfilePicture } from './ProfilePicture';
import { Input } from './Input';

interface ProfileFormData {
    name: string;
    username: string;
    email: string;
    password: string;
    dateOfBirth: string;
    presentAddress: string;
    permanentAddress: string;
    city: string;
    postalCode: string;
    country: string;
}

export function ProfileTab() {
    const { 
        register, 
        handleSubmit,
        formState: { errors }
    } = useForm<ProfileFormData>();

    const onSubmit = (data: ProfileFormData) => {
        console.log('Form data:', data);
        // Handle form submission
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col lg:flex-row gap-2 lg:gap-8 lg:ml-8">
            <ProfilePicture 
                onImageChange={(file) => {
                    console.log('File selected:', file);
                }}
            />

            <div className="flex-1">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <Input 
                        label="Your Name" 
                        placeholder="Charlene Reed"
                        error={errors.name?.message}
                        {...register('name', { 
                            required: 'Name is required',
                            minLength: { value: 2, message: 'Name must be at least 2 characters' }
                        })}
                    />
                    <Input 
                        label="User Name" 
                        placeholder="Charlene Reed"
                        error={errors.username?.message}
                        {...register('username', { 
                            required: 'Username is required',
                            pattern: { value: /^[a-zA-Z0-9_]+$/, message: 'Username can only contain letters, numbers and underscore' }
                        })}
                    />
                    <Input 
                        label="Email" 
                        type="email"
                        placeholder="charlenereed@gmail.com"
                        error={errors.email?.message}
                        {...register('email', { 
                            required: 'Email is required',
                            pattern: { 
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: 'Please enter a valid email address'
                            }
                        })}
                    />
                    <Input 
                        label="Password" 
                        type="password"
                        placeholder="**********"
                        error={errors.password?.message}
                        {...register('password', { 
                            minLength: { value: 8, message: 'Password must be at least 8 characters' }
                        })}
                    />
                    <Input 
                        label="Date of Birth"
                        type="date"
                        error={errors.dateOfBirth?.message}
                        {...register('dateOfBirth', { required: 'Date of birth is required' })}
                    />
                    <Input 
                        label="Present Address"
                        placeholder="San Jose, California, USA"
                        error={errors.presentAddress?.message}
                        {...register('presentAddress', { required: 'Present address is required' })}
                    />
                    <Input 
                        label="Permanent Address"
                        placeholder="San Jose, California, USA"
                        error={errors.permanentAddress?.message}
                        {...register('permanentAddress', { required: 'Permanent address is required' })}
                    />
                    <Input 
                        label="City"
                        placeholder="San Jose"
                        error={errors.city?.message}
                        {...register('city', { required: 'City is required' })}
                    />
                    <Input 
                        label="Postal Code"
                        placeholder="45962"
                        error={errors.postalCode?.message}
                        {...register('postalCode', { 
                            required: 'Postal code is required',
                            pattern: { value: /^\d+$/, message: 'Please enter a valid postal code' }
                        })}
                    />
                    <Input 
                        label="Country"
                        placeholder="USA"
                        error={errors.country?.message}
                        {...register('country', { required: 'Country is required' })}
                    />
                </div>

                <div className="flex justify-end mt-6">
                    <button 
                        type="submit"
                        className="w-[190px] py-3 bg-zinc-700 text-white rounded-2xl text-base hover:bg-zinc-600 transition-colors"
                    >
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
} 