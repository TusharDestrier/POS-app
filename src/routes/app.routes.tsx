import { Navigate, Outlet } from 'react-router-dom'

import ErrorPage from '@/app/pages/ErrorPage/page'
import RoleWiseRedirection from '@/app/pages/RoleWiseRedirection'
import { AdministrationLayout } from '@/app/pages/Root/Administration/layout'
import CustomerMaster from '@/app/pages/Root/Administration/Master/CustomerMaster/page'
import MasterLayout from '@/app/pages/Root/Administration/Master/layout'
import { PayModeMaster } from '@/app/pages/Root/Administration/Master/PayModeMaster/page'
import PettyCashHead from '@/app/pages/Root/Administration/Master/PettyCashHead/page'
import { StoreMaster } from '@/app/pages/Root/Administration/Master/StoreMaster/page'
//import { SalesPersonTable } from '@/app/pages/Root/Administration/SalesPersonMaster/components/SalesPersonTable/SalesPersonTable'
import CreateRole from '@/app/pages/Root/Administration/Security/CreateRole/page'
import SecurityLayout from '@/app/pages/Root/Administration/Security/layout'
import RoleDefination from '@/app/pages/Root/Administration/Security/RoleDefination/page'
import UserProfileCreationTable from '@/app/pages/Root/Administration/Security/UserProfileCreation/components/UserProfileCreationTable'
import AssortmentManagementDiscountLayout from '@/app/pages/Root/Administration/setup/discount/AssortmentManagement/layout'
import AssortmentManagementDiscountPage from '@/app/pages/Root/Administration/setup/discount/AssortmentManagement/page'
import DiscountAllocation from '@/app/pages/Root/Administration/setup/discount/DiscountAllocation/page'
import DiscountMasterPage from '@/app/pages/Root/Administration/setup/discount/DiscountMaster/page'
import SectupLayout from '@/app/pages/Root/Administration/setup/layout'
import OrganizationPolicyLayout from '@/app/pages/Root/Administration/setup/policy/OrganizationPolicy/layout'
import OrganizationPolicyPage from '@/app/pages/Root/Administration/setup/policy/OrganizationPolicy/page'
import StoreSpecificLayout from '@/app/pages/Root/Administration/setup/policy/StoreSpecificPolicy/layout'
import StoreSpecificPolicy from '@/app/pages/Root/Administration/setup/policy/StoreSpecificPolicy/page'
import PromotionAssortmentManagement from '@/app/pages/Root/Administration/setup/promotion/AssortmentManagement/page'
import PromotionAllocationPage from '@/app/pages/Root/Administration/setup/promotion/PromotionAllocation/page'
import PromotionPrioritySetupPage from '@/app/pages/Root/Administration/setup/promotion/PromotionPrioritySetup/page'
import PromotionSetUpLayout from '@/app/pages/Root/Administration/setup/promotion/PromotionSetup/layout'
import PromotionSetUpPage from '@/app/pages/Root/Administration/setup/promotion/PromotionSetup/page'
import AssortmentManagementLayout from '@/app/pages/Root/Administration/setup/salesperson/AssortmentManagement/layout'
import AssortmentManagementPage from '@/app/pages/Root/Administration/setup/salesperson/AssortmentManagement/page'
import AssortmentwiseIncentivePage from '@/app/pages/Root/Administration/setup/salesperson/AssortmentwiseIncentive/page'
import CustomerPage from '@/app/pages/Root/Customer/page'
import DashboardLayout from '@/app/pages/Root/Dashboard/layout'
import DashboardPage from '@/app/pages/Root/Dashboard/page'
import HelpLayout from '@/app/pages/Root/Help/layout'
import HelpPage from '@/app/pages/Root/Help/page'
import GoodsIssueLayout from '@/app/pages/Root/Inventroty/GoodsIssue/layout'
import GoodsIssuePage from '@/app/pages/Root/Inventroty/GoodsIssue/page'
import GoodsIssue from '@/app/pages/Root/Inventroty/GoodsIssue/page'
import GoodsRecieptLayout from '@/app/pages/Root/Inventroty/GoodsReciept/layout'
import GoodsRecieptPage from '@/app/pages/Root/Inventroty/GoodsReciept/page'
import GoodsReciept from '@/app/pages/Root/Inventroty/GoodsReciept/page'
import { InventoryTransferRequestLayout } from '@/app/pages/Root/Inventroty/Inventory_Transfer_Request/layout'
//import { InventoryTransferRequest } from '@/app/pages/Root/Inventroty/Inventory_Transfer_Request/page'
import { InventoryTransferRequest } from '@/app/pages/Root/Inventroty/Inventory_Transfer_Request/page'
import { InventoryTransferLayout } from '@/app/pages/Root/Inventroty/Inventroty_Transfer/layout'
import { InventoryTransfer } from '@/app/pages/Root/Inventroty/Inventroty_Transfer/page'
import { InventoryLayout } from '@/app/pages/Root/Inventroty/layout'
import RootLayout from '@/app/pages/Root/layout'
import ReportLayout from '@/app/pages/Root/Report/layout'
import ReportPage from '@/app/pages/Root/Report/page'
import SalesLayout from '@/app/pages/Root/Sales/layout'
import SalesPersonLayout from '@/app/pages/Root/SalesPerson/layout'
import SessionLayout from '@/app/pages/Root/Session/layout'
import SessionPage from '@/app/pages/Root/Session/page'
import SalesPage from '@/app/pages/Root/Transaction/Billing/Sales/page'
import Session from '@/app/pages/Root/Transaction/Billing/Session/page'
import TransactionLayout from '@/app/pages/Root/Transaction/layout'
import ApInvoice from '@/app/pages/Root/Transaction/Purchase/ApInvoice/page'
import GRPO from '@/app/pages/Root/Transaction/Purchase/GRPO/page'
//import Purchase from '@/app/pages/Root/Transaction/Purchase/page'
import PurchaseOrder from '@/app/pages/Root/Transaction/Purchase/PurchaseOrder/page'
import PurchaseRequest from '@/app/pages/Root/Transaction/Purchase/PurchaseRequest/page'
import ChangePasswordPage from '@/app/pages/Root/UserManagement/ChangePassword/page'
import Designation from '@/app/pages/Root/UserManagement/Designation/page'
import UtilitiesLayout from '@/app/pages/Root/Utilities/layout'
import UtilitiesPage from '@/app/pages/Root/Utilities/page'

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
      path: 'help',
      element: <HelpLayout />,
      Children: [
        {
          index: true,
          element: <HelpPage />,
        },
      ],
    },
    {
      path: 'Utilities',
      element: <UtilitiesLayout />,
      children: [
        {
          index: true,
          element: <UtilitiesPage />,
        },
      ],
    },
    {
      path: 'administration',
      element: <AdministrationLayout />,
      children: [
        {
          path: 'security',
          element: <SecurityLayout />,
          children: [
            {
              path: 'designation',
              element: <Designation />,
            },
            {
              path: 'create-role',
              element: <CreateRole />,
            },
            {
              path: 'role-defination',
              element: <RoleDefination />,
            },
            {
              path: 'user-profile-creation',
              element: <UserProfileCreationTable />,
            },
            {
              path: 'change-password',
              element: <ChangePasswordPage />,
            },
          ],
        },
        {
          path: 'setup',
          element: <SectupLayout />,
          children: [
            {
              path: 'policy',
              element: (
                <section>
                  <Outlet />
                </section>
              ),
              children: [
                {
                  path: 'organization-policy',
                  element: <OrganizationPolicyLayout />,
                  children: [
                    {
                      index: true,
                      element: <OrganizationPolicyPage />,
                    },
                  ],
                },
                {
                  path: 'store-wise-policy',
                  element: <StoreSpecificLayout />,
                  children: [
                    {
                      index: true,
                      element: <StoreSpecificPolicy />,
                    },
                  ],
                },
              ],
            },
            {
              path: 'discount',
              element: <AssortmentManagementDiscountLayout/>,
              children: [
                {
                  path: 'am-discount',
                  element: <AssortmentManagementDiscountPage/>,
                },
                {
                  path: 'discount-setup',
                  element: <DiscountMasterPage/>,
                },
                {
                  path: 'discount-allocation',
                  element: <DiscountAllocation/>,
                },
              ],
            },
            {
              path: 'promotion',
              element: <PromotionSetUpLayout/>,
              children: [
                {
                  path: 'am-promotion',
                  element: <PromotionAssortmentManagement/>,
                },
                {
                  path: 'promotion-setup',
                  element: <PromotionSetUpPage/>,
                },
                {
                  path: 'promotion-allocation',
                  element: <PromotionAllocationPage/>,
                },
                {
                  path: 'promotion-priority-setup',
                  element: <PromotionPrioritySetupPage/>
                },
              ],
            },
            {
              path: 'salesperson-incentive',
              element: <SalesPersonLayout />,
              children: [
                {
                  index: true,
                  element: <Navigate to="/administration/setup/salesperson-incentive/am-incentive" />,
                },
                {
                  path: 'incentive-allocation',
                  element: <AssortmentManagementLayout />,
                  children: [
                    {
                      index: true,
                      element: <AssortmentManagementPage />,
                    },
                  ],
                },
                {
                  path: 'am-incentive',
                  element: <AssortmentwiseIncentivePage />,
                },
                // {
                //   path: 'salesperson-master',
                //   element: <SalesPersonTable />,
                //   children: [
                //     {
                //       index: true,
                //       element: <SalesPersonTable />,
                //     },
                //   ],
                // },
                
              ],
            },
          ],
        },
        {
          path: 'master',
          element: <MasterLayout />,
          children: [
            {
              path: 'customer-master',
              element: <CustomerMaster />,
            },
            {
              path: 'store-master',
              element: <StoreMaster />,
            },
            {
              path: 'paymode-master',
              element: <PayModeMaster />,
            },
            {
              path: 'pettycash-heads',
              element: <PettyCashHead />,
            },
          ],
        },
      ],
    },
    {
      path: 'transaction',
      element: <TransactionLayout />,
      children: [
        {
          path: 'purchase',
          // element: <SecurityLayout />,
          children: [
            {
              path: 'purchase-request',
              element: <PurchaseRequest />,
              // element: <Purchase />,
            },
            {
              path: 'purchase-order',
              element: <PurchaseOrder />,
            },
            {
              path: 'grpo',
              element: <GRPO />,
            },
            {
              path: 'ap-invoice',
              element: <ApInvoice />,
            },
          ],
        },
        {
          path: 'inventory',
          element: <InventoryLayout />,
          children: [
            {
              path: 'inventory-transfer-request',
              element: <InventoryTransferRequest />,
            },
            {
              path: 'inventory-transfer',
              element: <InventoryTransfer />,
            },
            {
              path: 'goods-receipt',
              element: <GoodsReciept />,
            },
            {
              path: 'goods-issue',
              element: <GoodsIssue />,
            },
          ],
        },
        {
          path: 'billing',
          element: <SalesLayout />,
          children: [
            {
              path: 'billing-return',
              element: <SalesPage />,
            },
            {
              path: 'sessions',
              element: <Session />,
            },
          ],
        },
        {
          path: 'master',
          element: <MasterLayout />,
          children: [
            {
              path: 'customer-master',
              element: <CustomerMaster />,
            },
            {
              path: 'store-master',
              element: <StoreMaster />,
            },
            {
              path: 'paymode-master',
              element: <PayModeMaster />,
            },
            {
              path: 'pettycash-heads',
              element: <PettyCashHead />,
            },
          ],
        },
      ],
    },
    {
      path: 'inventroty',
      element: <InventoryLayout />,
      children: [
        {
          path: 'inventory-transfer-request',
          element: <InventoryTransferLayout />,
          // element: <Navigate to={'/inventroty/inventory-transfer'} />,
        },
        {
          path: 'inventory-transfer-request',
          element: <InventoryTransferLayout />,
          children: [
            {
              index: true,
              // element: <InventoryTransferPage />,
            },
          ],
        },
        {
          path: 'inventory-transfer-request',
          element: <InventoryTransferRequestLayout />,
          children: [
            {
              index: true,
              // element: < />,
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
    // {
    //   path: 'user-management',
    //   element: <UserManagementLayout />,
    //   children: [
    //     {
    //       index: true,
    //       element:<Navigate to={'/user-management/role-master'} />,
    //     },
    //     {
    //       path: 'role-master',
    //       element:  <RoleMaster/>,
    //     },
    //     {
    //       path: 'designation-master',
    //       element:  <DesignationMaster/>,
    //     },
    //     {
    //       path: 'user-master',
    //       element:  <UserMasterPage/>
    //     },
    //     {
    //       path: 'change-password',
    //       element:  <ChangePasswordPage/>
    //     },
    //     {
    //       path: 'role-wise-menu',
    //       element:   <h4>role wise menu</h4>
    //     },
    //   ],
    // },
    {
      path: 'billing',
      element: <SalesLayout />,
      children: [
        {
          path:'biling-return',
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
   
  ],
}
