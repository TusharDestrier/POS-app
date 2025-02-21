import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

import AllocateStore from './AllocateStore'
import { userMasterSchema } from './schema/userMasterSchema'
import { UserMasterFormatter } from '../../helper/UserMasterFormatter'
import { useCreateUsermaster } from '../../hooks_api/useCreateUsermaster'
import { useUserMasterData } from '../../hooks_api/useUserMasterData'
import { useUserMasterDataStore } from '../../store/useUserMasterDataStore'
import { useUserMasterStore } from '../../store/useUserMasterStore'

import GlobalViewerLoader from '@/components/GlobalViewerLoader'
import { Button } from '@/components/ui/button'
import {
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
  const userMasterId = useUserMasterDataStore((state) => state.currentUserMasterId)
  const {
    // userMasterData,
    isLoading: usermasterLoading,
    error: usermasterError,
  } = useUserMasterData(Number(userMasterId))
 const { createUsermaster, isPending } = useCreateUsermaster()
 const {userMasterData,isLoading } = useUserMasterData()
  const closeModal = useUserMasterStore((state) => state.close)
const clearId = useUserMasterDataStore((state) => state.clearCurrentUserMasterId)

  const formMethods = useForm<z.infer<typeof userMasterSchema>>({
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

  // const onSubmit = async (data: z.infer<typeof userMasterSchema>) => {
  //   try {
  //     console.log("Submitting data:", data) // Debugging log
  
  //     const transformData = UserMasterFormatter(
  //       {
  //         ...data,
  //         loginID: data.loginId,
  //         profileID: Number(data.defineProfile),
  //         roleID: Number(data.defineRole),
  //         defaultStoreID: 1, // এখানে কোনো valid store ID দিতে হবে
  //         createdDate: new Date().toISOString(), // Ensure it's a string
  //         updatedDate: new Date().toISOString(),
  //       },
  //       Number(userMasterId)
  //     );
  
  //     console.log("Transformed Data:", transformData) // Debugging log
  //     console.log("API Call start");
  //     await createUsermaster(transformData);
  //     console.log("API Call close");
  //     closeModal();
  //     clearId();
  //   } catch (err) {
  //     console.error("Error submitting form:", err);
  //   }
  // };
  

   async function onSubmit(data: z.infer<typeof userMasterSchema>) {
      try {
        const formattedData = UserMasterFormatter(
          {
            ...data,
            loginID: data.loginId,
            profileID: Number(data.defineProfile),
            roleID: Number(data.defineRole),
            defaultStoreID: 1, // Replace with a valid store ID
            createdDate: new Date().toISOString(),
            updatedDate: new Date().toISOString(),
            enteredBy: 0, // Replace with the actual enteredBy value
            objStore: [], // Replace with the actual objStore value
          },
          String(userMasterData?.[0]?.loginID)
        )
        await createUsermaster(formattedData)
        console.log(formattedData);
        
        closeModal()
        clearId()
      } catch (err) {
        if (err instanceof Error) {
          throw new Error(err.message)
        }
      }
    }

  if (usermasterLoading) {
    return <GlobalViewerLoader />
  }
  if (usermasterError && mode === 'View') {
    return <h3>Sorry there is some problem</h3>
  }

   if (isLoading) {
      return <GlobalViewerLoader />
    }

  return (
     <FormProvider {...formMethods}>
    <form onSubmit={formMethods.handleSubmit(onSubmit)}>
      <form className="space-y-4 overflow-y-auto max-h-[650px]">
        <div className="flex flex-wrap gap-3">
          {' '}
          {/* ফিল্ডগুলো এক লাইনে */}
          <FormField
            control={formMethods.control}
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
            control={formMethods.control}
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
            control={formMethods.control}
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
            control={formMethods.control}
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
            control={formMethods.control}
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
            control={formMethods.control}
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
            control={formMethods.control}
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
            control={formMethods.control}
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
            control={formMethods.control}
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
            control={formMethods.control}
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
            control={formMethods.control}
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
            control={formMethods.control}
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
        <Button type="submit" className="btn btn-primary" disabled={isPending}>
            {isPending ? 'Submiting' : 'Submit'}
          </Button>
          <Button onClick={closeModal}>Cancel</Button>
        </div>
      </form>
    </form>
    </FormProvider>
  )
}
export default UserMasterForm
