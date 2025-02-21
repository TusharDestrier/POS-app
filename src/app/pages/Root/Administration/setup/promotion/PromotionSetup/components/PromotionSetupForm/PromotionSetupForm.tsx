import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'

import { promotionSetupSchema } from '../../schema'
import { usePromotionSetupStore } from '../../store/usePromotionSetupStore'
import PromotionForm1 from '../PromotionForm1'
import PromotionForm2 from '../PromotionForm2'

import { Button } from '@/components/ui/button'


function PromotionSetupForm() {
  const next = usePromotionSetupStore((state) => state.next)
  const prev = usePromotionSetupStore((state) => state.prev)
  const closeModal = usePromotionSetupStore((state) => state.close)
  const step = usePromotionSetupStore((state) => state.step)

  const formMethods = useForm({
    resolver: zodResolver(promotionSetupSchema),
    defaultValues: {
      promotionId: '',
      promotionName: '',
      details: '',
      appliedOn: '',
      promotionType: '',
      inactive: false,
      promotionParameters: {
        paidForCondition: {
          condition: 'buyAny', // Default condition
          quantity: undefined, // Default field for "buyAny"
        },
        buyAssortments: [],
        benefitType: {
          type: "flatDiscount", // Default to "flatDiscount"
        },
        discountTypes:  {
          selectedDiscount: '',
          types: [
            {
              isSelected: false,
              type: "",
              discountOn: "",
              comparison: "",
              from: "",
              to: "",
            },
            {
              isSelected: false,
              type: "",
              discountOn: "",
              comparison: "",
              from: "",
              to: "",
            },
            {
              isSelected: false,
              type: "",
              discountOn: "",
              comparison: "",
              from: "",
              to: "",
            },
          ],
        },  
      },
    },
    
  })

  // Handle form submission
  const onSubmit = formMethods.handleSubmit(
    (data) => {
      console.log('Form Data Submitted: ', data) // Logs if submission is successful
    },
    (errors) => {
      console.log('Validation Errors: ', errors) // Logs validation errors, if any
    }
  )

  return (
    <FormProvider {...formMethods}>
      <form
        className=""
        onSubmit={(e) => {
          e.preventDefault() // Ensure default form submission behavior is prevented
          onSubmit() // Trigger submission
        }}
      >
        {step === 1 && <PromotionForm1 />}
        {step === 2 && <PromotionForm2 />}

        <div className=" h-[100px] mt-5 self-end  flex flex-col  items-end space-y-3 ">
          {step === 1 && (
            <Button type="button" className=" btn btn-primary" onClick={() => next()}>
              Promotion Parameters
            </Button>
          )}
          <div className="flex gap-3">
            <Button
              type={step === 1 ? 'submit' : 'button'}
              className=" btn btn-primary"
              onClick={() => (step === 2 ? prev() : null)}
            >
              Save
            </Button>
            <Button
              type="reset"
              className="btn btn-primary"
              onClick={() => {
                prev()
                closeModal()
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  )
}

export default PromotionSetupForm
