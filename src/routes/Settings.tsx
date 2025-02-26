import { useState } from 'react';
import { ProfileTab } from '@/components/settings/ProfileTab';
import { PreferencesTab } from '@/components/settings/PreferencesTab';
import { SecurityTab } from '@/components/settings/SecurityTab';
import { Card } from '@/components/ui/card';

export function Settings() {
    const [activeTab, setActiveTab] = useState('profile');

    const tabs = [
        { id: 'profile', label: 'Edit Profile' },
        { id: 'preferences', label: 'Preferences' },
        { id: 'security', label: 'Security' },
    ];

    return (
        <Card className="p-7">
            <div className="max-w-4xl">
                <div className="flex gap-8 border-b mb-8">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`pb-2 ${
                                activeTab === tab.id
                                    ? 'border-b-2 border-black'
                                    : 'text-indigo-400'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {activeTab === 'profile' && <ProfileTab />}
                {activeTab === 'preferences' && <PreferencesTab />}
                {activeTab === 'security' && <SecurityTab />}
            </div>
        </Card>
    );
}