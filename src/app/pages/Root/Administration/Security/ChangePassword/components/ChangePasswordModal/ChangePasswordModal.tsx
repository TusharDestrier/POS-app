import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useChangePasswordStore } from '../../store/useChangePasswordStore'

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
  userName: z.string().min(2, {
    message: ' User Name must be at least 2 characters.',
  }),
  oldPassword: z.string().min(2, {
    message: 'Old Password must be at least 2 characters.',
  }),
  newPassword: z.string().min(2, {
    message: 'New Password must be at least 2 characters.',
  }),
  confirmPassword: z.string().min(2, {
    message: 'Confirm Password must be at least 2 characters.',
  }),
})

function ChangePasswordModal() {

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        userName: '',
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
      },
    })

  const mode = useChangePasswordStore((state) => state.mode)
  const isOpen = useChangePasswordStore((state) => state.isOpen)
  const close = useChangePasswordStore((state) => state.close)
  const modalMode = useChangePasswordStore((state) => state.mode)

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
          <DialogTitle>{mode} Change Password</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> User Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder=" User Name"
                      {...field}
                      disabled={modalMode === 'Create'}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="oldPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Old Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Old Password" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Input placeholder="New Password" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm  Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Confirm Password" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            {/* <Button type="submit">Submit</Button> */}
          </form>
        </Form>
        <DialogFooter>
          <Button type="submit">Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ChangePasswordModal
