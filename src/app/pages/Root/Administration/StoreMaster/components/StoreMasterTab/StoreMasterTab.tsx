import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import StoreDetail from '../StoreDetail'
import Logistics from '../Logistics'
import MOP from '../MOP'

function StoreMasterTab() {
  return (
    <Tabs defaultValue="store-detail" className="">
      <TabsList>
        <TabsTrigger value="store-detail">Store Detail</TabsTrigger>
        <TabsTrigger value="logistics">Logistics</TabsTrigger>
        <TabsTrigger value="mop-details">MOP Details</TabsTrigger>
        <TabsTrigger value="petty-cash">Petty Cash Details</TabsTrigger>
        <TabsTrigger value="document-series">Document Series</TabsTrigger>
        <TabsTrigger value="ledgers">Ledgers</TabsTrigger>
      </TabsList>

      <TabsContent value="store-detail">
        <StoreDetail />
      </TabsContent>
      <TabsContent value="logistics">
        <Logistics />
      </TabsContent>
      <TabsContent value="mop-details">
        <MOP />
      </TabsContent>
      <TabsContent value="petty-cash">Petty cash details content here.</TabsContent>
      <TabsContent value="document-series">Document series content here.</TabsContent>
      <TabsContent value="ledgers">Ledgers content here.</TabsContent>
    </Tabs>
  )
}

export default StoreMasterTab
