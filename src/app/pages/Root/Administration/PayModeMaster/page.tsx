//import { RightArr } from '@/assets/icons'
//import { Button } from '@/components/ui/button'
//import { DialogClose, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import Image from './Image/pay_Image.jpg'
//import Image from './Image/paymode.jpg'

import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export const PayModeMasterPage = () => {
  return (
    <div className="items pe-4 space-y-5 border-e border-solid border-gray-100">
      <div className='grid grid-cols-2 gap-7'>
      <div className='space-y-4'>
    <Label className=" flex flex-col items-start gap-3" htmlFor="paymode">
      PayMode
      <Input type="text" placeholder="PayMode" id="paymode" />
    </Label>
    <Label className=" flex flex-col items-start gap-3" htmlFor="paymode">
      Sequence
      <Input type="text" placeholder="Sequence" id="sequence" />
    </Label>
    <Label className=" flex flex-col items-start gap-3" htmlFor="paymode">
      Short Code
      <Input type="text" placeholder="Short Code" id="shortCode" />
    </Label>
    </div>
    <div>
      {/* <h1>Image</h1> */}
    <img src={Image} alt='PayMode' width={"390px"}></img>
    </div>
      </div>
     
    <div className='grid grid-cols-2  items-start '>
      <div className="payments">
        <h3 className="heading-secondary mb-3">Select Payement Methods</h3>
        <RadioGroup defaultValue="comfortable " className="space-y-1 grid-cols-2">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="cash" id="r1" />
            <Label htmlFor="r1">Cash</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="ceditNoteReceived" id="r6" />
            <Label htmlFor="r3">Credit Note Received</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="gpay" id="r3" />
            <Label htmlFor="r3">GPay</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="debitNoteIssued" id="r8" />
            <Label htmlFor="r8">Debit Note Issued</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="debit" id="r4" />
            <Label htmlFor="r4">Debit</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="debitNoteAdjusted" id="r9" />
            <Label htmlFor="r9">Debit Note Adjusted</Label>
          </div>
        </RadioGroup>
      </div>
      <div className="item ml-6 mb-6">
      <div className="payments">
        <h3 className="heading-secondary mb-3">Pay Mode Wise Applicable Conditions</h3>
        <div className="space-y-3">
          {/* Denomination Based Payments */}
          <div className="flex items-center space-x-2">
            <Checkbox id="denomination" />
            <Label
              htmlFor="denomination"
              className="text-sm font-normal  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept Denomination based payments
            </Label>
          </div>
          {/* Reference Details Capturing */}
          <div className="flex items-center space-x-2">
            <Checkbox id="reference-details" />
            <Label
              htmlFor="reference-details"
              className="text-sm font-normal= leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Allow reference details capturing
            </Label>
          </div>
          {/* Negative Values Only */}
          <div className="flex items-center space-x-2">
            <Checkbox id="negative-values" />
            <Label
              htmlFor="negative-values"
              className="text-sm font-normal= leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept negative Values only
            </Label>
          </div>
          {/* Payment Restriction Conditions */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="payment-restriction" />
              <Label
                htmlFor="payment-restriction"
                className="text-sm font-normal= leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Do not accept payment in this mode when:
              </Label>
            </div>
            <div className="ml-5">
              <RadioGroup defaultValue="comfortable">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="default" id="promotion-item-level" />
                  <Label htmlFor="promotion-item-level">Item level Promotions are applied</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="comfortable" id="promotion-bill-level" />
                  <Label htmlFor="promotion-bill-level">Bill level promotions are applied</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="compact" id="promotion-any" />
                  <Label htmlFor="promotion-any">Any promotions are applied</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          {/* Count Based Payment Transfer */}
          <div className="flex items-center space-x-2">
            <Checkbox id="count-based-payment" />
            <Label
              htmlFor="count-based-payment"
              className="text-sm font-normal= leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Count based payment transfer and session closure
            </Label>
          </div>
          {/* Restrict Customer Loyalty Points */}
          <div className="flex items-center space-x-2">
            <Checkbox id="restrict-loyalty-points" />
            <Label
              htmlFor="restrict-loyalty-points"
              className="text-sm font-normal= leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Restrict customer loyalty points for this mode of payment
            </Label>
          </div>
        </div>
      </div>
     </div>
    </div>
    <div className="payments">
      <h3 className="heading-secondary mb-3">Applicable Currencies</h3>
      <RadioGroup defaultValue="comfortable " className="space-y-1">
        <div className="flex items-center space-x-2">
          <Label htmlFor="r1">Rupees</Label>
          <RadioGroupItem value="cash" id="r1" />
        </div>
        <div className="flex items-center space-x-2">
          <Label htmlFor="r2">Dollar</Label>
          <RadioGroupItem value="credit" id="r2" />
        </div>
        <div className="flex items-center space-x-4">
          <Label htmlFor="r3">Euro</Label>
          <RadioGroupItem value="gpay" id="r3" />
        </div>
        <div className="flex items-center space-x-2">
          <Label htmlFor="r4">Pound</Label>
          <RadioGroupItem value="debit" id="r4" />
        </div>
      </RadioGroup>
    </div>
  </div>
  )
}
