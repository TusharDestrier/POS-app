import { Button } from "@/components/ui/button"
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

function CreditNote() {
  return (
    <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col items-start justify-between">
              <Label htmlFor="returnItem">Return of Item within</Label>
              <Input id="returnItem" placeholder="Return of Item within" className="w-full mt-3" />
            </div>
            <div className="flex flex-col items-start justify-between">
              <Label htmlFor="cnvd">Credit Note Validdity Days</Label>
              <Input id="cnvd" placeholder="Credit Note Validdity Days" className="w-full mt-3"/>
            </div>
            <div className="flex flex-col items-start justify-between">
              <Label htmlFor="cnvd">Bill Tagging Mandetory during Retuen</Label>
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
            <div className="flex flex-col items-start justify-between">
              <Label htmlFor="cnvd">No. of Copies to be Print </Label>
              <Input id="ncp" placeholder="No. of Copies to be Print" className="w-full mt-3"/>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
  )
}

export default CreditNote