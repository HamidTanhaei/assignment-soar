import { useState } from 'react'
import styles from './Header.module.css'
import { IconNotification, IconSearch, IconSettingsOutline } from '@/components/ui/Icon'
export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header>
      <nav className="bg-white border-b border-gray-200 px-10 py-5">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex items-center justify-start text-xl font-semibold whitespace-nowrap text-blue-900 heading-2">
            Overview
          </div>

          <div className="flex gap-6 items-center lg:order-2">
            <div className="px-6 py-4 bg-accent hover:bg-gray-200 cursor-pointer text-slate-400 rounded-full flex items-center gap-4">
              <IconSearch width={19} height={19} />
              <input 
                type="text" 
                placeholder="Search for something" 
                className="border-none outline-none bg-transparent text-sm placeholder:text-slate-400" 
              />
            </div>
            <div 
              className="bg-accent hover:bg-gray-200 cursor-pointer text-slate-400 rounded-full p-3"
            > 
              <IconSettingsOutline width={25} height={25} />
            </div>
            <div 
              className="bg-accent hover:bg-gray-200 cursor-pointer text-blue-700 rounded-full p-3"
            >
              <IconNotification width={25} height={25} />
            </div>

            <img 
                className={styles['user-photo']}
                src="/images/user-photo.png" 
                alt="user photo"
              />

            {/* Mobile menu button */}
            <div
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="ml-1 text-gray-500 lg:hidden"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
