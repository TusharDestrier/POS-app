import { ImageOff } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import { roleBasedMenu, RoleBasedMenu, SidebarItem, SubItem } from './data/roleBasedMenu'
import { useSidebarComp } from './hooks/useSidebarComp'

import useImageUploaderState from '@/components/ImageUploader/store/useImageUploader'
import {useAuth} from '@/store/useAuth'


// interface User {
//   role: 'admin' | 'manager' | 'storemanager' | 'cashier'
// }

function SidebarItemComponent({
  item,
  globalOpen,
}: {
  item: SidebarItem | SubItem
  globalOpen: boolean
}) {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()

  // Automatically open items if the path matches any sub-item paths
  useEffect(() => {
    if (item.subItems) {
      const isPathActive = item.subItems.some((subItem) => pathname.startsWith(subItem.path))
      setIsOpen(isPathActive)
    }
  }, [pathname, item.subItems])

  const handleToggle = () => {
    setIsOpen((prev) => !prev)
  }

  const isActive = item.path && pathname.startsWith(item.path)

  return (
    <li>
      {item.subItems ? (
        <button
          className={`group  flex items-center text-base text-gray-600 hover:text-gray-950 font-semibold px-3 py-2 sm:py-3 rounded-lg w-full text-left
            ${
              isOpen || isActive
                ? 'bg-primary/90 hover:bg-primary a_active hover:text-white text-white'
                : 'bg-white'
            }
            hover:bg-gray-100 transition-all`}
          onClick={handleToggle}
          aria-expanded={isOpen}
        >
          {'icon' in item && <span>{item.icon}</span>}
          <span
            className={`ml-3 transition-opacity leading-[20px] duration-1000 ${
              globalOpen ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {globalOpen && item.name}
          </span>
        </button>
      ) : (
        <NavLink
          className={({ isActive }) =>
            `group flex items-center text-[14px] sm:text-base text-gray-600 hover:text-gray-950 font-semibold px-3 py-3 sm:py-3 rounded-lg 
            ${
              isActive || isActive
                ? 'bg-primary/90 hover:bg-primary  a_active hover:text-gray-600 text-gray-600'
                : 'bg-white'
            } 
            hover:bg-gray-100 transition-all`
          }
          to={item.path}
          end
        >
          {'icon' in item && <span>{item.icon}</span>}

          <span
            className={`ml-3 transition-opacity leading-[20px] duration-1000 ${
              globalOpen ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {globalOpen && item.name}
          </span>
        </NavLink>
      )}

      {item.subItems && isOpen && (
        <ul className="ml-4 pl-3 space-y-2 mt-1 border-l border-solid border-gray-100">
          {item.subItems.map((subItem, index) => (
            <SidebarItemComponent key={index} item={subItem} globalOpen={globalOpen} />
          ))}
        </ul>
      )}
    </li>
  )
}

function Sidebar() {
  const { open: globalOpen, sidebarRef } = useSidebarComp()
  const { user } = useAuth()
  const image = useImageUploaderState(state=>state.image);


  const sidebarItems: SidebarItem[] =
    roleBasedMenu[user?.role?.toLowerCase() as keyof RoleBasedMenu] || []

  return (
    <aside className={`sidebar relative z-50 overflow-y-scroll ${globalOpen ? 'expand' : ''}`} ref={sidebarRef}>
      <div className="logo mb-4 border-b border-gray-100 pt-5 px-3.5 pb-6">
        <NavLink
          className="font-extrabold text-2xl text-nowrap flex items-center gap-3 text-gray-600"
          to="/"
        >
          {image ? <img
          src={image}
          alt="Uploaded Preview"
          style={{
            width: "50px",
            height: "50px",
            objectFit: "cover",
            borderRadius: "10px",
            border: "2px solid #ccc",
          }}
        />: <ImageOff size={40} />}
          <span
            className={`transition-opacity duration-1000 ${globalOpen ? 'opacity-100' : 'opacity-0'}`}
          >
            {globalOpen && 'POS'}
            <em className="text-[8px] ml-1">V 1.0.0</em>
          </span>
        </NavLink>
      </div>
      <ul className="px-3 space-y-3">
        {sidebarItems.map((item, index) => (
          <SidebarItemComponent key={index} item={item} globalOpen={globalOpen} />
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar

