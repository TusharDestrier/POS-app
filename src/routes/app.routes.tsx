import { Navigate } from 'react-router-dom'

import ErrorPage from '@/app/pages/ErrorPage/page'
import RoleWiseRedirection from '@/app/pages/RoleWiseRedirection'
import AssortmentmanagementSetupLayout from '@/app/pages/Root/Administration/AssortmentManagement/layout'
import AssortmentmanagementSetupPage from '@/app/pages/Root/Administration/AssortmentManagement/page'
import AssortmentPromotionLayout from '@/app/pages/Root/Administration/AssortmentPromotion/layout'
import AssortmentPromotionPage from '@/app/pages/Root/Administration/AssortmentPromotion/page'
import CustomerMasterLayout from '@/app/pages/Root/Administration/CustomerMaster/layout'
import CustomerMasterPage from '@/app/pages/Root/Administration/CustomerMaster/page'
import DiscountPolicy from '@/app/pages/Root/Administration/DiscountPolicy'
import GeneralSetupPage from '@/app/pages/Root/Administration/GeneralSetup/page'
import GenericPolicy from '@/app/pages/Root/Administration/GenericPolicy'
import { AdministrationLayout } from '@/app/pages/Root/Administration/layout'
import { PayModeMasterPage } from '@/app/pages/Root/Administration/PayModeMaster/page'
import PettyCashHeadLayout from '@/app/pages/Root/Administration/PettyCashHead/layout'
import PettyCashHeadPage from '@/app/pages/Root/Administration/PettyCashHead/page'
import PromotionSetupLayout from '@/app/pages/Root/Administration/PromotionSetup/layout'
import PromotionSetupPage from '@/app/pages/Root/Administration/PromotionSetup/page'
import SalesPersonMasterLayout from '@/app/pages/Root/Administration/SalesPersonMaster/layout'
import SalesPersonMasterPage from '@/app/pages/Root/Administration/SalesPersonMaster/page'
import { StoreMasterPage } from '@/app/pages/Root/Administration/StoreMaster/page'
import StoreSpecificPolicy from '@/app/pages/Root/Administration/StoreSpecificPolicy'
import StoreWiseSetupPage from '@/app/pages/Root/Administration/StorewiseSetup/page'
import CustomerPage from '@/app/pages/Root/Customer/page'
import DashboardLayout from '@/app/pages/Root/Dashboard/layout'
import DashboardPage from '@/app/pages/Root/Dashboard/page'
import GoodsIssueLayout from '@/app/pages/Root/Inventroty/GoodsIssue/layout'
import GoodsIssuePage from '@/app/pages/Root/Inventroty/GoodsIssue/page'
import GoodsRecieptLayout from '@/app/pages/Root/Inventroty/GoodsReciept/layout'
import GoodsRecieptPage from '@/app/pages/Root/Inventroty/GoodsReciept/page'
import { InventoryTransferRequestLayout } from '@/app/pages/Root/Inventroty/Inventory_Transfer_Request/layout'
import { InventoryTransferRequestPage } from '@/app/pages/Root/Inventroty/Inventory_Transfer_Request/page'
import { InventoryTransferLayout } from '@/app/pages/Root/Inventroty/Inventroty_Transfer/layout'
import { InventoryTransferPage } from '@/app/pages/Root/Inventroty/Inventroty_Transfer/page'
import { InventoryLayout } from '@/app/pages/Root/Inventroty/layout'
import RootLayout from '@/app/pages/Root/layout'
import ReportLayout from '@/app/pages/Root/Report/layout'
import ReportPage from '@/app/pages/Root/Report/page'
import SalesLayout from '@/app/pages/Root/Sales/layout'
import SalesPage from '@/app/pages/Root/Sales/page'
import AssortmentManagementLayout from '@/app/pages/Root/SalesPerson/AssortmentManagement/layout'
import AssortmentManagementPage from '@/app/pages/Root/SalesPerson/AssortmentManagement/page'
import AssortmentThreePage from '@/app/pages/Root/SalesPerson/AssortmentThree/page'
import AssortmentManagementTwoPage from '@/app/pages/Root/SalesPerson/AssortmentTwo/page'
import AssortmentwiseIncentivePage from '@/app/pages/Root/SalesPerson/AssortmentwiseIncentive/page'
import SalesPersonLayout from '@/app/pages/Root/SalesPerson/layout'
import SessionLayout from '@/app/pages/Root/Session/layout'
import SessionPage from '@/app/pages/Root/Session/page'
import DesignationMaster from '@/app/pages/Root/UserManagement/DesignationMaster/page'
import UserManagementLayout from '@/app/pages/Root/UserManagement/layout'
import RoleMaster from '@/app/pages/Root/UserManagement/RoleMaster/page'
import UserMasterPage from '@/app/pages/Root/UserManagement/UserMaster/page'

export const appRoutes = {
  path: '/',
  element: <RootLayout />,
  errorElement: <ErrorPage />,
  children: [
    {
      index: true,
      element: <RoleWiseRedirection />,
    },
    {
      path: 'dashboard',
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <DashboardPage />,
        },
      ],
    },
    {
      path: 'administration',
      element: <AdministrationLayout />,
      children: [
        {
          index: true,
          element: <Navigate to={'/setup'} />,
        },
        {
          path: 'setup',
          children: [
            {
              path: 'store-master',
              element: <StoreMasterPage />,
            },

            {
              path: 'customer-master',
              element: <CustomerMasterLayout />,
              children: [
                {
                  index: true,
                  element: <CustomerMasterPage />,
                },
              ],
            },
            {
              path: 'paymode-master',
              element: <PayModeMasterPage />,
            },
            {
              path: 'salesperson-master',
              element: <SalesPersonMasterLayout />,
              children: [
                {
                  index: true,
                  element: <SalesPersonMasterPage />,
                },

                {
                  path: 'assortment-management',
                  element: <SalesPersonMasterPage />,
                },
              ],
            },
            {
              path: 'generic-policy',
              element: <GenericPolicy />,
            },
            {
              path: 'store-specific-policy',
              element: <StoreSpecificPolicy />,
            },
            {
              path: 'discount-policy',
              element: <DiscountPolicy />,
            },
            {
              path: 'general-setup-option',
              element: <GeneralSetupPage />,
            },
            {
              path: 'storewise-setup-option',
              element: <StoreWiseSetupPage />,
            },

            {
              path: 'petty-cash-heads',
              element: <PettyCashHeadLayout />,
              children: [
                {
                  index: true,
                  element: <PettyCashHeadPage />,
                },
              ],
            },
          ],
        },
        {
          path:"promotions",
          children:[
            {
              path: 'assortment-promotion',
              children: [
                {
                  element: <AssortmentPromotionLayout />,
                  children: [
                    {
                      index: true,
                      element: <AssortmentPromotionPage />,
                    },
                  ],
                },
              ]
            },
            {
              path: 'promotion-setup',
              children: [
                {
                  element: <PromotionSetupLayout/>,
                  children: [
                    {
                      index: true,
                      element: <PromotionSetupPage/>
                    }
                  ]
                }
              ]
            },
            {
             path: 'assortment-managements',
             children: [
              {
                element: <AssortmentmanagementSetupLayout/>,
                children: [
                  {
                    index: true,
                    element: <AssortmentmanagementSetupPage/>
                  }
                 
                ]
              }
             ]
            }
          ]
        },
      
      ],    
    },
    {
      path: 'inventroty',
      element: <InventoryLayout />,
      children: [
        {
          index: true,
          element: <Navigate to={'/inventroty/inventory-transfer'} />,
        },
        {
          path: 'inventory-transfer',
          element: <InventoryTransferLayout />,
          children: [
            {
              index: true,
              element: <InventoryTransferPage />,
            },
          ],
        },
        {
          path: 'inventory-transfer-request',
          element: <InventoryTransferRequestLayout />,
          children: [
            {
              index: true,
              element: <InventoryTransferRequestPage />,
            },
          ],
        },
        {
          path: 'goods-reciept',
          element: <GoodsRecieptLayout />,
          children: [
            {
              index: true,
              element: <GoodsRecieptPage />,
            },
          ],
        },
        {
          path: 'goods-issue',
          element: <GoodsIssueLayout />,
          children: [
            {
              index: true,
              element: <GoodsIssuePage />,
            },
          ],
        },
      ],
    },
    {
      path: 'user-management',
      element: <UserManagementLayout />,
      children: [
        {
          index: true,
          element:<Navigate to={'/user-management/role-master'} />,
        },
        {
          path: 'role-master',
          element:  <RoleMaster/>,
        },
        {
          path: 'designation-master',
          element:  <DesignationMaster/>,
        },
        {
          path: 'user-master',
          element:  <UserMasterPage/>
        },
        {
          path: 'change-password',
          element:  <h4>change password</h4>
        },
        {
          path: 'role-wise-menu',
          element:   <h4>role wise menu</h4>
        },
      ],
    },
    {
      path: 'billing',
      element: <SalesLayout />,
      children: [
        {
          index: true,
          element: <SalesPage />,
        },
        {
          path: 'customers',
          element: <CustomerPage />,
        },
      ],
    },

    {
      path: 'reports',
      element: <ReportLayout />,
      children: [
        {
          index: true,
          element: <ReportPage />,
        },
      ],
    },
    {
      path: 'sessions',
      element: <SessionLayout />,
      children: [
        {
          index: true,
          element: <SessionPage />,
        },
      ],
    },
    {
      path: 'salesperson',
      element: <SalesPersonLayout />,
      children: [
        {
          index: true,
          element: <Navigate to="/salesperson/assortment-managements" />,
        },
        {
          path: 'assortment-managements',
          element: <AssortmentManagementLayout />,
          children: [
            {
              index: true,
              element: <AssortmentManagementPage />,
            },
          ],
        },
        {
          path: 'assortmentwise-incentive',
          element: <AssortmentwiseIncentivePage />,
        },
        {
          path: 'assortment-two',
           element: <AssortmentManagementTwoPage/>,
        },
        {
          path: 'assortment-three',
          element: <AssortmentThreePage/>,
        },

      ],
    },
  ],
}
