import { useFormContext } from 'react-hook-form'

import PaidForCondition from '../PaidForCondition'
import PromotionBenefit from '../PrmotionBenefit/PromotionBenefit'
import PromotionFormAssortmentTable from '../PromotionFormAssortmentTable'
import PromotionFormDiscountTable from '../PromotionFormDiscountTable'

function PromotionForm2() {
  const formMethods = useFormContext()

  const promotionType = formMethods.watch('promotionType')

  console.log(promotionType)

  return (
    <div className="grid grid-cols-2 gap-4 h-full">
      <div className="border rounded p-4">
        <div className="mb-10">
          {promotionType === 'freequantityBenefit' && <PaidForCondition />}
        </div>
        <div>
          <PromotionFormAssortmentTable />
        </div>
      </div>

      <div className="border rounded p-4">
        <div className="mb-10">
          <h3 className="font-semibold text-md mb-3">Benefit Type</h3>
          <PromotionBenefit />
        </div>

        {promotionType === 'quantityslabBenefit' && (
          <div className="mb-10">
            <h3 className="font-semibold text-md mb-3">Benefit Type</h3>{' '}
          </div>
        )}
        {promotionType === 'billvalueslabBenefit' && (
          <div className="mb-10">
            <h3 className="font-semibold text-md mb-3">Define Bill Amount Base Slab</h3>{' '}
          </div>
        )}

        <div>
          <h3 className="font-semibold text-md mb-3">Discount Type</h3>
          <PromotionFormDiscountTable />
        </div>
      </div>
    </div>
  )
}

export default PromotionForm2
