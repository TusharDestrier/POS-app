import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import AllocateStore from './AllocateStore'
import { userMasterSchema } from './schema/userMasterSchema'
import { useUserMasterStore } from '../../store/useUserMasterStore'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

function UserMasterForm() {
  const mode = useUserMasterStore((state) => state.mode)
  const form = useForm<z.infer<typeof userMasterSchema>>({
    resolver: zodResolver(userMasterSchema),
    mode: 'onChange',
    defaultValues: {
      userName: '',
      loginId: '',
      password: '',
      confirmPassword: '',
      defineProfile: '',
      defineRole: '',
      employeeId: '',
      mobileNo: '',
      whatsappNo: '',
      email: '',
      remarks: '',
      isActive: false,
    },
  })

  return (
    <Form {...form}>
      <form className="space-y-4 overflow-y-auto max-h-[550px]">
        <div className="flex flex-wrap gap-3">
          {' '}
          {/* ফিল্ডগুলো এক লাইনে */}
          <FormField
            control={form.control}
            name="userName"
            render={({ field }) => (
              <FormItem className="w-1/3">
                {' '}
                {/* প্রতিটা ফিল্ডের জন্য কিছু width সেট করা */}
                <FormLabel>
                  Name <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Name here" {...field} required />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="loginId"
            render={({ field }) => (
              <FormItem className="w-1/3">
                <FormLabel>
                  Login Id <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Login Id" {...field} disabled={mode === 'View'} required />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-1/3">
                <FormLabel>
                  Password <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Password"
                    {...field}
                    disabled={mode === 'View'}
                    required
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="w-1/3">
                <FormLabel>
                  Confirm Password <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    {...field}
                    disabled={mode === 'View'}
                    required
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="defineProfile"
            render={({ field }) => (
              <FormItem className="w-1/3">
                <FormLabel>
                  Define Profile <span className="text-primary">*</span>
                </FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a profile..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="profile1">Profile 1</SelectItem>
                    <SelectItem value="profile2">Profile 2</SelectItem>
                    <SelectItem value="profile3">Profile 3</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="defineRole"
            render={({ field }) => (
              <FormItem className="w-1/3">
                <FormLabel>
                  Define Role <span className="text-primary">*</span>
                </FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a Role..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="adminHead">Admin Head</SelectItem>
                    <SelectItem value="storeManager">Store Manager</SelectItem>
                    <SelectItem value="productionHead">Production Head</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="employeeId"
            render={({ field }) => (
              <FormItem className="w-1/3">
                <FormLabel>Employee Id</FormLabel>
                <FormControl>
                  <Input placeholder="Employee Id" {...field} disabled={mode === 'View'} required />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-1/3">
                <FormLabel>
                  Email <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Employee Id" {...field} disabled={mode === 'View'} required />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="mobileNo"
            render={({ field }) => (
              <FormItem className="w-1/3">
                <FormLabel>Mobile No</FormLabel>
                <FormControl>
                  <Input placeholder="Mobile No" {...field} disabled={mode === 'View'} required />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="whatsappNo"
            render={({ field }) => (
              <FormItem className="w-1/3">
                <FormLabel>WhatsApp No</FormLabel>
                <FormControl>
                  <Input placeholder="WhatsApp No" {...field} disabled={mode === 'View'} required />
                </FormControl>
              </FormItem>
            )}
          />
          {/* {Remarks} */}
          <FormField
            control={form.control}
            name="remarks"
            render={({ field }) => (
              <FormItem className="w-1/3 flex flex-col">
                <FormLabel>Remarks</FormLabel>
                <FormControl>
                  <textarea
                    {...field}
                    placeholder="Type here..."
                    className="mt-1 p-2 border rounded-md w-full"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          {/* {Inactive} */}
          <FormField
            control={form.control}
            name="isActive"
            render={({ field }) => (
              <FormItem className="w-1/3 flex flex-col">
                <FormLabel>Inactive</FormLabel>
                <FormControl>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        {...field}
                        value="true"
                        checked={field.value === true}
                      />
                    </label>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* AllocateStore কে কলাম লেআউটে রাখা */}
        <div className="flex flex-col gap-4 mt-4">
          <AllocateStore />
        </div>

        <div className="mt-6 space-x-2 flex justify-end">
          <Button type="submit">Submit</Button>
          <Button type="submit">Cancel</Button>
        </div>
      </form>
    </Form>
  )
}
export default UserMasterForm
