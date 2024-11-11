import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

function POSBill() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>POS Bill</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start justify-between">
          <h3>Allow Item Level Discount </h3>
          <RadioGroup defaultValue="comfortable" className="flex items-center gap-3">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes" />
              <Label htmlFor="yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="yes" />
              <Label htmlFor="no">No</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="flex items-start justify-between">
          <h3>Allow Bill Level Discount </h3>
          <RadioGroup defaultValue="comfortable" className="flex items-center gap-3">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes" />
              <Label htmlFor="yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="yes" />
              <Label htmlFor="no">No</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="flex items-start justify-between">
          <h3> Maximum Allowable Discount Percentage</h3>
          <div>maximum 99%</div>
        </div>

        <div className="flex items-start justify-between">
          <h3> Allow to Select Active Promotion from List </h3>
          <RadioGroup defaultValue="comfortable" className="flex items-center gap-3">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes" />
              <Label htmlFor="yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="yes" />
              <Label htmlFor="no">No</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="flex items-start justify-between">
          <h3> Allow to Clear Applied Promotion </h3>
          <RadioGroup defaultValue="comfortable" className="flex items-center gap-3">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes" />
              <Label htmlFor="yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="yes" />
              <Label htmlFor="no">No</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="flex items-start justify-between">
          <h3>Sale Person Tagging Mandetory </h3>
          <RadioGroup defaultValue="comfortable" className="flex items-center gap-3">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes" />
              <Label htmlFor="yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="yes" />
              <Label htmlFor="no">No</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="flex items-start justify-between">
          <h3> Sale Person Tagging Policy</h3>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select level" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="itemLevel">Item Level</SelectItem>
                <SelectItem value="billLevel">Bill Level</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-start justify-between">
          <h3>Customer Tagging is Manedory</h3>
          <RadioGroup defaultValue="comfortable" className="flex items-center gap-3">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes" />
              <Label htmlFor="yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="yes" />
              <Label htmlFor="no">No</Label>
            </div>
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  )
}

export default POSBill
