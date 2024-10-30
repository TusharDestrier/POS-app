import { useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

function LogisticDetailForm() {
  // Central form control access from StoreMasterTab
  const { control } = useFormContext();

  return (
    <div className="space-y-3">
      {/* Bill To Address Field */}
      <FormField
        control={control}
        name="logistics.billToAddress"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Bill To Address <span className="text-primary">*</span>
            </FormLabel>
            <FormControl>
              <textarea
                className="w-full mt-5 p-5"
                placeholder="Type your address here."
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* City Field */}
      <FormField
        control={control}
        name="logistics.city"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              City <span className="text-primary">*</span>
            </FormLabel>
            <FormControl>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a city" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>City</SelectLabel>
                    <SelectItem value="kolkata">Kolkata</SelectItem>
                    <SelectItem value="pune">Pune</SelectItem>
                    <SelectItem value="hydrabad">Hyderabad</SelectItem>
                    <SelectItem value="bengaluru">Bengaluru</SelectItem>
                    <SelectItem value="mumbai">Mumbai</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Postal Code Field */}
      <FormField
        control={control}
        name="logistics.postalCode"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Postal Code <span className="text-primary">*</span>
            </FormLabel>
            <FormControl>
              <Input placeholder="Postal Code" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* State Field */}
      <FormField
        control={control}
        name="logistics.state"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              State <span className="text-primary">*</span>
            </FormLabel>
            <FormControl>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a state" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>State</SelectLabel>
                    <SelectItem value="wb">West Bengal</SelectItem>
                    <SelectItem value="karnataka">Karnataka</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Contact Person Field */}
      <FormField
        control={control}
        name="logistics.contactPerson"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Contact Person <span className="text-primary">*</span>
            </FormLabel>
            <FormControl>
              <Input placeholder="Contact Person" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Contact No Field */}
      <FormField
        control={control}
        name="logistics.contactNo"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Contact No.</FormLabel>
            <FormControl>
              <Input placeholder="Contact No." {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Alternative Contact No Field */}
      <FormField
        control={control}
        name="logistics.alcontactNo"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Alternative Contact No.</FormLabel>
            <FormControl>
              <Input placeholder="Alternative Contact No." {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Email ID Field */}
      <FormField
        control={control}
        name="logistics.emailId"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Email Id <span className="text-primary">*</span>
            </FormLabel>
            <FormControl>
              <Input placeholder="Email Id" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Ship To Address Field */}
      <FormField
        control={control}
        name="logistics.shipToAddress"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Ship To Address <span className="text-primary">*</span>
            </FormLabel>
            <FormControl>
              <textarea
                className="w-full mt-5 p-5"
                placeholder="Type your address here."
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Sourcing W/H Field */}
      <FormField
        control={control}
        name="logistics.searching"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Sourcing W/H</FormLabel>
            <FormControl>
              <Input placeholder="Sourcing W/H" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

export default LogisticDetailForm;
