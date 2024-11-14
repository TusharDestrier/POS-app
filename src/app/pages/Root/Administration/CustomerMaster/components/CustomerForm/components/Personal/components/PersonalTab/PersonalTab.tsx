import { format } from 'date-fns'
// eslint-disable-next-line import/order
import { useFormContext } from 'react-hook-form'
//import { z } from 'zod'

// import { validators } from 'tailwind-merge'
// import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
//import { Checkbox } from '@/components/ui/checkbox'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

function PersonalTab() {
  const { control } = useFormContext();


  return (
    <div className=" space-y-8">
    <div className="space-y-2 ">
      <FormField
        control={control}
        name="personal.mobileNo"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Mobile No. <span className="text-primary">*</span></FormLabel>
            <FormControl>
              <Input placeholder="Enter Mobile No." {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="flex space-x-4">
        <FormField
          control={control}
          name="personal.firstName"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="First Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="personal.middleName"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Middle Name</FormLabel>
              <FormControl>
                <Input placeholder="Middle Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="personal.lastName"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Last Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="grid grid-cols-2 gap-3 items-center">
        <FormField
          control={control}
          name="personal.gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gender</FormLabel>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex  space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" />
                  <FormLabel htmlFor="male">Male</FormLabel>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" />
                  <FormLabel htmlFor="female">Female</FormLabel>
                </div>
              </RadioGroup>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <FormField
          control={control}
          name="isEmployee"
          render={({ field }) => (
            <FormItem className="flex items-center gap-3">
              <FormLabel>Is Employee</FormLabel>
              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              <FormMessage />
            </FormItem>
          )}
        /> */}
      </div>

      <div className="flex space-x-4">
        <FormField
          control={control}
          name="personal.dateOfBirth"
          render={({ field }) => (
            <FormItem className="flex-1 flex gap-3 items-center">
              <FormLabel>Date of Birth</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button variant="outline" className="w-40">
                      {field.value ? format(field.value, 'yyyy-MM-dd') : 'Select Date'}
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent>
                  <Calendar selected={field.value} onSelect={field.onChange} />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="personal.anniversaryDate"
          render={({ field }) => (
            <FormItem className="flex-1 flex gap-3 items-center">
              <FormLabel>Anniversary Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button variant="outline" className="w-40">
                      {field.value ? format(field.value, 'yyyy-MM-dd') : 'Select Date'}
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent>
                  <Calendar selected={field.value} onSelect={field.onChange} />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="grid grid-cols-2 gap-3 ">
        <FormField
          control={control}
          name="personal.profession"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Profession</FormLabel>
              <FormControl>
                <Input placeholder="Enter Profession" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="personal.spouseName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Spouse Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter Spouse Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
    <div className="space-y-3 ">
      <h3 className="text-lg font-semibold">Statutory Information</h3>

      <div className="flex gap-3 items-center">
        <FormField
          control={control}
          name="personal.panNo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>PAN No.</FormLabel>
              <FormControl>
                <Input placeholder="Enter PAN No." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="perosnal.gstNo"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>GST No.</FormLabel>
              <FormControl>
                <Input placeholder="Enter GST No." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="personal.gstDate"
          render={({ field }) => (
            <FormItem className="flex-1 flex  flex-col">
              <FormLabel>Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button variant="outline">
                      {field.value ? format(field.value, 'yyyy-MM-dd') : 'Select Date'}
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent>
                  <Calendar selected={field.value} onSelect={field.onChange} />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  </div>
  )
}

export default PersonalTab
