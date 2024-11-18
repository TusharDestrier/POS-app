

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

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
      <div className="" >
      
      </div>
      
    </Tabs>
  )
}

export default StoreWiseSetupTab
