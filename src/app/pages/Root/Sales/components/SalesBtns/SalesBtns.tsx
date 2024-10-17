import { useState, ChangeEvent, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import CustomerHistory from '../CustomerBox/components/MemberForm/components/CustomerHistory'
import CreateCustomerBtn from '../CustomerBox/components/MemberForm/components/CreateCutomerBtn'

function MemberForm() {
  const [phoneNo, setPhoneNo] = useState('')
  const [memberId, setMemberId] = useState('')
  const [memberName, setMemberName] = useState('')
  const [created, setCreatedAt] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isNewCustomer, setIsNewCustomer] = useState(false)

  // Simulate customer lookup
  const checkCustomerExists = (phoneNo: string) => {
    const mockCustomer = {
      memberName: 'John Doe',
      memberId: '123456',
      createdDate: '2022-05-16',
    }

    // Simulate: return customer if phone matches, else return null
    return phoneNo === '1234567890' ? mockCustomer : null
  }

  // Handle input changes
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target

    if (name === 'phoneNo') {
      setPhoneNo(value)
    }
  }

  // Trigger lookup based on phone number change
  useEffect(() => {
    if (phoneNo.length === 10) {
      const customer = checkCustomerExists(phoneNo)
      if (customer) {
        setIsNewCustomer(false) // Customer exists, no need to create
        setMemberName(customer.memberName)
        setMemberId(customer.memberId)
        setCreatedAt(customer.createdDate)
        setErrorMessage('')
      } else {
        setIsNewCustomer(true) // No customer, allow customer creation
        setMemberName('')
        setMemberId('')
        setCreatedAt('')
        setErrorMessage('Customer not found. Do you want to create a new one?')
      }
    } else if (phoneNo.length > 0 && phoneNo.length < 10) {
      setErrorMessage('Invalid phone number format. It must be 10 digits.')
    } else {
      setErrorMessage('')
    }
  }, [phoneNo])

  // For creating a new customer or submitting form (if needed)
  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (isNewCustomer) {
      // Logic to create new customer
      console.log('Creating new customer with data:', {
        phoneNo,
        memberName,
        memberId,
      })
    } else {
      // Logic to handle existing customer
      console.log('Existing customer selected:', {
        phoneNo,
        memberName,
        memberId,
      })
    }
  }

  return (
    <form className="flex flex-wrap gap-3 mt-2" onSubmit={handleSubmit}>
      {/* Member Phone Number Field */}
      <Label className="flex flex-col gap-2">
        Phone Number
        <Input
          placeholder="Enter Phone Number"
          onChange={handleChange}
          value={phoneNo}
          name="phoneNo"
        />
      </Label>

      {/* Display Error Message */}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}

      {/* Conditionally Render the Rest of the Form */}
      {!isNewCustomer && phoneNo.length === 10 && (
        <>
          {/* Member Name Field */}
          <Label className="flex flex-col gap-2">
            Member Name
            <Input
              placeholder="Enter Member name"
              name="memberName"
              value={memberName}
              disabled // Disable because the customer already exists
            />
          </Label>

          {/* Member ID Field */}
          <Label className="flex flex-col gap-2">
            Member Id
            <Input
              placeholder="Enter Member Id"
              name="memberId"
              value={memberId}
              disabled // Disable because the customer already exists
            />
          </Label>

          {/* Created At Field */}
          <Label className="flex flex-col gap-2">
            Created At
            <Input placeholder="Created At" value={created} disabled />
          </Label>

          {/* Submit Button */}
          <div className="ml-auto flex  flex-col">
            <CustomerHistory />
          </div>
        </>
      )}

      {/* Render Button to Create New Customer if the customer is not found */}
      {isNewCustomer && phoneNo.length === 10 && (
        <div className="ml-auto flex flex-col">
          <CreateCustomerBtn />
        </div>
      )}
    </form>
  )
}

export default MemberForm
