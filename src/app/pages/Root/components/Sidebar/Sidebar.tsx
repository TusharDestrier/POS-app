import { NavLink } from 'react-router-dom'
import { useSidebarComp } from './hooks/useSidebarComp'
import Logo from '@/assets/img/demo-logo.png'

import useAuth from '@/store/useAuth'
import { roleBasedMenu, RoleBasedMenu, SidebarItem } from './data/roleBasedMenu'

interface User {
  role: 'admin' | 'manager' | 'storeManager' | 'cashier'
}

function Sidebar() {
  const { open, sidebarRef } = useSidebarComp()
  const { user } = useAuth()

  // Role-based sidebar structure

  // Get the menu items based on the user's role
  const sidebarItems: SidebarItem[] =
    roleBasedMenu[user?.role?.toLowerCase() as keyof RoleBasedMenu] || []

  return (
    <aside className={`sidebar overflow-hidden ${open ? 'expand' : ''}`} ref={sidebarRef}>
      <div className="logo mb-4 border-b border-gray-100 pt-5 px-3.5 pb-6">
        <NavLink
          className="font-extrabold text-2xl text-nowrap flex items-center gap-3 text-gray-600"
          to={'/'}
        >
          <img src={Logo} alt="demo_logo" className={`w-9 block ml-1 rounded-md`} />
          <span
            className={`transition-opacity duration-1000 ${open ? 'opacity-100' : 'opacity-0'}`}
          >
            {open && 'POS'}
            <em className="text-[8px] ml-1">V 1.0.0</em>
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
              <span>{item.icon}</span>
              <span
                className={`ml-3 text-nowrap transition-opacity duration-1000 ${
                  open ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {open && item.name}
              </span>
            </NavLink>
            {item.subItems && open && (
              <ul className="ml-12 pl-3 space-y-3 mt-1 border-s border-solid border-gray-100">
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <NavLink
                      className={({ isActive }) =>
                        `block text-sm text-gray-500 hover:text-gray-700 ${
                          isActive ? 'font-semibold text-gray-900' : ''
                        }`
                      }
                      to={subItem.path}
                    >
                      {subItem.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
