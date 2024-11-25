import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export const PayModeMasterPage = () => {
  return (
    <div
      className="items pe-4 space-y-5 border-e border-solid  
      bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0.9)),url('/Pay_mode.jpg')] 
      bg-no-repeat bg-cover bg-center p-5"
      style={{ filter: 'brightness(1.3)' }} // Adjust brightness using CSS
    >
      {/* Form Fields Section */}
      <div className="grid grid-cols-2 gap-7">
        <div className="space-y-4">
          <Label className="flex flex-col items-start gap-3 text-white" htmlFor="paymode" >
            Payment Mode
            <Input
              type="text"
              placeholder="Enter Payment Mode Name"
              id="paymode"
              className="placeholder-gray-600"
            />
          </Label>
          <Label className="flex flex-col items-start gap-3 text-white" htmlFor="sequence">
            Display Order
            <Input
              type="text"
              placeholder="Enter Display Order"
              id="sequence"
              className="placeholder-gray-600"
            />
          </Label>
          <Label className="flex flex-col items-start gap-3 text-white" htmlFor="shortCode">
            Short Code
            <Input
              type="text"
              placeholder="Enter Short Code"
              id="shortCode"
              className="placeholder-gray-600"
            />
          </Label>
        </div>
        <div>
          {/* Placeholder for Image or Additional Content */}
        </div>
      </div>

      {/* Payment Methods Section */}
      <div className="grid grid-cols-2 items-start">
        <div className="payments">
          <h3 className="heading-secondary mb-3 text-white">Available Payment Methods</h3>
          <RadioGroup
            defaultValue="comfortable"
            className="space-y-1 grid-cols-2 bg-white/70 p-3 rounded-md shadow-md"
          >
            {[
              { id: 'cash', label: 'Cash' },
              { id: 'creditNoteReceived', label: 'Credit Note Received' },
              { id: 'gpay', label: 'Google Pay (GPay)' },
              { id: 'debitNoteIssued', label: 'Debit Note Issued' },
              { id: 'debit', label: 'Debit' },
              { id: 'debitNoteAdjusted', label: 'Debit Note Adjusted' },
            ].map((item) => (
              <div key={item.id} className="flex items-center space-x-2">
                <RadioGroupItem value={item.id} id={item.id} />
                <Label htmlFor={item.id}>{item.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* Payment Conditions Section */}
        <div className="item ml-6 mb-6  text-white" >
          <div className="payments">
            <h3 className="heading-secondary mb-3 text-white">
              Payment Mode-Specific Conditions
            </h3>
            <div className="space-y-3 mb-3 text-white bg-white/70 roun shadow-md p-3">
              {/* Denomination Based Payments */}
              <div className="flex items-center space-x-2 mb-3">
                <Checkbox id="denomination"/>
                <Label htmlFor="denomination" className='text-black'>Accept Denomination-Based Payments</Label>
              </div>
              {/* Reference Details Capturing */}
              <div className="flex items-center space-x-2">
                <Checkbox id="referenceDetails" />
                <Label htmlFor="referenceDetails" className='text-black'>Allow Reference Details Capturing</Label>
              </div>
              {/* Negative Values Only */}
              <div className="flex items-center space-x-2">
                <Checkbox id="negativeValues" />
                <Label htmlFor="negativeValues" className='text-black'>Accept Only Negative Payment Values</Label>
              </div>
              {/* Payment Restriction Conditions */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="paymentRestriction" />
                  <Label htmlFor="paymentRestriction" className='text-black'>Restrict Payments in This Mode When:</Label>
                </div>
                <div className="ml-5">
                  <RadioGroup defaultValue="comfortable">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="itemPromotions" id="itemPromotions" />
                      <Label htmlFor="itemPromotions" className='text-black'>Item-Level Promotions Are Applied</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="billPromotions" id="billPromotions" />
                      <Label htmlFor="billPromotions" className='text-black'>Bill-Level Promotions Are Applied</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="anyPromotions" id="anyPromotions" />
                      <Label htmlFor="anyPromotions" className='text-black'>Any Promotions Are Applied</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              {/* Count Based Payment Transfer */}
              <div className="flex items-center space-x-2">
                <Checkbox id="countBasedPayment" />
                <Label htmlFor="countBasedPayment" className='text-black'>Count-Based Payment Transfers</Label>
              </div>
              {/* Restrict Customer Loyalty Points */}
              <div className="flex items-center space-x-2">
                <Checkbox id="restrictLoyaltyPoints" />
                <Label htmlFor="restrictLoyaltyPoints" className='text-black'>Restrict Customer Loyalty Points</Label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Applicable Currencies Section */}
      <div className="payments">
        <h3 className="heading-secondary mb-3 text-white">Supported Currencies</h3>
        <RadioGroup defaultValue="comfortable" className="space-y-1 bg-white/70 p-3 rounded-md shadow-md">
          {[
            { id: 'rupees', label: 'Indian Rupees (INR)' },
            { id: 'dollars', label: 'US Dollars (USD)' },
            { id: 'euros', label: 'Euros (EUR)' },
            { id: 'pounds', label: 'British Pounds (GBP)' },
          ].map((currency) => (
            <div key={currency.id} className="flex items-center space-x-2">
              <RadioGroupItem value={currency.id} id={currency.id} />
              <Label htmlFor={currency.id}>{currency.label}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};
