import { Card, CardContent } from '@/components/ui/card'
import CustomerBox from '../Sales/components/CustomerBox'
import SalesBtns from '../Sales/components/SalesBtns'
import CustomersTable from '../Sales/components/CustomersTableData'
import SalesTabContent from '../Sales/components/SalesTabContent/SalesTabContent'
import PromotionBox from '../Sales/components/PromotionBox'
import SalesOptions from '../Sales/components/SalesOptions'

function CustomerPage() {
  return (
    <div className=" grid gap-3 grid-cols-[1fr,80px] ">
      <div className="grid gap-3 grid-cols-[2fr,1fr] ">
        <div className="customer-box">
          <CustomerBox />
          <div className="">
            <Card>
              <CardContent className="space-y-4">
                <CustomersTable />
              </CardContent>
            </Card>
            <SalesBtns />
          </div>
        </div>
        <div className="sales btns flex flex-col">
          <SalesTabContent />
          <PromotionBox />
        </div>
      </div>
      <SalesOptions />
    </div>
  )
}

export default CustomerPage
