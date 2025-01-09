import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, useFieldArray } from 'react-hook-form'
import { z } from 'zod'

import { promotionPrioritySetupSchema } from './schema'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const PromotionPrioritySetupTable = () => {
  const form = useForm({
    resolver: zodResolver(promotionPrioritySetupSchema),
    defaultValues: {
      rows: [
        {
          promotionName: 'Debmalya Mukherjee',
          fromDate: '1990-01-01', 
          toDate: '2000-03-09', 
          priority: '1',
          active: true,
          approvedUser: false,
          roles: 'Accountant',
          assignedCompanies: ['TEST', 'BARASAT'],
          assignedBranches: ['UNIT - 4', 'UNIT - 5'],
        },
      ],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'rows', // Specify the field array name
  })

  const onSubmit = (data: z.infer<typeof promotionPrioritySetupSchema>) => {
    console.log('Form submitted:', data)
  }

  const addRow = () => {
    append({
      promotionName: '',
      fromDate: '',
      toDate: '',
      priority: '',
      active: true,
      approvedUser: false,
      roles: '',
      assignedCompanies: [],
      assignedBranches: [],
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {fields.map((field, index) => (
          <div key={field.id} className="grid grid-cols-4 gap-4">
            {/* Promotion Name */}
            <FormField
              name={`rows.${index}.promotionName`}
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Promotion Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Promotion Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* From Date */}
            <FormField
              name={`rows.${index}.fromDate`}
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>From Date</FormLabel>
                  <FormControl>
                    <Input type="date" placeholder="From Date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* To Date */}
            <FormField
              name={`rows.${index}.toDate`}
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>To Date</FormLabel>
                  <FormControl>
                    <Input type="date" placeholder="To Date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Priority */}
            <FormField
              name={`rows.${index}.priority`}
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Priority</FormLabel>
                  <FormControl>
                    <Input placeholder="Priority" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

         {/* Actions (Add/Remove Buttons) */}
         <div className="flex gap-2">
              <Button
                type="button"
                variant="secondary"
                onClick={() => remove(index)}
              >
                Remove
              </Button>
              {index === fields.length - 1 && (
                <Button type="button" onClick={addRow}>
                  Add Row
                </Button>
              )}
            </div>
          </div>
        ))}


        <div className="flex justify-end gap-4">
          <Button type="submit">Save</Button>
          <Button type="button">Cancel</Button>
        </div>
      </form>
    </Form>
  )
}

export default PromotionPrioritySetupTable
