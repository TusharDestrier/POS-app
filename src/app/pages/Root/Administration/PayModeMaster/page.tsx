//import { RightArr } from '@/assets/icons'
//import { Button } from '@/components/ui/button'
//import { DialogClose, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export const PayModeMasterPage = () => {
  return (
    <div className="grid grid-cols-2  items-start  ">
      <div className="items pe-4 space-y-5 border-e border-solid border-gray-100">
        <Label className=" flex flex-col items-start gap-3" htmlFor="paymode">
          PayMode
          <Input type="text" placeholder="PayMode" id="paymode" />
        </Label>
        <Label className=" flex flex-col items-start gap-3" htmlFor="paymode">
          Sequence
          <Input type="text" placeholder="PayMode" id="paymode" />
        </Label>
        <Label className=" flex flex-col items-start gap-3" htmlFor="paymode">
          Short Code
          <Input type="text" placeholder="PayMode" id="paymode" />
        </Label>
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
        <div className="">
          <h3 className="heading-secondary mb-3"> Pay Mode Wise Applicable Conditions</h3>

          <RadioGroup defaultValue="comfortable " className="space-y-1 m-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="denomination" id="r10" />
              <Label htmlFor="r10">Accept denomination based payment</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="reference" id="r11" />
              <Label htmlFor="r11">Allow reference details capturing</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="negative" id="r12" />
              <Label htmlFor="r12">Accept negative values only</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="accpet" id="r13" />
              <Label htmlFor="r13">Do not accpet payment in this mode when:</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="countBased" id="r14" />
              <Label htmlFor="r14">Count based payment transfer and session closure</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="customer" id="r15" />
              <Label htmlFor="r15">Restrict customer loyalty points for this mode of payment</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
      <div className="item ml-6 mb-6">
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
      <div className="item ml-6 mb-6">
        Pay Mode Wise Applicable Conditions
        <RadioGroup defaultValue="comfortable " className="space-y-1 m-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="denomination" id="r10" />
            <Label htmlFor="r10">Accept denomination based payment</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="reference" id="r11" />
            <Label htmlFor="r11">Allow reference details capturing</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="negative" id="r12" />
            <Label htmlFor="r12">Accept negative values only</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="accpet" id="r13" />
            <Label htmlFor="r13">Do not accpet payment in this mode when:</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="count" id="r14" />
            <Label htmlFor="r14">Count based payment transfer and session closure</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Restrict" id="r15" />
            <Label htmlFor="r15">Restrict customer loyalty points for this mode of payment</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}
