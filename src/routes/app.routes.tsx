import { Navigate } from 'react-router-dom'

import ErrorPage from '@/app/pages/ErrorPage/page'
import { AdministrationLayout } from '@/app/pages/Root/Administration/layout'
import CustomerMaster from '@/app/pages/Root/Administration/Master/CustomerMaster/page'
import ItemMaster from '@/app/pages/Root/Administration/Master/ItemMaster/page'
import MasterLayout from '@/app/pages/Root/Administration/Master/layout'
import PaymodeMasterPage from '@/app/pages/Root/Administration/Master/PayModeMaster/page'
import PettyCashHead from '@/app/pages/Root/Administration/Master/PettyCashHead/page'
import SalesPersonMasterLayout from '@/app/pages/Root/Administration/Master/SalesPersonMaster/layout'
import SalesPersonMasterPage from '@/app/pages/Root/Administration/Master/SalesPersonMaster/page'
import { StoreMaster } from '@/app/pages/Root/Administration/Master/StoreMaster/page'
//import { SalesPersonTable } from '@/app/pages/Root/Administration/SalesPersonMaster/components/SalesPersonTable/SalesPersonTable'
import ChangePasswordPage from '@/app/pages/Root/Administration/Security/ChangePassword/page'
import CreateRole from '@/app/pages/Root/Administration/Security/CreateRole/page'
import DesignationMaster from '@/app/pages/Root/Administration/Security/Designation/page'
import SecurityLayout from '@/app/pages/Root/Administration/Security/layout'
import RoleDefination from '@/app/pages/Root/Administration/Security/RoleDefination/page'
import UserMaster from '@/app/pages/Root/Administration/Security/UserMaster/Page'
import UserProfileCreationTable from '@/app/pages/Root/Administration/Security/UserProfileCreation/components/UserProfileCreationTable'
import DiscountAllocation from '@/app/pages/Root/Administration/setup/discount/DiscountAllocation/page'
import DiscountAssortmentManagementLayout from '@/app/pages/Root/Administration/setup/discount/DiscountAssortmentManagement/layout'
import DiscountAssortmentManagementPage from '@/app/pages/Root/Administration/setup/discount/DiscountAssortmentManagement/page'
import DiscountMasterPage from '@/app/pages/Root/Administration/setup/discount/DiscountMaster/page'
import SectupLayout from '@/app/pages/Root/Administration/setup/layout'
import OrganizationPolicyPage from '@/app/pages/Root/Administration/setup/policy/OrganizationPolicy/page'
import StoreSpecificPolicy from '@/app/pages/Root/Administration/setup/policy/StoreSpecificPolicy/page'
import PromotionAllocationPage from '@/app/pages/Root/Administration/setup/promotion/PromotionAllocation/page'
import PromotionAssortmentManagementPage from '@/app/pages/Root/Administration/setup/promotion/PromotionAssortmentManagement/page'
import PromotionPrioritySetupPage from '@/app/pages/Root/Administration/setup/promotion/PromotionPrioritySetup/page'
import PromotionSetUpLayout from '@/app/pages/Root/Administration/setup/promotion/PromotionSetup/layout'
import PromotionSetUpPage from '@/app/pages/Root/Administration/setup/promotion/PromotionSetup/page'
import IncentiveAssortmentwiseIncentiveLayout from '@/app/pages/Root/Administration/setup/salesperson/IncentiveAssortmentwise/layout'
import IncentiveAssortmentwiseIncentivePage from '@/app/pages/Root/Administration/setup/salesperson/IncentiveAssortmentwise/page'
import IncentiveAssortmentManagementPage from '@/app/pages/Root/Administration/setup/salesperson/IntcentiveAssortmentManagement/page'
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
import UtilitiesLayout from '@/app/pages/Root/Utilities/layout'
import UtilitiesPage from '@/app/pages/Root/Utilities/page'

export const appRoutes = {
  path: '/',
  element: <RootLayout />,
  errorElement: <ErrorPage />,
  children: [
    {
      index: true,
      element: <Navigate to={'/dashboard'} />,
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
              element: <DesignationMaster />,
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
            {
              path: 'user-master',
              element: <UserMaster />,
            },
          ],
        },
        {
          path: 'setup',
          element: <SectupLayout />,
          children: [
            {
              path: 'policy',
              element:<SectupLayout />,
              children: [
                {
                  path: 'organization-policy',
                  element: <OrganizationPolicyPage />,
                },
                {
                  path: 'store-wise-policy',
                  element: <StoreSpecificPolicy />,
                },
              ],
            },
            {
              path: 'discount',
              element: <DiscountAssortmentManagementLayout />,
              children: [
                {
                  path: 'assortment-management-discount',
                  element: <DiscountAssortmentManagementPage />,
                },
                {
                  path: 'discount-setup',
                  element: <DiscountMasterPage />,
                },
                {
                  path: 'discount-allocation',
                  element: <DiscountAllocation />,
                },
              ],
            },
            {
              path: 'promotion',
              element: <PromotionSetUpLayout />,
              children: [
                {
                  path: 'assortment-mangement-promotion',
                  element: <PromotionAssortmentManagementPage />,
                },
                {
                  path: 'promotion-setup',
                  element: <PromotionSetUpPage />,
                },
                {
                  path: 'promotion-allocation',
                  element: <PromotionAllocationPage />,
                },
                {
                  path: 'promotion-priority-setup',
                  element: <PromotionPrioritySetupPage />,
                },
              ],
            },
            {
              path: 'salesperson-incentive',
              element: <SalesPersonLayout />,
              children: [
                {
                  index: true,
                  element: (
                    <Navigate to="/administration/setup/salesperson-incentive/assortment-managemnt-incentive" />
                  ),
                },
                {
                  path: 'storewise-assortment-allocation',
                  element: <IncentiveAssortmentwiseIncentiveLayout />,
                  children: [
                    {
                      index: true,
                      element: <IncentiveAssortmentwiseIncentivePage />,
                    },
                  ],
                },
                {
                  path: 'assortment-managemnt-incentive',
                  element: <IncentiveAssortmentManagementPage />,
                },
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
              element: <PaymodeMasterPage />,
            },
            {
              path: 'pettycash-heads',
              element: <PettyCashHead />,
            },
            {
              path: 'item-master',
              element: <ItemMaster />,
            },
            {
              path: 'salesperson-master',
              element: <SalesPersonMasterLayout />,
              children: [
                {
                  index: true,
                  element: <SalesPersonMasterPage />,
                },
              ],
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
              element: <PaymodeMasterPage />,
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
        },
        {
          path: 'inventory-transfer-request',
          element: <InventoryTransferLayout />,
          children: [
            {
              index: true,
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

    {
      path: 'billing',
      element: <SalesLayout />,
      children: [
        {
          path: 'biling-return',
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
