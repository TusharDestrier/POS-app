import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

function GoodsReceiptReturn() {
  return (
    <Card>
          <CardHeader>
            <CardTitle>Goods Receipt Return</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col items-start justify-between">
              <Label htmlFor="egr">Excess Goods Receipt Tollarence Percentage</Label>
              <Input id="egr" placeholder="Excess Goods Receipt Tollarence Percentage" className="w-full mt-3" />
            </div>
            <div className="flex flex-col items-start justify-between">
              <Label htmlFor="sgr">Short Goods Receipt Tollerance Percentage</Label>
              <Input id="sgr" placeholder="Short Goods Receipt Tollerance Percentage" className="w-full mt-3"/>
            </div>
            <div className="flex flex-col items-start justify-between">
            <Label htmlFor="ardg">Allow to Receive Damage Goods</Label> 
            <RadioGroup defaultValue="comfortable" className="flex items-center gap-3 w-full mt-3">
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

export default GoodsReceiptReturn