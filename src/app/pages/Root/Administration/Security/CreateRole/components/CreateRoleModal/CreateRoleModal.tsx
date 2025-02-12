import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useCreateRoleStore } from '../../store/useCreateRoleStore'

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
  code: z.string().min(2, {
    message: ' Code must be at least 2 characters.',
  }),
  roleName: z.string().min(2, {
    message: 'Role Name must be at least 2 characters.',
  }),
})

function DesignationModal() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: '',
      roleName: '',
    },
  })

  const mode = useCreateRoleStore((state) => state.mode)
  const isOpen = useCreateRoleStore((state) => state.isOpen)
  const close = useCreateRoleStore((state) => state.close)
  const modalMode = useCreateRoleStore((state) => state.mode)
 const closeModal = useCreateRoleStore((state) => state.close)
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
          <DialogTitle>{mode} Role Master</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> Code</FormLabel>
                  <FormControl>
                    <Input
                      placeholder=" Code"
                      {...field}
                      disabled={modalMode === 'Create'}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="roleName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Role name" {...field} />
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
          <Button type="submit">Submit</Button>
          <Button type="submit" onClick={closeModal}>Cancel</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default DesignationModal
