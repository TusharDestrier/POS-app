import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

function StoreWiseSetupTab() {
  return (
    <Tabs defaultValue="general" className="">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="posBIll">POS Bill</TabsTrigger>
        <TabsTrigger value="creditNote">Credit Note</TabsTrigger>
        <TabsTrigger value="goodsReceiptReturn">Goods Receipt & Return</TabsTrigger>
        <TabsTrigger value="posOrder">POS Order</TabsTrigger>
      </TabsList>
      <div className="">
        <TabsContent value="general">
          <h3>General </h3>
        </TabsContent>
        <TabsContent value="posBIll">
        <h3>posBIll </h3>

        </TabsContent>
        <TabsContent value="creditNote">
        <h3>General </h3>

        </TabsContent>
        <TabsContent value="goodsReceiptReturn">
        <h3>General </h3>

        </TabsContent>
        <TabsContent value="posOrder">
        <h3>General </h3>

        </TabsContent>
      </div>
    </Tabs>
  )
}

export default StoreWiseSetupTab
