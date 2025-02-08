import { useFormContext } from "react-hook-form";

import { PromotionStoreType, usePromotionStoreSelectionListStore } from "./store/usePromotionStoreSelectionListStore";
import { usePromotionAllocationStore } from "../../store/usePromotionAllocationStore";

import { Button } from "@/components/ui/button";

function PromotionStoreSelectionList() {
  const { getValues, setValue } = useFormContext();
  const promotions = usePromotionStoreSelectionListStore((state) => state.promotions);
  const selectedRowIndex = usePromotionStoreSelectionListStore((state) => state.selectedRowIndex);
  const closeSelector = usePromotionStoreSelectionListStore((state) => state.closeSelector);
  const close = usePromotionAllocationStore((state) => state.close2);

  const handleSelect = (promotion: PromotionStoreType) => {
    if (selectedRowIndex !== null) {
      // Get current values of the form
      
      const currentStores = getValues("selectedPromotionStores") || [];

      // Update the specific row with the selected promotion's id and name
      currentStores[selectedRowIndex] = {
        ...currentStores[selectedRowIndex], // Preserve other fields
        id: promotion.id,
        name: promotion.name,
      };

      // Update react-hook-form state
      setValue("selectedPromotionStores", currentStores, { shouldValidate: true });
    }

    closeModal();
  };

  // const handlePromotionSelection = (index: number, promotion: { id: string; name: string }) => {
  //   const currentStores = getValues("selectedPromotionStores") || [];

  //   // Update the selected row with the promotion's ID and name
  //   currentStores[index] = {
  //     ...currentStores[index], // Preserve other fields
  //     id: promotion.id,
  //     name: promotion.name,
  //   };

  //   setValue("selectedPromotionStores", currentStores, { shouldValidate: true });
  // };

  function closeModal() {
    closeSelector();
    close();
  }

  return (
    <div className="border p-4 mt-4">
      <ul className="space-y-3">
        {promotions.map((promo) => (
          <li key={promo.id} className="flex justify-between items-center">
            <span>{promo.name}</span>
            <Button className="text-white" onClick={() => handleSelect(promo)}>
              Select
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PromotionStoreSelectionList;
