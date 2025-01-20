import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import { customerDataFormatter } from '../../helper/customerDataFormatter'
import { useCreateCustomer } from '../../hooks_api/useCreateCustomer'
import { useCustomerData } from '../../hooks_api/useCustomerData'
import { CustomerMasterSchema } from '../../schemas/CustomerMaster.schema'
import { useCustomerMaster } from '../../store/useCustomerMaster'
import { useCustomerMasterDataStore } from '../../store/useCustomerMasterDataStore'
import CustomerMasterTab from '../CustomerMasterTab/CustomerMasterTab'

import GlobalViewerLoader from '@/components/GlobalViewerLoader'
import { Button } from '@/components/ui/button'

function CustomerForm() {
  const mode = useCustomerMaster((state) => state.mode)
  const customerID = useCustomerMasterDataStore((state) => state.currentCustomerMasterId)
  const {
    customerData,
    isLoading: customerLoading,
    error: customerError,
  } = useCustomerData(Number(customerID))
  const { createCustomerAsync, error, isPending } = useCreateCustomer()
  const closeModal = useCustomerMaster((state) => state.close)
  const formMethods = useForm({
    resolver: zodResolver(CustomerMasterSchema),
    defaultValues: {
      personal: {
        mobileNo: '',
        firstName: '',
        middleName: '',
        lastName: '',
        gender: 'male',
        dateOfBirth: new Date(),
        anniversaryDate: new Date(),
        profession: '',
        spouseName: '',
        isEmployee: false,
        panNo: '',
        gstNo: '',
        gstDate: new Date(),
      },
      communication: {
        address: '',
        area: '',
        city: '',
        pin: '',
        state: '',
        email: '',
        whatsappNo: '',
        alternatePhoneNo: '',
        receivePushMessage: false,
        preferredCommunication: 'sms',
      },
      membership: {
        customerCategory: '',
        membershipCategory: '',
        membershipNo: '',
        validTill: new Date(),
      },
    },
  })

  useEffect(() => {
    if (customerData && !Array.isArray(customerData)) {
      formMethods.reset({
        personal: {
          mobileNo: customerData.mobile || '',
          firstName: customerData.customerFirstName || '',
          middleName: customerData.customerMiddleName || '',
          lastName: customerData.customerLastName || '',
          gender: customerData.gender === 'M' ? 'male' : 'female',
          dateOfBirth: customerData.dateOfBirth ? new Date(customerData.dateOfBirth) : new Date(),
          anniversaryDate: customerData.anniversary
            ? new Date(customerData.anniversary)
            : new Date(),
          profession: customerData.profession || '',
          spouseName: customerData.spouseName || '',
          isEmployee: customerData.isEmployee === 'Y',
          panNo: customerData.panNo || '',
          gstNo: customerData.gstRegNo || '',
          gstDate: customerData.gstRegDate ? new Date(customerData.gstRegDate) : new Date(),
        },
        communication: {
          address: customerData.address || '',
          area: customerData.area || '',
          city: customerData.city || '',
          pin: customerData.pinCode || '',
          state: customerData.state || '',
          email: customerData.email || '',
          whatsappNo: customerData.whatsAppNo || '',
          alternatePhoneNo: customerData.alternatePhnNo || '',
          receivePushMessage: customerData.isPushMessage === 'Y',
          preferredCommunication: customerData.preferredComMode || 'sms',
        },
        membership: {
          customerCategory: customerData.customerCatName || '',
          membershipCategory: customerData.membershipCategoryName || '',
          membershipNo: customerData.membershipNo || '',
          validTill: customerData.validTill ? new Date(customerData.validTill) : new Date(),
        },
      })
    }
  }, [customerData, mode, formMethods.reset])

  // Handle form submission
  const onSubmit = formMethods.handleSubmit(
    async (data) => {
      // console.log('Form Data Submitted: ', data) // Logs if submission is successful
      let transformData
      transformData = customerDataFormatter(
        {
          ...data.communication,
          ...data.membership,
          ...data.personal,
        },
        customerID ? Number(customerID) : null
      )

      try {
        await createCustomerAsync(transformData)
        closeModal() // ✅ Success pe modal close
      } catch (err: any) {
        console.log(err)
      }
    },
    (errors) => {
      console.log('Validation Errors: ', errors) // Logs validation errors, if any
    }
  )

  if (customerLoading) {
    return <GlobalViewerLoader />
  }

  if (!customerLoading && customerData && mode === 'View') {
    return <h3>{JSON.stringify(customerData)}</h3>
  }

  if (customerError && mode === 'View') {
    return <h3>Sorry there is some problem</h3>
  }

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
          <Button type="submit" className="btn btn-primary" disabled={isPending}>
            {isPending ? 'Submitting...' : 'Submit'}
          </Button>
        </div>
        {error && <p className="text-end">{error.message}</p>}
      </form>
    </FormProvider>
  )
}

export default CustomerForm
