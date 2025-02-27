import { Link, useLocation } from 'react-router';
import {
  IconHome,
  IconTransaction,
  IconEconomics,
  IconLoan,
  IconServices,
  IconUser,
  IconInvestment,
  IconCreditCard,
  IconSettings,
  IconTask,
} from '../../atom/Icon';
import { browserRoutes } from '@/consts';

const menuItems = [
  { icon: IconHome, label: 'Dashboard', href: browserRoutes.home },
  { icon: IconTransaction, label: 'Transactions' },
  { icon: IconUser, label: 'Accounts' },
  { icon: IconInvestment, label: 'Investments' },
  {
    icon: IconCreditCard,
    label: 'Credit Cards',
    href: browserRoutes['credit-cards'],
  },
  { icon: IconLoan, label: 'Loans' },
  { icon: IconServices, label: 'Services' },
  { icon: IconEconomics, label: 'My Privileges' },
  { icon: IconSettings, label: 'Setting', href: browserRoutes.settings },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className='w-[250px] border-r flex flex-col bg-white min-h-screen'>
      <div className='flex items-center gap-2.5 pl-11 mb-8 px-6 pt-7'>
        <div className='rounded text-white grid place-items-center text-zinc-700'>
          <IconTask width={25} height={33} />
        </div>
        <span className='text-xl font-bold text-blue-900'>Soar Task</span>
      </div>

      <nav className='flex-1'>
        <ul className='space-y-4'>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  to={item.href || '#'}
                  className={`flex items-center gap-6 pl-11 pr-3 py-2 rounded-lg relative
                    ${isActive ? 'text-zinc-700' : 'text-gray-400'}
                    hover:text-zinc-700 hover:bg-gray-100
                    group`}
                >
                  <div
                    className={`absolute left-0 top-0 w-1 h-full bg-zinc-700 rounded-r-lg transition-opacity
                    ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                  />
                  <Icon className='w-5 h-5' />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
