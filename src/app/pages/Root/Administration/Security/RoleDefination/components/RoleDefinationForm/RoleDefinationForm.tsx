import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

//import { useRoleDefination } from '../../store/useRoleDefination'

import { roledefinationSchemas } from './schemas/roledefinationSchemas'
import { useRoleDefination } from '../../store/useRoleDefination'

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

function RoleDefinationForm() {
   const closeModal = useRoleDefination((state) => state.close)
  //const mode = useRoleDefination((state) => state.mode)
  const form = useForm<z.infer<typeof roledefinationSchemas>>({
    resolver: zodResolver(roledefinationSchemas),
    mode: 'onChange',
    defaultValues: {
      roleName: '',
      defineProfile: '',
      details: '',
    },
  })

  return (
    <Form {...form}>
      <form className="space-y-4 overflow-y-auto max-h-[550px]">
        <div className="flex flex-col gap-4">
          {/* Role Name */}
          <FormField
            control={form.control}
            name="roleName"
            render={({ field }) => (
              <FormItem className="flex items-center gap-4">
                <FormLabel className="w-40">
                  Role Name <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Role Name" {...field} required className="flex-1" />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Define Profile */}
          <FormField
            control={form.control}
            name="defineProfile"
            render={({ field }) => (
              <FormItem className="flex items-center gap-4">
                <FormLabel className="w-40">
                  Define Profile <span className="text-primary">*</span>
                </FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="flex-1">
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

          {/* Details */}
          <FormField
            control={form.control}
            name="details"
            render={({ field }) => (
              <FormItem className="flex items-start gap-4">
                <FormLabel className="w-40">Details</FormLabel>
                <FormControl>
                  <textarea
                    {...field}
                    placeholder="Type here..."
                    className="mt-1 p-2 border rounded-md flex-1"
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-6 m-3">
          <div className="p-6  mx-auto rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold mb-4">Select Menu Option</h1>
            <p>Admin</p>
            <p>Setup</p>
            <p >Security</p>

          </div>
          <div className="p-6 max-w-md mx-auto rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold mb-4">Select Permissions</h1>
            <div className=" p-4 rounded-lg">
              <h2 className="text-lg font-medium mb-3">Menu Option: Profile</h2>
              <table className="w-full border  rounded-md">
                <tbody>
                  {['Add', 'Edit', 'Delete', 'Authorize', 'UnAuthorize'].map((item) => (
                    <tr key={item} className="border-b last:border-b-0">
                      <td className="py-2 px-4 flex items-center justify-between">
                        <span>{item}</span>
                        <input type="checkbox" className="w-5 h-5 accent-blue-500" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-2">
          <Button type="submit">Save</Button>
          <Button type="submit" variant="secondary" onClick={closeModal}>
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  )
}
export default RoleDefinationForm
