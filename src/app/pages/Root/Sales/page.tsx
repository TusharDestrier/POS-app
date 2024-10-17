import SalesScanner from './components/SalesScanner'
import SalesTable from './components/SalesTable'
import CustomerBox from './components/CustomerBox'
import SalesOptions from './components/SalesOptions'
import SalesBtns from './components/SalesBtns'
import SalesTabContent from './components/SalesTabContent/SalesTabContent'
import { Card, CardContent } from '@/components/ui/card'
import PromotionBox from './components/PromotionBox'

function SalesPage() {
  return (
    <>
      {/* <div className="grid grid-cols-[1fr,80px] gap-4">
      
      </div> */}
      <div className=" grid gap-3 grid-cols-[1fr,80px] ">
        <div className="grid gap-3 grid-cols-[1.5fr,1fr] ">
          <div className="customer-box">
            <CustomerBox />
            <div className="mt-3">
              <Card>
                <CardContent className="space-y-4">
                  <SalesScanner />
                  <SalesTable />
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
    </>
  )
}

export default SalesPage
