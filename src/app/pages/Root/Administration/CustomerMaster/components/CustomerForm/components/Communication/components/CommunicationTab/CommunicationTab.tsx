import { useFormContext } from 'react-hook-form'

import { Checkbox } from '@/components/ui/checkbox'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Textarea } from '@/components/ui/textarea'

// const formSchema = z.object({
//   address: z.string().min(1, { message: 'Address is required.' }),
//   area: z.string().optional(),
//   city: z.string().optional(),
//   pin: z.string().optional(),
//   state: z.string().optional(),
//   email: z.string().email({ message: 'Invalid email address.' }).optional(),
//   whatsappNo: z.string().optional(),
//   alternatePhoneNo: z.string().optional(),
//   receivePushMessage: z.boolean().optional(),
//   preferredCommunication: z.enum(['sms', 'email', 'whatsapp'], {
//     required_error: 'Preferred communication mode is required.',
//   }),
// })

function CommunicationTab() {
  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     address: '',
  //     area: '',
  //     city: '',
  //     pin: '',
  //     state: '',
  //     email: '',
  //     whatsappNo: '',
  //     alternatePhoneNo: '',
  //     receivePushMessage: false,
  //     preferredCommunication: 'sms',
  //   },
  // })

  // function onSubmit(values: z.infer<typeof formSchema>) {
  //   console.log(values)
  // }

  const { control } = useFormContext()
  return (
    <div className='space-y-3'>
        {/* Address */}
        <FormField
          control={control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-3 gap-4 items-center">
          {/* Area */}
          <FormField
            control={control}
            name="area"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Area</FormLabel>
                <FormControl>
                  <Input placeholder="Enter area" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* City */}
          <FormField
            control={control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="Enter city" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* PIN */}
          <FormField
            control={control}
            name="pin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>PIN</FormLabel>
                <FormControl>
                  <Input placeholder="Enter PIN" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* State */}
          <FormField
            control={control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State</FormLabel>
                <FormControl>
                  <Input placeholder="Enter state" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Enter email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* WhatsApp No. */}
          <FormField
            control={control}
            name="whatsappNo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>WhatsApp No.</FormLabel>
                <FormControl>
                  <Input placeholder="Enter WhatsApp No." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Alternate Phone No. */}
          <FormField
            control={control}
            name="alternatePhoneNo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Alternate Phone No.</FormLabel>
                <FormControl>
                  <Input placeholder="Enter alternate phone no." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Preferred Communication Mode */}
          <FormField
            control={control}
            name="preferredCommunication"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-3 ">
                <FormLabel>Preferred Communication Mode</FormLabel>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sms" id="sms" />
                    <FormLabel htmlFor="sms">SMS</FormLabel>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="email" id="email" />
                    <FormLabel htmlFor="email">Email</FormLabel>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="whatsapp" id="whatsapp" />
                    <FormLabel htmlFor="whatsapp">WhatsApp</FormLabel>
                  </div>
                </RadioGroup>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div></div>
        <FormField
          control={control}
          name="receivePushMessage"
          render={({ field }) => (
            <FormItem className="flex items-center space-x-4 ">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <FormLabel>Agree to Receive Push Message</FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Agree to Receive Push Message */}
     </div>
  )
}

export default CommunicationTab
