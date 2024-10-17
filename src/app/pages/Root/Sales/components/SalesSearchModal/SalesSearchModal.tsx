import { DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import SalesSearch from '../SalesSearch/SalesSearch'
import SalesSearchTable from '../SalesSearchTable'

function SalesSearchModal() {
  return (
    <DialogContent className="sm:max-w-[725px]">
      <DialogHeader>
        <DialogTitle className="flex  items-center gap-2">Search Products</DialogTitle>
      </DialogHeader>
      <div className="sales-search">
        <SalesSearch />
        <SalesSearchTable />
      </div>
    </DialogContent>
  )
}

export default SalesSearchModal
