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
            <div>
                <div className="flex gap-2 md:gap-12 border-b mb-8">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`pb-2 font-medium text-sm px-2 relative ${
                                activeTab !== tab.id  && 'text-indigo-400'
                            }`}
                        >
                            {tab.label}
                            {activeTab === tab.id && (
                                <div className="absolute left-0 bottom-0 h-[3px] w-full bg-zinc-700 rounded-t-lg transition-opacity
                                opacity-100" />
                            )}
                        </button>
                    ))}
                </div>
                <div className="max-w-4xl">
                {activeTab === 'profile' && <ProfileTab />}
                {activeTab === 'preferences' && <PreferencesTab />}
                {activeTab === 'security' && <SecurityTab />}
                </div>
            </div>
        </Card>
    );
}