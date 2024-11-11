import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

function PosOrder() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pos Order</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col items-start justify-between">
          <Label htmlFor="dueDate">Due Date is Mandetory in POS Order</Label>
          <RadioGroup className="flex items-center gap-3 w-full mt-3">
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
        <div className="flex flex-col items-start justify-between">
          <Label htmlFor="mpa">Minimum Percentage of Advance during POS Order</Label>
          <Input
            id="mpa"
            placeholder="Minimum Percentage of Advance during POS Order"
            className="w-full mt-3"
          />
        </div>
        <div className="flex flex-col items-start justify-between">
          <Label htmlFor="cnvd">POS Order Cancellation is Mandetory</Label>
          <RadioGroup className="flex items-center gap-3 w-full mt-3">
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

export default PosOrder
