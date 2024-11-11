import {
  Card,
  CardContent,
  //CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const General = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>General</CardTitle>
        {/* <CardDescription>
          Make changes to your account here. Click save when you're done.
        </CardDescription> */}
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col items-start justify-between">
          <Label htmlFor="pendingSettlement">Pending Settlement Days</Label>
          <Input id="pendingSettlement" placeholder='Pending Settlement Day' className="w-full mt-3" />
        </div>
        <div className="flex flex-col items-start justify-between">
          <Label htmlFor="footfallEntry">Footfall Entry required in Day Settlement</Label>
          <RadioGroup defaultValue="comfortable" className="flex items-center gap-3 mt-3">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2">No</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="flex flex-col items-start justify-between">
          <Label htmlFor="maxAllowable">Maximum Allowable Discount Policy Validation</Label>
          <Select>
            <SelectTrigger className="w-full mt-3">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col items-start justify-betweenn">
          <Label htmlFor="maxBillingAmt">Maximum Biling Amount in a Single POS Biling</Label>
          <Input id="maxBillingAmt" defaultValue="Pedro Duarte" className="w-full mt-3"/>
        </div>
        <div className="flex flex-col items-start justify-betweenn">
          <Label htmlFor="panNo">PAN No. Mandetiry if Billing Amount Exceeds</Label>
          <Input id="panNo" placeholder="Pan No" className="w-full mt-3"/>
        </div>
        <div className="flex flex-col items-start justify-betweenn">
          <Label htmlFor="creditCardDetails">Credit Card Details Capture Policy</Label>
          <Select>
            <SelectTrigger className="w-full mt-3">
              <SelectValue placeholder="Select credit Card Option" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col items-start justify-betweenn">
          <Label htmlFor="creditCardDetails">Is Credit Card Authorization No. Entry Mandetory</Label>
          <RadioGroup defaultValue="comfortable" className="flex items-center gap-3 mt-3">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="default" id="r1" className="flex items-center gap-3"/>
              <Label htmlFor="r1">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2">No</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="flex flex-col items-start justify-between">
          <Label htmlFor="creditCardDetails">Allow Backdate Entry</Label>
          <RadioGroup defaultValue="comfortable" className="flex items-center gap-3 w-full mt-3">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2">No</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="flex flex-col items-start justify-between">
          <Label htmlFor="maxAllowable">Back Date Entry Days</Label>
          <Input id="backDate" placeholder='Back Date Entry' className='w-full mt-3' />
        </div>
        <div className="flex flex-col items-start justify-between">
          <Label htmlFor="maxAllowable">Negative Stock Checking Mode</Label>
          <Select>
            <SelectTrigger className="w-full mt-3">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Choose Any One</SelectLabel>
                <SelectItem value="apple">Stop</SelectItem>
                <SelectItem value="banana">Ignore</SelectItem>
                <SelectItem value="blueberry">Notify</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select> 
        </div>
      </CardContent>
    </Card>
  )
}

export default General
