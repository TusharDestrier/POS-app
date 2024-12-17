import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useRoleMasterStore } from '../../store/useRoleMasterStore'

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

const formSchema = z.object({
  code: z.string().min(2, {
    message: ' Code must be at least 2 characters.',
  }),
  roleName: z.string().min(2, {
    message: 'Role Name must be at least 2 characters.',
  }),
})

function RoleMasterModal() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: '',
      roleName: '',
    },
  })

  const mode = useRoleMasterStore((state) => state.mode)
  const isOpen = useRoleMasterStore((state) => state.isOpen)
  const close = useRoleMasterStore((state) => state.close)
  const modalMode = useRoleMasterStore((state) => state.mode)
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
                  <FormLabel>Role Code</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="ROle Code"
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
            <Label htmlFor="code" className="">
              Code
            </Label>
            <Input id="code" value=""  placeholder='Code'/>
          </div>
          <div className="space-y-1 mb-4">
            <Label htmlFor="roleName">Role Name</Label>
            <Input id="roleName" value=""  placeholder='Role Name'/>
          </div>
        </div> */}
        <DialogFooter>
          <Button type="submit">Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default RoleMasterModal
