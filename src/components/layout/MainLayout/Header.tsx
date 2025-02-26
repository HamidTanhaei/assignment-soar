import { IconMenu, IconNotification, IconSearch, IconSettingsOutline } from '@/components/ui/Icon'

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header>
      <nav className="bg-white border-b border-gray-200 px-6 md:px-10 py-5">
        <div className="flex flex-wrap justify-between items-center gap-1 md:gap-4">
          <div
              onClick={onMenuClick}
              className="cursor-pointer lg:hidden"
            >
              <IconMenu />
          </div>
          <div className="flex md:flex-1 items-center justify-start text-lg md:text-xl font-semibold whitespace-nowrap text-blue-900">
            Overview
          </div>

          <div className="md:w-auto w-full mt-5 md:mt-0 order-last md:order-none px-5 md:px-6 bg-accent hover:bg-gray-200 cursor-pointer text-slate-400 rounded-full flex items-center gap-3 md:gap-4">
            <IconSearch width={19} height={19} />
            <input 
              type="text" 
              placeholder="Search for something" 
              className="w-full py-3 md:py-4 border-none outline-none bg-transparent text-xs md:text-sm placeholder:text-slate-400" 
            />
          </div>
          <div 
            className="bg-accent hover:bg-gray-200 cursor-pointer text-slate-400 rounded-full p-3 hidden md:block"
          > 
            <IconSettingsOutline width={25} height={25} />
          </div>
          <div 
            className="bg-accent hover:bg-gray-200 cursor-pointer text-blue-700 rounded-full p-3 hidden md:block"
          >
            <IconNotification width={25} height={25} />
          </div>

          <img 
              className={"w-9 h-9 md:w-[60px] md:h-[60px] rounded-full"}
              src="/images/user-photo.png" 
              alt="user photo"
            />
        </div>
      </nav>
    </header>
  )
}
