import PromotionFormAssortmentTable from '../PromotionFormAssortmentTable'
import PromotionFormDiscountTable from '../PromotionFormDiscountTable'

import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

function PromotionForm2() {
  return (
    <div className="grid grid-cols-2 gap-4 h-full">
      <div className='border rounded p-4'>
        <div className="mb-10">
          <h3 className="font-semibold text-md mb-3">Paid for condition</h3>
          <RadioGroup defaultValue="option-one" className='roles-radio ms-4'>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Buy any{' '}
              <input className="w-10 mx-1 border border-black text-center" type="number" accept=''  />{' '}
              Quantiy From Assort</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Buy specific Qunatity in Ratio from Assortment</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-three" id="option-three" />
              <Label htmlFor="option-three">Buy any Qunatity from Assortment</Label>
            </div>
          </RadioGroup>
          
        </div>
        <div>
          <h3 className="font-semibold text-md mb-1">Buy Assortment</h3>
          <PromotionFormAssortmentTable />
        </div>
      </div>

      <div className='border rounded p-4'>
      <div className="mb-10">
          <h3 className="font-semibold text-md mb-3">Benefit Type</h3>
          <RadioGroup defaultValue="option-one" className='roles-radio ms-4'>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Flat Discount</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Specific Unit From Paid From Assorment</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-three" id="option-three" />
              <Label htmlFor="option-three">Specific Unit From Benefit  Assorment</Label>
            </div>
          </RadioGroup>
          
        </div>
        <div>
        <h3 className="font-semibold text-md mb-3">Discount Type</h3>
        <PromotionFormDiscountTable/>
        </div>
      </div>
    </div>
  )
}

export default PromotionForm2
