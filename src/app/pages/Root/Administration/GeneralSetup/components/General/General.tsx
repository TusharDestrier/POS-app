import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
        <CardDescription>
          Make changes to your account here. Click save when you're done.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="space-y-1">
          <Label htmlFor="pendingSettlement">Pending Settlement Days</Label>
          <Input id="pendingSettlement" defaultValue="Pedro Duarte" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="footfallEntry">Footfall Entry required in Day Settlement</Label>
          <RadioGroup defaultValue="comfortable" className='flex items-center gap-3 '>
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
        <div className="space-y-1">
          <Label htmlFor="maxAllowable">Maximum Allowable Discount Policy Validation</Label>
          <Select>
            <SelectTrigger className="w-[180px]">
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
        <div className="space-y-1">
          <Label htmlFor="maxBillingAmt">Maximum Biling Amount in a Single POS Biling</Label>
          <Input id="maxBillingAmt" defaultValue="Pedro Duarte" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="panNo">PAN No. Mandetiry if Billing Amount Exceeds</Label>
          <Input id="panNo" placeholder="Pan No" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="creditCardDetails">Credit Card Details Capture Policy</Label>
          <Select>
            <SelectTrigger className="w-[180px]">
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
        <div className="space-y-1">
          <Label htmlFor="creditCardDetails">Is Credit Card Authorization No. Entry Mandetory</Label>
          <RadioGroup defaultValue="comfortable">
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
        <div className="space-y-1">
          <Label htmlFor="creditCardDetails">Allow Backdate Entry</Label>
          <RadioGroup defaultValue="comfortable">
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
        <div className="space-y-1">
          <Label htmlFor="maxAllowable">Back Date Entry Days</Label>
          <Input id="backDate" placeholder='Back Date Entry' />
        </div>
        <div className="space-y-1">
          <Label htmlFor="maxAllowable">Negative Stock Checking Mode</Label>
          <Select>
            <SelectTrigger className="w-[180px]">
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
      <CardFooter>
        <Button>Save changes</Button>
      </CardFooter>
    </Card>
  )
}

export default General
