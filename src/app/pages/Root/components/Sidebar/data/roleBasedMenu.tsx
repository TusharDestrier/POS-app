import { BadgeDollarSign, BookText, Presentation, Settings, FileText, Table } from 'lucide-react'
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
          name: 'Security',
          path: '/administration/security',

          subItems: [
            {
              name: 'Designation',
              path: '/administration/security/designation',
            },
            {
              name: 'Create Role',
              path: '/administration/security/create-role',
            },
            {
              name: 'Role Defination',
              path: '/administration/security/role-defination',
            },
            {
              name: 'User Profile Creation',
              path: '/administration/security/user-profile-creation',
            },
            {
              name: 'Change Password',
              path: '/administration/security/change-password',
            },
            {
              name: 'User Master',
              path: '/administration/security/user-master',
            },
          
          ],
        },
        {
          name: 'Setup',
          path: '/administration/setup',
          subItems: [
            {
              name: 'Policy',
              path: '/administration/setup/policy',
              subItems: [
                { name: 'Organization Policy', path: 'administration/setup/policy/organization-policy' },
                { name: 'Store Wise Policy', path: 'administration/setup/policy/store-wise-policy' },
              ],
            },

            {
              name: 'Discount',
              path: '/administration/setup/discount',
              subItems: [
                {
                  name: 'Assortment Management (Discount)',
                  path: '/administration/setup/discount/am-discount',
                },
                {
                  name: 'Discount Setup',
                  path: '/administration/setup/discount/discount-setup',
                },
                {
                  name: 'Discount Allocation',
                  path: '/administration/setup/discount/discount-allocation',
                },
              ],
            },
            {
              name: 'Promition',
              path: '/administration/setup/promotion',
              subItems: [
                {
                  name: 'Assortment Managment (Promotion)',
                  path: '/administration/setup/promotion/am-promotion',
                },
                {
                  name: 'Promotion Setup',
                  path: '/administration/setup/promotion/promotion-setup',
                },
                {
                  name: 'Promotion Allocation',
                  path: '/administration/setup/promotion/promotion-allocation',
                },
                {
                  name: 'Promotion Priorty Setup',
                  path: '/administration/setup/promotion/promotion-priority-setup',
                },
              ],
            },
            {
              name: 'Sales Person Incentive',
              path: '/administration/setup/salesperson-incentive',
              subItems: [
                {
                  name: 'Assortment Managment (Incentive)',
                  path: '/administration/setup/salesperson-incentive/am-incentive',
                },
                {
                  name: 'Assortment Allocation for Incentive',
                  path: '/administration/setup/salesperson-incentive/incentive-allocation',
                },
              ],
            },
            // { name: 'Generic Policy', path: '/administration/setup/generic-policy' },
            // { name: 'Store Specific Policy', path: '/administration/setup/store-specific-policy' },
            // { name: 'Discount Policy', path: '/administration/setup/discount-policy' },
            // { name: 'Petty Cash Heads', path: '/administration/setup/petty-cash-heads' },
            // { name: 'Organization Policy', path: '/administration/setup/general-setup-option' },
            // { name: 'Store Specific Policy', path: '/administration/setup/storewise-setup-option' },
          ],
        },
        {
          name: 'Master',
          path: '/administration/master',
          subItems: [
            { name: 'Customer Master', path: '/administration/master/customer-master' },
            { name: 'Store Master', path: '/administration/master/store-master' },
            { name: 'Pay Mode Master', path: '/administration/master/paymode-master' },
            { name: 'Petty Cash Heads', path: '/administration/master/pettycash-heads' },
            { name: 'SalesPerson Master', path: '/administration/master/salesperson-master' },
            {name: 'Item Master', path: '/administration/master/item-master'}
          ],
        },
        // {
        //   name: 'Promotions',
        //   path: '/administration/promotions',
        //   subItems: [
        //     {
        //       name: 'Assortment Managements',
        //       path: '/administration/promotions/assortment-managements',
        //     },
        //     { name: 'Promotion Setup', path: '/administration/promotions/promotion-setup' },

        //     {
        //       name: 'Assortment Promotion',
        //       path: '/administration/promotions/assortment-promotion',
        //     },
        //     {
        //       name: 'Promotion Allocation',
        //       path: '/administration/promotions/promotion-allocation',
        //     },
        //     {
        //       name: 'Promotion Priority Setup',
        //       path: '/administration/promotions/promotion-priority-setup',
        //     },
        //   ],
        // },
      ],
    },

    {
      name: 'Transaction ',
      path: '/transaction',
      icon: <Table />,
      subItems: [
        {
          name: 'Purchase',
          path: '/transaction/purchase',
          subItems: [
            {
              name: 'Purchase Request',
              path: '/transaction/purchase/purchase-request',
            },
            {
              name: 'Purchase Order',
              path: '/transaction/purchase/purchase-order',
            },
            {
              name: 'GRPO',
              path: '/transaction/purchase/grpo',
            },
            {
              name: 'A/P Invoice',
              path: '/transaction/purchase/ap-invoice',
            },
          ],
        },
        {
          name: 'Inventory ',
          path: '/transaction/inventory',
          subItems: [
            {
              name: 'Inventory transfer Request',
              path: '/transaction/inventory/inventory-transfer-request',
            },
            {
              name: 'Inventory transfer',
              path: '/transaction/inventory/inventory-transfer',
            },
            {
              name: 'Goods Receipt',
              path: '/transaction/inventory/goods-receipt',
            },
            {
              name: 'Goods Issue',
              path: '/transaction/inventory/goods-issue',
            },
          ],
        },
        {
          name: 'Billing',
          path: '/transaction/billing',
          subItems: [
            {
              name: 'Billing @ Return',
              path: '/transaction/billing/billing-return',
            },
            {
              name: 'Sessions',
              path: '/transaction/billing/sessions',
            },
          ],
        },
      ],
    },

    {
      name: 'Reports',
      path: '/reports',
      icon: <BookText />,
    },
    {
      name: 'Utilities',
      path: '/utilities',
      icon: <Presentation />,
    },
    {
      name: 'Help',
      path: '/help',
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
      subItems: [
        {
          name: 'Billing@Return',
          path: '/billing/billing-return',
        },
      ],
    },
  ],
}
