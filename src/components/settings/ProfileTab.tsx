import { ProfilePicture } from './ProfilePicture';
import { Input } from './Input';

export function ProfileTab() {
    return (
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-8 lg:ml-8">
            <ProfilePicture 
                onImageChange={(file) => {
                    console.log('File selected:', file);
                }}
            />

            <div className="flex-1">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Input label="Your Name" placeholder="Charlene Reed" />
                    <Input label="User Name" placeholder="Charlene Reed" />
                    <Input label="Email" placeholder="charlenereed@gmail.com" />
                    <Input label="Password" placeholder="**********" type="password" />
                    <Input label="Date of Birth" placeholder="25 January 1990" />
                    <Input label="Present Address" placeholder="San Jose, California, USA" />
                    <Input label="Permanent Address" placeholder="San Jose, California, USA" />
                    <Input label="City" placeholder="San Jose" />
                    <Input label="Postal Code" placeholder="45962" />
                    <Input label="Country" placeholder="USA" />
                </div>

                <div className="flex justify-end mt-6">
                    <button className="w-[190px] py-3 bg-zinc-700 text-white rounded-2xl text-base">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
} 