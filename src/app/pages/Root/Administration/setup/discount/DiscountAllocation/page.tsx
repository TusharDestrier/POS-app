import DiscountAllocationListModal from './components/DiscountAllocationListModal'
import DiscountAllocationTable from './components/DiscountAllocationTable'
import DiscountStoreSelectionModal from './components/DiscountStoreSelectionListModal'
import DiscountStoreSelectionTable from './components/DsicountStoreSelectionTable'

import { Button } from '@/components/ui/button'



function DiscountAllocation() {
  return (
    <div className="discount_allocation relative z-20">
      <div className="grid grid-cols-2 gap-3 ">
        <div className="item p-3 border">
          <DiscountAllocationTable />
        </div>
        <div className="item p-3 border">
          <DiscountStoreSelectionTable />
        </div>
      </div>
      <div className='flex justify-end mt-3 gap-3'> 
        <Button>Save</Button>
        <Button variant={'outline'}>Reset</Button>
      </div>
      <DiscountAllocationListModal />
      <DiscountStoreSelectionModal />
    </div>
  )
}

export default DiscountAllocation
