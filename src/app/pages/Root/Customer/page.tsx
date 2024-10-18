import { Card, CardContent, CardHeader } from '@/components/ui/card'
import CustomerBox from '../Sales/components/CustomerBox'
import SalesBtns from '../Sales/components/SalesBtns'
import CustomersTable from '../Sales/components/CustomersTableData'
import SalesTabContent from '../Sales/components/SalesTabContent/SalesTabContent'
import PromotionBox from '../Sales/components/PromotionBox'
import SalesOptions from '../Sales/components/SalesOptions'
import CustomerHistory from '../Sales/components/CustomerBox/components/MemberForm/components/CustomerHistory'
import SalesMutistep from '../Sales/components/SalesMultiStep'

function CustomerPage() {
  return (
    <div className=" grid gap-3 grid-cols-1 ">
      <div className="grid gap-3 grid-cols-[1.5fr,1fr] ">
        <div className="customer-box">
          <CustomerBox />
          <div className="mt-3">
            <Card>
              <CardContent className="space-y-4">
                <CustomersTable />
              </CardContent>
            </Card>
            {/* <SalesBtns /> */}
          </div>
        </div>
        <div className="sales btns flex flex-col">
          <SalesMutistep />
        </div>
      </div>
      {/* <SalesOptions /> */}
    </div>
  )
}

export default CustomerPage
