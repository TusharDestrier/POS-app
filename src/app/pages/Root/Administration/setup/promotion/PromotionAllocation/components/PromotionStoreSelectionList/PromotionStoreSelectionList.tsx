import { useFormContext } from "react-hook-form";

import { PromotionStoreType, usePromotionStoreSelectionListStore } from "./store/usePromotionStoreSelectionListStore"
import { usePromotionAllocationStore } from "../../store/usePromotionAllocationStore"

import { Button } from "@/components/ui/button"

function PromotionStoreSelectionList() {
  const { setValue } = useFormContext();
     const promotions = usePromotionStoreSelectionListStore((state) => state.promotions)
      const selectedRowIndex = usePromotionStoreSelectionListStore((state) => state.selectedRowIndex)
      const closeSelector = usePromotionStoreSelectionListStore((state) => state.closeSelector)
      const addSelectedPromotion = usePromotionStoreSelectionListStore((state) => state.addSelectedPromotion)
      const close = usePromotionAllocationStore((state) => state.close2)
    
      const handleSelect = (promotion: PromotionStoreType) => {
        if (selectedRowIndex !== null) {
            // Update Zustand store
            addSelectedPromotion(selectedRowIndex, promotion);
    
            // Update react-hook-form field
            const currentStores = usePromotionStoreSelectionListStore.getState().selectedPromotions;
            setValue("selectedPromotionStores", currentStores);
        }
        closeModal();
    };
    
      function closeModal() {
        closeSelector()
        close()
        usePromotionStoreSelectionListStore.getState().addSelectedPromotion(-1, undefined)
      }
  return (
  <div className="border p-4 mt-4">
    <ul>
      {promotions.map((promo) => (
        <li key={promo.id} className="flex justify-between items-center">
          <span>{promo.name}</span>
          <Button className="text-blue-600" onClick={() => handleSelect(promo)}>
            Select
          </Button>
        </li>
      ))}
    </ul>
  </div> 
  )
}

export default PromotionStoreSelectionList