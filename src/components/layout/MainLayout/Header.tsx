import {
  IconMenu,
  IconNotification,
  IconSearch,
  IconSettingsOutline,
} from '../../atom/Icon';
import { SearchInput } from '../../molecule';

interface HeaderProps {
  onMenuClick: () => void;
}

const IconButton = ({ icon: Icon, className }: { icon: React.ComponentType<{ width: number; height: number }>; className: string }) => (
  <div className={`bg-slate-100 hover:bg-gray-200 cursor-pointer rounded-full p-2 lg:p-3 hidden md:block ${className}`}>
    <Icon width={25} height={25} />
  </div>
);

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header>
      <nav className='bg-white border-b border-gray-200 px-6 md:px-10 py-5'>
        <div className='flex flex-wrap justify-between items-center gap-1 md:gap-4'>
          <div onClick={onMenuClick} className='cursor-pointer lg:hidden'>
            <IconMenu />
          </div>
          <div className='flex md:flex-1 items-center justify-start text-lg md:text-xl font-semibold whitespace-nowrap text-blue-900'>
            Overview
          </div>
          <SearchInput
            className='mt-5 sm:mt-0'
            prefix={<IconSearch width={19} height={19} />}
            inputProps={{
              placeholder: 'Search for something',
            }}
          />
          <IconButton icon={IconSettingsOutline} className='text-slate-400' />
          <IconButton icon={IconNotification} className='text-blue-700' />

          <img
            className={'w-10 h-10 lg:w-[60px] lg:h-[60px] rounded-full'}
            src='/images/user-photo.png'
            alt='user photo'
          />
        </div>
      </nav>
    </header>
  );
}
