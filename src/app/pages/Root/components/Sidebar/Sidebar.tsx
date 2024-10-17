import { NavLink } from 'react-router-dom'
import { useSidebarComp } from './hooks/useSidebarComp'
import Logo from '@/assets/img/demo-logo.png'

import { BadgeDollarSign, BookText, Presentation } from 'lucide-react'

function Sidebar() {
  const { open, sidebarRef } = useSidebarComp()

  // Array of sidebar items
  const sidebarItems = [
    {
      name: 'Billing Request',
      path: '/billing',
      icon: <BadgeDollarSign />,
    },
    {
      name: 'Reports',
      path: '/reports',
      icon: <BookText />,
    },
    {
      name: 'Session',
      path: '/sessions',
      icon: <Presentation />,
    },
  ]

  return (
    <aside className={`sidebar overflow-hidden ${open ? 'expand' : ''}`} ref={sidebarRef}>
      <div className="logo mb-4 border-b border-gray-100  pt-5 px-3.5 pb-6">
        <NavLink
          className="font-extrabold text-2xl text-nowrap flex items-center gap-3 text-gray-600"
          to={'/'}
        >
          <img src={Logo} alt="demo_logo" className={`w-9 block ml-1 rounded-md`} />
          <span
            className={`transition-opacity duration-1000 ${open ? 'opacity-100' : 'opacity-0'}`}
          >
            {open && 'POS'}
            <em className="text-[8px]  ml-1">V 1.0.0</em>
          </span>
        </NavLink>
      </div>
      <ul className="px-3 space-y-3">
        {sidebarItems.map((item, index) => (
          <li key={index}>
            <NavLink
              className={({ isActive }) =>
                `group grid ${open ? 'grid-cols-[auto,1fr]' : ''} items-center text-[14px] sm:text-base text-gray-600 hover:text-gray-950 font-semibold px-3 py-3 sm:py-3 rounded-lg 
                ${isActive ? 'bg-primary/90 hover:bg-primary hover:text-white text-white' : 'bg-white'} 
                hover:bg-gray-100 transition-all`
              }
              to={item.path}
            >
              <>
                <span className="">{item.icon}</span>
                <span
                  className={`ml-3 text-nowrap transition-opacity duration-1000 ${
                    open ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {open && item.name}
                </span>
              </>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
