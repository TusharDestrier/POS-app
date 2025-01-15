import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import { toast } from 'sonner'

import { customerDataFormatter } from '../../helper/customerDataFormatter'
import { useCreateCustomer } from '../../hooks_api/useCreateCustomer'
import { CustomerMasterSchema } from '../../schemas/CustomerMaster.schema'
import { useCustomerMaster } from '../../store/useCustomerMaster'
import CustomerMasterTab from '../CustomerMasterTab/CustomerMasterTab'

import { Button } from '@/components/ui/button'

function CustomerForm() {
  const { createCustomer, error, isLoading } = useCreateCustomer()
  const closeModal = useCustomerMaster((state) => state.close)
  const formMethods = useForm({
    resolver: zodResolver(CustomerMasterSchema),
    defaultValues: {
      personal: {
        mobileNo: '8777524967', // Default to an empty string
        firstName: 'tushar', // Default to an empty string
        middleName: 'middle', // Optional, can be empty
        lastName: 'dutta', // Default to an empty string
        gender: 'male', // Default to 'male' or 'female'
        dateOfBirth: new Date(), // Default to today's date
        anniversaryDate: new Date(), // Optional, default to null
        profession: 'developer', // Default to an empty string
        spouseName: 'abhi nahi', // Optional, default to empty string
        isEmployee: true, // Default to false
        panNo: '191920293029112', // Optional, default to empty string
        gstNo: '214232312', // Optional, default to empty string
        gstDate: new Date(), // Optional, default to null
      },
      communication: {
        address: 'address', // Default to an empty string
        area: 'amhers stre', // Optional, default to empty string
        city: 'kolkata', // Optional, default to empty string
        pin: '10000023', // Optional, default to empty string
        state: 'westbanege', // Optional, default to empty string
        email: '2232@gmail.com', // Default to an empty string
        whatsappNo: '9838323243', // Optional, default to empty string
        alternatePhoneNo: '2324232532', // Optional, default to empty string
        receivePushMessage: false, // Default to false
        preferredCommunication: 'sms', // Default to 'sms'
      },
      membership: {
        customerCategory: 'regular', // Default to an empty string
        membershipCategory: 'silver', // Default to an empty string
        membershipNo: '21233', // Optional, default to empty string
        validTill: new Date(), // Optional, default to null
      },
    },
  })

  // Handle form submission
  const onSubmit = formMethods.handleSubmit(
    async (data) => {
      // console.log('Form Data Submitted: ', data) // Logs if submission is successful
      const transformData = customerDataFormatter({
        ...data.communication,
        ...data.membership,
        ...data.personal,
      })

      try {
        await createCustomer(transformData)
        closeModal() // ✅ Success pe modal close
        toast.success('Customer Created', {
          style: {
            backgroundColor: '#e3ffea',
            color: '#3ed665',
          },
        })
      } catch (err: any) {
        toast.error(err.message, {
          style: {
            backgroundColor: '#f7edeb',
            color: '#ff6242',
          },
        }) // Server se aayi specific error ya generic error
      }
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
          <Button type="submit" className="btn btn-primary" disabled={isLoading}>
            {isLoading ? 'Submitting...' : 'Submit'}
          </Button>
        </div>
        {error && <p className="text-end">{error}</p>}
      </form>
    </FormProvider>
  )
}

export default CustomerForm
