import { BadgeDollarSign, BookText, Presentation, Settings, Shield, FileText } from 'lucide-react'
import { ReactNode } from 'react'

export interface SidebarItem {
  name: string
  path: string
  icon: ReactNode
  subItems?: {
    name: string
    path: string
  }[]
}

export interface RoleBasedMenu {
  admin: SidebarItem[]
  manager: SidebarItem[]
  storemanager: SidebarItem[]
  cashier: SidebarItem[]
}

export const roleBasedMenu: RoleBasedMenu = {
  admin: [
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: <FileText />,
      subItems: [
        { name: 'Consolidated', path: '/dashboard/consolidated' },
        { name: 'Store Wise', path: '/dashboard/store-wise' },
      ],
    },
    {
      name: 'Administration',
      path: '/administration',
      icon: <Settings />,
      subItems: [
        { name: 'Store Master', path: '/administration/store-master' },
        { name: 'Customer Master', path: '/administration/customer-master' },
        { name: 'Pay Mode Master', path: '/administration/paymode-master' },
        { name: 'Salesperson Master', path: '/administration/salesperson-master' },
      ],
    },
    {
      name: 'Billing',
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
    {
      name: 'Security',
      path: '/security',
      icon: <Shield />,
      subItems: [
        { name: 'User Profile', path: '/security/user-profile' },
        { name: 'Profile Allocation', path: '/security/profile-allocation' },
      ],
    },
  ],
  manager: [
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: <FileText />,
      subItems: [
        { name: 'Consolidated', path: '/dashboard/consolidated' },
        { name: 'Store Wise', path: '/dashboard/store-wise' },
      ],
    },
    {
      name: 'Administration',
      path: '/administration',
      icon: <Settings />,
      subItems: [
        { name: 'Store Master', path: '/administration/store-master' },
        { name: 'Customer Master', path: '/administration/customer-master' },
      ],
    },
    {
      name: 'Billing',
      path: '/billing',
      icon: <BadgeDollarSign />,
    },
    {
      name: 'Reports',
      path: '/reports',
      icon: <BookText />,
    },
  ],
  storemanager: [
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: <FileText />,
      subItems: [{ name: 'Store Wise', path: '/dashboard/store-wise' }],
    },
    {
      name: 'Billing',
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
  ],
  cashier: [
    {
      name: 'Billing',
      path: '/billing',
      icon: <BadgeDollarSign />,
    },
  ],
}
