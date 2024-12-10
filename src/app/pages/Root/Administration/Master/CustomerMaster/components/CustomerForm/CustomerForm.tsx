import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'

import { CustomerMasterSchema } from '../../schemas/CustomerMaster.schema'
import CustomerMasterTab from '../CustomerMasterTab/CustomerMasterTab'

import { Button } from '@/components/ui/button'

function CustomerForm() {
  const formMethods = useForm({
    resolver: zodResolver(CustomerMasterSchema),
    defaultValues: {
      personal: {
        mobileNo: '', // Default to an empty string
        firstName: '', // Default to an empty string
        middleName: '', // Optional, can be empty
        lastName: '', // Default to an empty string
        gender: 'male', // Default to 'male' or 'female'
        dateOfBirth: new Date(), // Default to today's date
        anniversaryDate: null, // Optional, default to null
        profession: '', // Default to an empty string
        spouseName: '', // Optional, default to empty string
        isEmployee: false, // Default to false
        panNo: '', // Optional, default to empty string
        gstNo: '', // Optional, default to empty string
        gstDate: null, // Optional, default to null
      },
      communication: {
        address: '', // Default to an empty string
        area: '', // Optional, default to empty string
        city: '', // Optional, default to empty string
        pin: '', // Optional, default to empty string
        state: '', // Optional, default to empty string
        email: '', // Default to an empty string
        whatsappNo: '', // Optional, default to empty string
        alternatePhoneNo: '', // Optional, default to empty string
        receivePushMessage: false, // Default to false
        preferredCommunication: 'sms', // Default to 'sms'
      },
      membership: {
        customerCategory: '', // Default to an empty string
        membershipCategory: '', // Default to an empty string
        membershipNo: '', // Optional, default to empty string
        validTill: null, // Optional, default to null
      },
    },
  })

  // Handle form submission
  const onSubmit = formMethods.handleSubmit(
    (data) => {
      console.log('Form Data Submitted: ', data) // Logs if submission is successful
    },
    (errors) => {
      console.log('Validation Errors: ', errors) // Logs validation errors, if any
    }
  )

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={(e) => {
          e.preventDefault() // Ensure default form submission behavior is prevented
          onSubmit() // Trigger submission
        }}
       
      >
       

        <CustomerMasterTab />
       

        {/* Submit Button for entire form */}
        <div className="h-[60px] sticky bottom-0 right-0 flex justify-end items-center">
          <Button type="submit" className=" btn btn-primary">
            Submit All
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}

export default CustomerForm
