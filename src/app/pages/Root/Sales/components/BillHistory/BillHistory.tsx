import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Billwise from './components/Billwise'
import ItemWise from './components/ItemWise'

function BillHistory() {
  return (
    <div className="bill-history">
      <h3 className="heading-secondary">Bill History</h3>
      <Tabs defaultValue="account" className="">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Billwise</TabsTrigger>
          <TabsTrigger value="password">ItemWise</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Billwise />
        </TabsContent>
        <TabsContent value="password">
          <ItemWise />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default BillHistory
