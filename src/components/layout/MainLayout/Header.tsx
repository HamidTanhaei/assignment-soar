import { useState } from 'react'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header>
      <nav className="bg-white border-b border-gray-200 px-4 py-2.5">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex items-center justify-start text-xl font-semibold whitespace-nowrap text-gray-900 text-blue-900">
            Overview
          </div>

          <div className="flex items-center lg:order-2">
            {/* Dark mode toggle */}
            <button 
              type="button"
              className="p-2 text-gray-500 rounded-lg hover:bg-gray-100"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
            </button>

            {/* Stats button */}
            <button 
              type="button"
              className="p-2 ml-1 text-gray-500 rounded-lg hover:bg-gray-100"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
              </svg>
            </button>

            {/* Profile dropdown */}
            <button 
              type="button"
              className="flex items-center p-2 ml-1 text-gray-500 rounded-lg hover:bg-gray-100"
            >
              <img 
                className="w-8 h-8 rounded-full" 
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" 
                alt="user photo"
              />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
