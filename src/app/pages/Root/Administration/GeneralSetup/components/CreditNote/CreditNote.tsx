import { useFormContext } from 'react-hook-form'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'


const CreditNote = () => {
  const { control } = useFormContext()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Credit Note</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <FormField
          control={control}
          name="returnItem"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Return of Item within</FormLabel>
              <FormControl>
                <Input {...field} id="returnItem" placeholder="Return of Item within" className="w-full mt-3" />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="creditNoteValidityDays"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Credit Note Validity Days</FormLabel>
              <FormControl>
                <Input {...field} id="cnvd" placeholder="Credit Note Validity Days" className="w-full mt-3" />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="billTaggingMandatory"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bill Tagging Mandatory during Return</FormLabel>
              <FormControl>
                <RadioGroup {...field} className="flex items-center gap-3 w-full mt-3">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="billTagYes" />
                    <Label htmlFor="billTagYes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="billTagNo" />
                    <Label htmlFor="billTagNo">No</Label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="numberOfCopiesPrint"
          render={({ field }) => (
            <FormItem>
              <FormLabel>No. of Copies to be Print</FormLabel>
              <FormControl>
                <Input {...field} id="ncp" placeholder="No. of Copies to be Print" className="w-full mt-3" />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  )
}

export default CreditNote
