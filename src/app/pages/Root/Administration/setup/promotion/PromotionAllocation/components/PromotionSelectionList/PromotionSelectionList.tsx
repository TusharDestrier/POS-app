import { Promotion, usePromotionSelectionListStore } from './store/usePromotionSelctionListStore'
import { usePromotionAllocationStore } from '../../store/usePromotionAllocationStore'

import { Button } from '@/components/ui/button'

function PromotionSelectionList() {
  const promotions = usePromotionSelectionListStore((state) => state.promotions)
  const selectedRowIndex = usePromotionSelectionListStore((state) => state.selectedRowIndex)
  const closeSelector = usePromotionSelectionListStore((state) => state.closeSelector)
  const addSelectedPromotion = usePromotionSelectionListStore((state) => state.addSelectedPromotion)
  const close = usePromotionAllocationStore((state) => state.close)

  const handleSelect = (promotion: Promotion) => {
    if (selectedRowIndex !== null) {
      addSelectedPromotion(selectedRowIndex, promotion)
    }
    closeModal()
  }

  function closeModal() {
    closeSelector()
    close()
    usePromotionSelectionListStore.getState().addSelectedPromotion(-1, undefined)
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

export default PromotionSelectionList
