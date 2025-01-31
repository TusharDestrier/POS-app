//import { useItemMaster } from '../../store/useItemMaster'
// import Communication from '../CustomerForm/components/Communication'
// import LoyaltyPoints from '../CustomerForm/components/LoyaltyPoints/LoyaltyPoints'
// import Membership from '../CustomerForm/components/MemberShip'
// import Personal from '../CustomerForm/components/Personal'
// import PurchaseHistory from '../CustomerForm/components/PurchaseHistory'


import { useItemMaster } from '../../store/useItemMaster'
import ItemDetailsTab from '../ItemMasterForm/components/ItemDetaills/components/ItemDetails'
import ItemRemarksTab from '../ItemMasterForm/components/ItemRemarks/components/ItemRemarks/ItemRemarksTab'
import PropertyDetails from '../ItemMasterForm/components/PropertyDetails'

import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

function ItemMasterTab() {
  //const mode = useItemMaster((state) => state.mode)
  const modalToggler = useItemMaster((state) => state.toggleOpen)
   const setModalMode = useItemMaster((state) => state.setMode)
  function closeModal() {
 // alert(1)
  modalToggler()
  setModalMode('View')
  }
  return (
    <>
    
    <Tabs defaultValue="itemDetails" className="mt-3">
      <TabsList className="mb-4  flex border-none">
        <TabsTrigger className="flex-1" value="itemDetails">
          Item Details
        </TabsTrigger>
        <TabsTrigger className="flex-1" value="propertyDetails">
          Property Details
        </TabsTrigger>
        <TabsTrigger className="flex-1" value="itemRemarks">
          Item Remarks
        </TabsTrigger>

        {/* {mode !== 'Create' && (
      <>
        <TabsTrigger className="flex-1" value="purchaseHistory">
          Purchase History
        </TabsTrigger>
        <TabsTrigger className="flex-1" value="loyaltyPoints">
          Loyalty Points
        </TabsTrigger>
      </>
    )} */}
      </TabsList>

      <div className="border p-4 border-black border-solid overflow-y-auto">
        {/* {Item Details Tab} */}
        <TabsContent value="itemDetails">
          <ItemDetailsTab />
        </TabsContent>
        {/* {Property Details} */}
        <TabsContent value="propertyDetails">
          <PropertyDetails />
        </TabsContent>
        {/* {Item Remarks} */}
        <TabsContent value="itemRemarks">
          <ItemRemarksTab />
        </TabsContent>
      </div>
    </Tabs>
    <div className="h-[60px] sticky bottom-0 right-0 flex justify-end items-center">
    <Button type='submit' className="btn btn-primary" onClick={() => closeModal()} >Close</Button>
    </div>
    </>
   
  )
}
export default ItemMasterTab
