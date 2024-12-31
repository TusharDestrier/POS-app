import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { z } from 'zod'

import {
  Promotion,
  usePromotionSelectionListStore,
} from './components/PromotionSelectionList/store/usePromotionSelctionListStore'
import PromotionSelectionModal from './components/PromotionSelectionModal'
import PromotionSelectionTable from './components/PromotionSelectionTable'
import PromotionStoreSelectionTable from './components/PromotionStoreSelectionTable'

import { Button } from '@/components/ui/button'

const promotionSchema = z.object({
  selectedPromotions: z
    .array(
      z.object({
        id: z.string(),
        name: z.string(),
      })
    )
    .nonempty('You must select at least one promotion!'),
  selectedPromotionStores: z.array(
    z.object({
      name: z.string().nonempty('Store name is required'),
      fromDate: z.string().nonempty('From Date is required'), // Use date validation if needed
      toDate: z.string().nonempty('To Date is required'),
      allocationType: z.enum(['normal', 'happy-hour']),
      deallocate: z.boolean(),
    })
  ),
});

function PromotionAllocationPage() {
  const methods = useForm<{
    selectedPromotions: Promotion[];
    selectedPromotionStores: {
      name: string;
      fromDate: string;
      toDate: string;
      allocationType: 'normal' | 'happy-hour';
      deallocate: boolean;
    }[];
  }>({
    defaultValues: {
      selectedPromotions: [],
      selectedPromotionStores: [], // Default as an empty array
    },
    resolver: zodResolver(promotionSchema),
  });

  const { handleSubmit, setValue } = methods

  const selectedPromotions = usePromotionSelectionListStore((state) => state.selectedPromotions)

  useEffect(() => {
    setValue('selectedPromotions', selectedPromotions)
  }, [selectedPromotions, setValue])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log('Form Data:', data)
  }

  return (
    <div className="relative z-30">
      <h3>Promotion Allocation</h3>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 border">
              <h4>Promotions</h4>
              <PromotionSelectionTable />
            </div>
            <div className="p-3 border">
              <PromotionStoreSelectionTable/>
            </div>
          </div>

          <PromotionSelectionModal />
          <div className="mt-4">
            <Button type="submit">Save</Button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default PromotionAllocationPage
