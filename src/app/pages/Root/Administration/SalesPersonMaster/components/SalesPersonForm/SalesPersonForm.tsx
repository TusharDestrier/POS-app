import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import SalesPersonTab from './components/SalesPersonTab'
import StoreAllocationTab from './components/StoreAllocationTab'

function SalesPersonForm() {
  return (
    <Tabs defaultValue="salesPerson" className="">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="salesPerson">Sales Person</TabsTrigger>
        <TabsTrigger value="storeAllocation">Store Allocation</TabsTrigger>
      </TabsList>
      <TabsContent value="salesPerson">
        <div>
          <h3 className="heading-secondary mb-3 mt-3">Sales Person</h3>
          <SalesPersonTab />
        </div>
      </TabsContent>
      <TabsContent value="storeAllocation">
        <h3 className="heading-secondary mb-3 mt-3">Store Allocation</h3>

        <StoreAllocationTab />
      </TabsContent>
    </Tabs>
  )
}

export default SalesPersonForm
