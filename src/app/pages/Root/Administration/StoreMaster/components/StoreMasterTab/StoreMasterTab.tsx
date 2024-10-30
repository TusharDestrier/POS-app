

import DocumentSeriesDetailForm from '../DocumentSeries/components/DocumentSeriesDetailForm'
import LedgersDetailsForm from '../Ledgers/components/LedgersDetailForm'
import LogisticDetailForm from '../Logistics/component/LogisticDetailForm'
import MopDetailForm from '../MOP/components/MopDetailForm'
import PettyCashDetailsForm from '../PettyCashDetails/componets/PettyCashDetailForm'
import StoreDetailForm from '../StoreDetail/component/StoreDetailForm'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'


function StoreMasterTab() {
  // Main form instance with resolver for validation
  
  return (
    // Wrap form in FormProvider and define form layout
   
        <Tabs defaultValue="store-detail" className="mt-3">
          <TabsList className="mb-4">
            <TabsTrigger value="store-detail">Store Detail</TabsTrigger>
            <TabsTrigger value="logistics">Logistics</TabsTrigger>
            <TabsTrigger value="mop-details">MOP Details</TabsTrigger>
            <TabsTrigger value="petty-cash">Petty Cash Details</TabsTrigger>
            <TabsTrigger value="document-series">Document Series</TabsTrigger>
            <TabsTrigger value="ledgers">Ledgers</TabsTrigger>
          </TabsList>

          <TabsContent value="store-detail">
            <StoreDetailForm />
          </TabsContent>
          <TabsContent value="logistics">
            <LogisticDetailForm />
          </TabsContent>
          <TabsContent value="mop-details">
            <MopDetailForm/>
          </TabsContent>
          <TabsContent value="petty-cash">
            <PettyCashDetailsForm />
          </TabsContent>
          <TabsContent value="document-series">
            <DocumentSeriesDetailForm />
          </TabsContent>
          <TabsContent value="ledgers">
            <LedgersDetailsForm />
          </TabsContent>
        </Tabs>

       
  )
}

export default StoreMasterTab
