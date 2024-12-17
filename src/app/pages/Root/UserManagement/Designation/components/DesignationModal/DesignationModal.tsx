import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useDesignationStore } from '../../store/userDesignation'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
//import { Label } from '@/components/ui/label'

const formSchema = z.object({
  designationCode: z.string().min(2, {
    message: 'Designation Code must be at least 2 characters.',
  }),
  designationName: z.string().min(2, {
    message: 'Designation Name must be at least 2 characters.',
  }),
})

function DesignationModal() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      designationCode: '',
      designationName: '',
    },
  })

  const mode = useDesignationStore((state) => state.mode)
  const isOpen = useDesignationStore((state) => state.isOpen)
  const close = useDesignationStore((state) => state.close)
  const modalMode = useDesignationStore((state) => state.mode)

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{mode} Designation Master</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="designationCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Designation Code</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Designation Code"
                      {...field}
                      disabled={modalMode === 'Create'}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="designationName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Designation Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Designation name" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            {/* <Button type="submit">Submit</Button> */}
          </form>
        </Form>
        {/* <div className="">
          <div className="space-y-1 mb-4">
            <Label htmlFor="designationCode" className="">
              Designation Code
            </Label>
            <Input id="designationCode" value="" placeholder="Designation Code" />
          </div>
          <div className="space-y-1 mb-4">
            <Label htmlFor="designationName">Designation Name</Label>
            <Input id="designationName" value="" placeholder="Designation Name" />
          </div>
        </div> */}
        <DialogFooter>
          <Button type="submit">Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default DesignationModal
