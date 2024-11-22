import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export const PayModeMasterPage = () => {
  return (
    <div className="items pe-4 space-y-5 border-e border-solid border-gray-100 bg-[linear-gradient(to_right_bottom,rgba(129,84,44,0.8),rgba(49,84,44,0.8)),url('/Pay_mode.jpg')] bg-no-repeat p-5 bg-cover ">
      {/* Form Fields Section */}
      <div className='grid grid-cols-2 gap-7'>
        <div className='space-y-4'>
          <Label className="flex flex-col items-start gap-3" htmlFor="paymode">
            Payment Mode
            <Input type="text" placeholder="Enter Payment Mode Name" id="paymode" />
          </Label>
          <Label className="flex flex-col items-start gap-3" htmlFor="sequence">
            Display Order
            <Input type="text" placeholder="Enter Sequence Number" id="sequence" />
          </Label>
          <Label className="flex flex-col items-start gap-3" htmlFor="shortCode">
            Short Code
            <Input type="text" placeholder="Enter Short Code" id="shortCode" />
          </Label>
        </div>
        <div>
          {/* Placeholder for Image or Additional Content */}
        </div>
      </div>

      {/* Payment Methods Section */}
      <div className='grid grid-cols-2 items-start'>
        <div className="payments">
          <h3 className="heading-secondary mb-3">Available Payment Methods</h3>
          <RadioGroup defaultValue="comfortable " className="space-y-1 grid-cols-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="cash" id="cash" />
              <Label htmlFor="cash">Cash</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="creditNoteReceived" id="creditNoteReceived" />
              <Label htmlFor="creditNoteReceived">Credit Note Received</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="gpay" id="gpay" />
              <Label htmlFor="gpay">Google Pay (GPay)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="debitNoteIssued" id="debitNoteIssued" />
              <Label htmlFor="debitNoteIssued">Debit Note Issued</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="debit" id="debit" />
              <Label htmlFor="debit">Debit</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="debitNoteAdjusted" id="debitNoteAdjusted" />
              <Label htmlFor="debitNoteAdjusted">Debit Note Adjusted</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Payment Conditions Section */}
        <div className="item ml-6 mb-6">
          <div className="payments">
            <h3 className="heading-secondary mb-3">Payment Mode-Specific Conditions</h3>
            <div className="space-y-3">
              {/* Denomination Based Payments */}
              <div className="flex items-center space-x-2">
                <Checkbox id="denomination" />
                <Label htmlFor="denomination">Accept Denomination-Based Payments</Label>
              </div>
              {/* Reference Details Capturing */}
              <div className="flex items-center space-x-2">
                <Checkbox id="referenceDetails" />
                <Label htmlFor="referenceDetails">Allow Reference Details Capturing</Label>
              </div>
              {/* Negative Values Only */}
              <div className="flex items-center space-x-2">
                <Checkbox id="negativeValues" />
                <Label htmlFor="negativeValues">Accept Only Negative Payment Values</Label>
              </div>
              {/* Payment Restriction Conditions */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="paymentRestriction" />
                  <Label htmlFor="paymentRestriction">Restrict Payments in This Mode When:</Label>
                </div>
                <div className="ml-5">
                  <RadioGroup defaultValue="comfortable">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="itemPromotions" id="itemPromotions" />
                      <Label htmlFor="itemPromotions">Item-Level Promotions Are Applied</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="billPromotions" id="billPromotions" />
                      <Label htmlFor="billPromotions">Bill-Level Promotions Are Applied</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="anyPromotions" id="anyPromotions" />
                      <Label htmlFor="anyPromotions">Any Promotions Are Applied</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              {/* Count Based Payment Transfer */}
              <div className="flex items-center space-x-2">
                <Checkbox id="countBasedPayment" />
                <Label htmlFor="countBasedPayment">Count-Based Payment Transfers</Label>
              </div>
              {/* Restrict Customer Loyalty Points */}
              <div className="flex items-center space-x-2">
                <Checkbox id="restrictLoyaltyPoints" />
                <Label htmlFor="restrictLoyaltyPoints">Restrict Customer Loyalty Points</Label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Applicable Currencies Section */}
      <div className="payments">
        <h3 className="heading-secondary mb-3">Supported Currencies</h3>
        <RadioGroup defaultValue="comfortable" className="space-y-1">
          <div className="flex items-center space-x-2">
            <Label htmlFor="rupees">Indian Rupees (INR)</Label>
            <RadioGroupItem value="rupees" id="rupees" />
          </div>
          <div className="flex items-center space-x-2">
            <Label htmlFor="dollars">US Dollars (USD)</Label>
            <RadioGroupItem value="dollars" id="dollars" />
          </div>
          <div className="flex items-center space-x-4">
            <Label htmlFor="euros">Euros (EUR)</Label>
            <RadioGroupItem value="euros" id="euros" />
          </div>
          <div className="flex items-center space-x-2">
            <Label htmlFor="pounds">British Pounds (GBP)</Label>
            <RadioGroupItem value="pounds" id="pounds" />
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};
