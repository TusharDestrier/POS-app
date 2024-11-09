import { BadgeDollarSign, BookText, Presentation, Settings, FileText } from 'lucide-react'
import { ReactNode } from 'react'

export interface SubItem {
  name: string
  path: string
  subItems?: SubItem[] // Allows further nesting of subItems if required, without icons.
}

export interface SidebarItem {
  name: string
  path: string
  icon: ReactNode
  subItems?: SubItem[] // Sub-items now do not have icons.
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
    },
    {
      name: 'Administration',
      path: '/administration',
      icon: <Settings />,
      subItems: [
        {
          name: 'Setup',
          path: '/administration/setup',
          subItems: [
            { name: 'Store Master', path: '/administration/setup/store-master' },
            { name: 'Customer Master', path: '/administration/setup/customer-master' },
            { name: 'Pay Mode Master', path: '/administration/setup/paymode-master' },
            { name: 'Salesperson Master', path: '/administration/setup/salesperson-master' },
            { name: 'Generic Policy', path: '/administration/setup/generic-policy' },
            { name: 'Store Specific Policy', path: '/administration/setup/store-specific-policy' },
            { name: 'Discount Policy', path: '/administration/setup/discount-policy' },
            { name: 'Petty Cash Heads', path: '/administration/setup/petty-cash-heads' },
          ],
        },
        {
          name: 'Security',
          path: '/administration/security',
          subItems: [
            { name: 'User Profile', path: '/administration/security/user-profile' },
            { name: 'Profile Allocation', path: '/administration/security/profile-allocation' },
          ],
        },
        {
          name: 'Promotions',
          path: '/administration/promotions',
          subItems: [
            {
              name: 'Assortment Managements',
              path: '/administration/promotions/assortment-managements',
            },
            { name: 'Promotion Setup', path: '/administration/promotions/promotion-setup' },
            {
              name: 'Promotion Allocation',
              path: '/administration/promotions/promotion-allocation',
            },
            {
              name: 'Promotion Priority Setup',
              path: '/administration/promotions/promotion-priority-setup',
            },
          ],
        },
      ],
    },
    {
      name: 'Salesperson ',
      path: '/salesperson',
      icon: <BadgeDollarSign />,
      subItems: [
        {
          name: 'Assortment Managements',
          path: '/salesperson/assortment-managements',
        },
        {
          name: 'Assortment-wise Incentive',
          path: '/salesperson/assortmentwise-incentive',
        },
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
